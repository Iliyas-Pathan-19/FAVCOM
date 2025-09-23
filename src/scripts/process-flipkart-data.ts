import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

interface FlipkartProduct {
  uniq_id: string;
  crawl_timestamp: string;
  product_url: string;
  product_name: string;
  product_category_tree: string;
  pid: string;
  retail_price: string;
  discounted_price: string;
  image: string;
  is_FK_Advantage_product: string;
  description: string;
  product_rating: string;
  overall_rating: string;
  brand: string;
  product_specifications: string;
}

interface ProcessedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  rating: number;
  reviews: number;
  brand: string;
  inStock: boolean;
  tags: string[];
  specifications: Record<string, string>;
  url: string;
  discount?: number;
}

function parseCategoryTree(categoryTree: string): { category: string; subcategory: string } {
  try {
    const categories = JSON.parse(categoryTree);
    if (Array.isArray(categories) && categories.length > 0) {
      const fullPath = categories[0];
      const parts = fullPath.split(' >> ');
      const category = parts[0] || 'Other';
      const subcategory = parts[1] || category;
      
      // Shorten category names that exceed 20 characters
      const shortCategory = category.length > 20 ? category.substring(0, 17) + '...' : category;
      const shortSubcategory = subcategory.length > 20 ? subcategory.substring(0, 17) + '...' : subcategory;
      
      return { category: shortCategory, subcategory: shortSubcategory };
    }
  } catch (error) {
    console.warn('Error parsing category tree:', error);
  }
  return { category: 'Other', subcategory: 'Other' };
}

function parseImages(imageString: string): string[] {
  try {
    const images = JSON.parse(imageString);
    if (Array.isArray(images)) {
      return images.filter(img => img && typeof img === 'string');
    }
  } catch (error) {
    console.warn('Error parsing images:', error);
  }
  return [];
}

function parseSpecifications(specString: string): Record<string, string> {
  try {
    const specs = JSON.parse(specString);
    if (specs && typeof specs === 'object' && specs.product_specification) {
      const result: Record<string, string> = {};
      if (Array.isArray(specs.product_specification)) {
        specs.product_specification.forEach((spec: any) => {
          if (spec.key && spec.value) {
            result[spec.key] = spec.value;
          }
        });
      }
      return result;
    }
  } catch (error) {
    console.warn('Error parsing specifications:', error);
  }
  return {};
}

function generateTags(name: string, category: string, subcategory: string, brand: string): string[] {
  const tags = new Set<string>();
  
  // Add category and subcategory
  tags.add(category.toLowerCase());
  tags.add(subcategory.toLowerCase());
  
  // Add brand
  if (brand && brand !== 'No rating available') {
    tags.add(brand.toLowerCase());
  }
  
  // Extract keywords from product name
  const nameWords = name.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2);
  
  nameWords.forEach(word => tags.add(word));
  
  return Array.from(tags).slice(0, 10); // Limit to 10 tags
}

function processProduct(raw: FlipkartProduct): ProcessedProduct {
  const retailPrice = parseFloat(raw.retail_price) || 0;
  const discountedPrice = parseFloat(raw.discounted_price) || 0;
  const price = discountedPrice > 0 ? discountedPrice : retailPrice;
  const originalPrice = discountedPrice > 0 ? retailPrice : undefined;
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : undefined;
  
  const { category, subcategory } = parseCategoryTree(raw.product_category_tree);
  const images = parseImages(raw.image);
  const specifications = parseSpecifications(raw.product_specifications);
  
  // Parse rating
  let rating = 0;
  let reviews = 0;
  if (raw.product_rating && raw.product_rating !== 'No rating available') {
    const ratingMatch = raw.product_rating.match(/(\d+\.?\d*)/);
    if (ratingMatch) {
      rating = parseFloat(ratingMatch[1]);
      reviews = Math.floor(Math.random() * 1000) + 10; // Generate random review count
    }
  }
  
  const tags = generateTags(raw.product_name, category, subcategory, raw.brand);
  
  return {
    id: raw.uniq_id,
    name: raw.product_name,
    price,
    originalPrice,
    image: images[0] || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    images,
    category,
    subcategory,
    description: raw.description || `High-quality ${category.toLowerCase()} product`,
    rating,
    reviews,
    brand: raw.brand || 'Unknown',
    inStock: true,
    tags,
    specifications,
    url: raw.product_url,
    discount
  };
}

async function processFlipkartData() {
  console.log('Starting Flipkart data processing...');
  
  const inputPath = path.join(process.cwd(), 'src/data/flipkart.csv');
  const outputPath = path.join(process.cwd(), 'src/data/processed-products.json');
  const categoriesPath = path.join(process.cwd(), 'src/data/categories.json');
  
  const products: ProcessedProduct[] = [];
  const categoryMap = new Map<string, number>();
  
  return new Promise<void>((resolve, reject) => {
    fs.createReadStream(inputPath)
      .pipe(csv())
      .on('data', (data: FlipkartProduct) => {
        try {
          const product = processProduct(data);
          products.push(product);
          
          // Count categories
          const count = categoryMap.get(product.category) || 0;
          categoryMap.set(product.category, count + 1);
          
          if (products.length % 1000 === 0) {
            console.log(`Processed ${products.length} products...`);
          }
        } catch (error) {
          console.warn('Error processing product:', error);
        }
      })
      .on('end', () => {
        console.log(`Processing complete! Total products: ${products.length}`);
        
        // Save processed products
        fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
        console.log(`Saved processed products to ${outputPath}`);
        
        // Save categories
        const categories = Array.from(categoryMap.entries())
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count);
        
        fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2));
        console.log(`Saved ${categories.length} categories to ${categoriesPath}`);
        
        resolve();
      })
      .on('error', (error) => {
        console.error('Error processing CSV:', error);
        reject(error);
      });
  });
}

// Run if called directly
if (require.main === module) {
  processFlipkartData()
    .then(() => {
      console.log('Data processing completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Data processing failed:', error);
      process.exit(1);
    });
}

export { processFlipkartData, type ProcessedProduct };

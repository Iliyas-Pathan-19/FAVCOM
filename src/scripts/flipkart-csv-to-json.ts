// Convert Flipkart CSV to our simplified JSON structure
// Usage: tsx src/scripts/flipkart-csv-to-json.ts path/to/flipkart.csv
import fs from 'fs';
import path from 'path';

function parseCSV(content: string) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = lines.slice(1).map(line => {
    // naive CSV split; handles basic quoted commas
    const cols: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        cols.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    cols.push(current);
    const obj: Record<string, string> = {};
    headers.forEach((h, idx) => { obj[h] = (cols[idx] || '').trim().replace(/^"|"$/g, ''); });
    return obj;
  });
  return rows;
}

async function main() {
  const csvPath = process.argv[2] || path.join(process.cwd(), 'src', 'data', 'flipkart.csv');
  const outDir = path.join(process.cwd(), 'src', 'data');
  const outPath = path.join(outDir, 'products.json');

  if (!fs.existsSync(csvPath)) {
    console.error(`CSV not found at ${csvPath}`);
    process.exit(1);
  }

  const csv = fs.readFileSync(csvPath, 'utf-8');
  const rows = parseCSV(csv);

  const products = rows.map((r, idx) => {
    const price = Number((r['discounted_price'] || '0').toString().replace(/[^0-9.]/g, '')) || 0;
    const category = (r['product_category_tree'] || '').split('>>')[0].replace(/[\[\]"]+/g, '').trim();
    let image = (r['image'] || '').split(',')[0].replace(/[\[\]"]+/g, '').trim();
    const url = String(r['product_url'] || '').trim();
    const title = String(r['product_name'] || `Product ${idx + 1}`).trim();
    
    // Use reliable placeholder images instead of broken Flipkart URLs
    const placeholderImages = [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop'
    ];
    
    // Use placeholder images instead of broken Flipkart URLs
    image = placeholderImages[idx % placeholderImages.length];
    
    return {
      id: idx + 1,
      title: title || `Product ${idx + 1}`,
      price: price || Math.floor(Math.random() * 1000) + 10,
      category: category || 'Other',
      image,
      url: url || '#'
    };
  }).filter(p => p.title && p.title !== 'Product');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(products, null, 2));
  console.log(`Wrote ${products.length} products to ${outPath}`);
}

main();



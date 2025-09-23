import processedProducts from '@/data/processed-products.json';
import categories from '@/data/categories.json';
import type { Product } from '@/types';
import { cache, CACHE_KEYS, CACHE_TTL, getCachedOrCompute } from './cache';

// Cache for better performance
let cachedProducts: Product[] | null = null;
let cachedCategories: { name: string; count: number }[] | null = null;

export function loadProducts(limit?: number): Product[] {
  if (!cachedProducts) {
    try {
      cachedProducts = processedProducts as Product[];
      console.log('Processed products loaded:', cachedProducts.length, 'items');
    } catch (error) {
      console.error('Error loading processed products:', error);
      // Fallback to empty array
      cachedProducts = [];
    }
  }
  
  return limit ? cachedProducts.slice(0, limit) : cachedProducts;
}

export function loadCategories(): { name: string; count: number }[] {
  if (!cachedCategories) {
    try {
      cachedCategories = categories as { name: string; count: number }[];
      console.log('Categories loaded:', cachedCategories.length, 'categories');
    } catch (error) {
      console.error('Error loading categories:', error);
      cachedCategories = [];
    }
  }
  
  return cachedCategories;
}

export function getProductById(id: string | number): Product | undefined {
  const all = loadProducts();
  return all.find(p => String(p.id) === String(id));
}

export function getProductsByCategory(category: string, limit?: number): Product[] {
  const all = loadProducts();
  const filtered = all.filter(p => 
    p.category.toLowerCase().includes(category.toLowerCase()) ||
    p.subcategory.toLowerCase().includes(category.toLowerCase())
  );
  return limit ? filtered.slice(0, limit) : filtered;
}

export function searchProducts(query: string, limit?: number): Product[] {
  const cacheKey = CACHE_KEYS.SEARCH(query);
  
  return getCachedOrCompute(
    cacheKey,
    () => {
      const all = loadProducts();
      const filtered = all.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      return limit ? filtered.slice(0, limit) : filtered;
    },
    CACHE_TTL.SEARCH
  );
}

// Get random products for recommendations
export function getRandomProducts(count: number): Product[] {
  const all = loadProducts();
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Get products by rating
export function getProductsByRating(minRating: number, limit?: number): Product[] {
  const all = loadProducts();
  const filtered = all.filter(p => p.rating >= minRating);
  return limit ? filtered.slice(0, limit) : filtered;
}

// Get products by price range
export function getProductsByPriceRange(minPrice: number, maxPrice: number, limit?: number): Product[] {
  const all = loadProducts();
  const filtered = all.filter(p => p.price >= minPrice && p.price <= maxPrice);
  return limit ? filtered.slice(0, limit) : filtered;
}

// Get featured products (highest rated)
export function getFeaturedProducts(limit: number = 8): Product[] {
  const cacheKey = `${CACHE_KEYS.FEATURED_PRODUCTS}:${limit}`;
  
  return getCachedOrCompute(
    cacheKey,
    () => {
      const all = loadProducts();
      return all
        .filter(p => p.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
    },
    CACHE_TTL.FEATURED_PRODUCTS
  );
}

// Get trending products (most reviewed)
export function getTrendingProducts(limit: number = 8): Product[] {
  const cacheKey = `${CACHE_KEYS.TRENDING_PRODUCTS}:${limit}`;
  
  return getCachedOrCompute(
    cacheKey,
    () => {
      const all = loadProducts();
      return all
        .filter(p => p.reviews > 0)
        .sort((a, b) => b.reviews - a.reviews)
        .slice(0, limit);
    },
    CACHE_TTL.TRENDING_PRODUCTS
  );
}
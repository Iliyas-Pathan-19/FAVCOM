// Simple in-memory cache for production optimization
// In a real production app, use Redis or similar

interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class MemoryCache {
  private cache = new Map<string, CacheItem<any>>();
  private maxSize = 1000; // Maximum number of items in cache

  set<T>(key: string, data: T, ttl: number = 300000): void { // Default 5 minutes
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data as T;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  // Get cache statistics
  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;

    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        expired++;
      } else {
        active++;
      }
    }

    return {
      total: this.cache.size,
      active,
      expired,
      maxSize: this.maxSize
    };
  }
}

// Create singleton instance
export const cache = new MemoryCache();

// Cache keys
export const CACHE_KEYS = {
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
  SEARCH: (query: string) => `search:${query}`,
  RECOMMENDATIONS: (id: string) => `recommendations:${id}`,
  FEATURED_PRODUCTS: 'featured_products',
  TRENDING_PRODUCTS: 'trending_products',
} as const;

// Cache TTL values (in milliseconds)
export const CACHE_TTL = {
  PRODUCTS: 30 * 60 * 1000, // 30 minutes
  CATEGORIES: 60 * 60 * 1000, // 1 hour
  SEARCH: 10 * 60 * 1000, // 10 minutes
  RECOMMENDATIONS: 15 * 60 * 1000, // 15 minutes
  FEATURED_PRODUCTS: 20 * 60 * 1000, // 20 minutes
  TRENDING_PRODUCTS: 20 * 60 * 1000, // 20 minutes
} as const;

// Helper functions for common cache operations
export function getCachedOrCompute<T>(
  key: string,
  computeFn: () => T,
  ttl: number = CACHE_TTL.PRODUCTS
): T {
  const cached = cache.get<T>(key);
  if (cached !== null) {
    return cached;
  }

  const computed = computeFn();
  cache.set(key, computed, ttl);
  return computed;
}

export function invalidateCache(pattern: string): void {
  const keys = Array.from(cache['cache'].keys());
  keys.forEach(key => {
    if (key.includes(pattern)) {
      cache.delete(key);
    }
  });
}

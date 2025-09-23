'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem, Product, WishlistItem } from '@/types';

type StoreContextType = {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  wishlistCount: number;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CART_KEY = 'ecom_cart_v1';
const WISHLIST_KEY = 'ecom_wishlist_v1';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Load initial state from API (fallback to localStorage)
  useEffect(() => {
    (async () => {
      try {
        const [c, w] = await Promise.all([
          fetch('/api/cart').then(r => r.ok ? r.json() : Promise.reject()),
          fetch('/api/wishlist').then(r => r.ok ? r.json() : Promise.reject()),
        ]);
        if (Array.isArray(c)) setCartItems(c);
        if (Array.isArray(w)) setWishlistItems(w);
      } catch {
        try {
          const c = localStorage.getItem(CART_KEY);
          const w = localStorage.getItem(WISHLIST_KEY);
          if (c) setCartItems(JSON.parse(c));
          if (w) setWishlistItems(JSON.parse(w));
        } catch {}
      }
    })();
  }, []);

  // Persist
  useEffect(() => {
    (async () => {
      try { await fetch('/api/cart', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cartItems) }); } catch {}
      try { localStorage.setItem(CART_KEY, JSON.stringify(cartItems)); } catch {}
    })();
  }, [cartItems]);
  useEffect(() => {
    (async () => {
      try { await fetch('/api/wishlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(wishlistItems) }); } catch {}
      try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistItems)); } catch {}
    })();
  }, [wishlistItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.product.id === product.id);
      if (existing) {
        return prev.map(ci => ci.product.id === product.id ? { ...ci, quantity: ci.quantity + quantity } : ci);
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => setCartItems(prev => prev.filter(ci => ci.product.id !== productId));
  const updateQuantity = (productId: string, quantity: number) => setCartItems(prev => prev.map(ci => ci.product.id === productId ? { ...ci, quantity } : ci));

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => prev.some(w => w.product.id === product.id) ? prev : [...prev, { product, addedAt: new Date() }]);
  };
  const removeFromWishlist = (productId: string) => setWishlistItems(prev => prev.filter(w => w.product.id !== productId));
  const isInWishlist = (productId: string) => wishlistItems.some(w => w.product.id === productId);

  const value = useMemo<StoreContextType>(() => ({
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    cartCount: cartItems.reduce((s, i) => s + i.quantity, 0),
    wishlistCount: wishlistItems.length,
  }), [cartItems, wishlistItems]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}



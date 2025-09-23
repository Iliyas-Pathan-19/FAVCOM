'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Product } from '@/types';

// Lazy load the ProductCard component
const ProductCard = dynamic(() => import('./ProductCard'), {
  loading: () => (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700 animate-pulse">
      <div className="aspect-square bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded mb-4 w-1/2"></div>
      <div className="h-8 bg-gray-700 rounded"></div>
    </div>
  )
});

interface LazyProductCardProps {
  product: Product;
  onAddToWishlist?: (product: Product) => void;
  onRemoveFromWishlist?: (product: Product) => void;
  isInWishlist?: boolean;
}

export default function LazyProductCard({
  product,
  onAddToWishlist,
  onRemoveFromWishlist,
  isInWishlist = false
}: LazyProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <div ref={cardRef} className="w-full">
      {isVisible ? (
        <ProductCard
          product={product}
          onAddToWishlist={onAddToWishlist}
          onRemoveFromWishlist={onRemoveFromWishlist}
          isInWishlist={isInWishlist}
        />
      ) : (
        <div className="bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700 animate-pulse">
          <div className="aspect-square bg-gray-700 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded mb-4 w-1/2"></div>
          <div className="h-8 bg-gray-700 rounded"></div>
        </div>
      )}
    </div>
  );
}

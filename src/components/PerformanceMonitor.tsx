'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  productCount: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const startTime = performance.now();
    
    // Monitor performance
    const updateMetrics = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now() - startTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // MB
        productCount: document.querySelectorAll('[data-product-card]').length
      });
    };

    // Update metrics every 2 seconds
    const interval = setInterval(updateMetrics, 2000);
    
    // Initial update
    setTimeout(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics) return null;

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-mono border border-gray-600 hover:bg-gray-700 transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} Perf
      </button>
      
      {isVisible && (
        <div className="mt-2 bg-gray-900 text-white p-3 rounded-lg border border-gray-600 text-xs font-mono min-w-48">
          <div className="font-semibold mb-2 text-blue-400">Performance Metrics</div>
          <div className="space-y-1">
            <div>Load Time: <span className="text-green-400">{metrics.loadTime}ms</span></div>
            <div>Render Time: <span className="text-yellow-400">{metrics.renderTime}ms</span></div>
            <div>Memory: <span className="text-purple-400">{metrics.memoryUsage}MB</span></div>
            <div>Products: <span className="text-cyan-400">{metrics.productCount}</span></div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700 text-gray-400">
            <div>Status: {metrics.loadTime < 1000 ? '✅ Fast' : '⚠️ Slow'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
'use client';

import { ReactNode, useEffect } from 'react';
import { addLazyLoadingToImages, enableWebPFormat, preventLayoutShift } from './loading-optimization';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Apply image optimizations when the app mounts
  useEffect(() => {
    // Check if running in browser
    if (typeof window === 'undefined') return;
    
    // Add lazy loading to all images
    addLazyLoadingToImages();
    
    // Enable WebP format where supported
    enableWebPFormat();
    
    // Prevent layout shifts
    preventLayoutShift();
    
    // Preload critical above-the-fold images
    const criticalImages = [
      '/images/hero-image.jpg',
      '/images/logo.png'
    ];
    
    // Preload only the critical images that exist
    const preloadCriticalImage = (path: string) => {
      // Check if the image exists by creating a new Image object
      const img = new Image();
      img.onload = () => {
        // Image exists, create preload link
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = path;
        document.head.appendChild(link);
      };
      img.onerror = () => {
        // Image doesn't exist, don't preload
        console.info(`Critical image not found: ${path}`);
      };
      img.src = path;
    };
    
    // Attempt to preload each critical image
    criticalImages.forEach(preloadCriticalImage);
    
    // Set up a MutationObserver to handle dynamically added images
    const observer = new MutationObserver((mutations) => {
      let shouldOptimize = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'IMG' || (node instanceof Element && node.querySelector('img'))) {
              shouldOptimize = true;
            }
          });
        }
      });
      
      if (shouldOptimize) {
        // Re-run optimizations for newly added images
        addLazyLoadingToImages();
        preventLayoutShift();
      }
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      // Clean up observer when component unmounts
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
} 
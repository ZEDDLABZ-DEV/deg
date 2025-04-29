import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface BackgroundImageProps {
  src: string;
  className?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  priority?: boolean;
  children?: React.ReactNode;
  blurAmount?: number;
}

export function BackgroundImage({
  src,
  className,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  overlayOpacity = 0.4,
  priority = false,
  children,
  blurAmount = 0,
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle image loading
  useEffect(() => {
    if (!src) return;
    
    // If not a priority image, we'll lazy load it
    if (!priority) {
      setImageSrc(''); // Start with empty src
      
      // Create intersection observer to detect when component enters viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When it enters viewport, load the image
            const image = new Image();
            image.src = src;
            image.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
              observer.disconnect();
            };
          }
        });
      }, { rootMargin: '200px' }); // Start loading a bit before it's visible
      
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      
      return () => {
        observer.disconnect();
      };
    } else {
      // If it's a priority image, load it immediately
      setImageSrc(src);
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src, priority]);

  // Determine WebP support
  useEffect(() => {
    if (typeof window !== 'undefined' && !src.includes('?') && !src.startsWith('data:')) {
      // Check for WebP support
      const webpSupported = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
        
      if (webpSupported && !src.endsWith('.webp') && !src.endsWith('.avif')) {
        // For external images, we might want to convert them to WebP
        if (!src.startsWith('/')) {
          // External URL - we could fetch optimized version via our API
          setImageSrc(`/api/image-optimization?path=${encodeURIComponent(src)}&format=webp`);
        } else {
          // Local image - we could use our API to optimize it
          setImageSrc(`/api/image-optimization?path=${encodeURIComponent(src)}&format=webp`);
        }
      }
    }
  }, [src]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative overflow-hidden',
        className
      )}
    >
      {/* Background image with transition */}
      <div 
        className={cn(
          'absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ 
          backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
          filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none'
        }}
      />
      
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: overlayColor,
          opacity: overlayOpacity
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 
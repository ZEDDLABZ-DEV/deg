import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  blurDataURL?: string;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  blurDataURL,
  placeholder,
  onLoad,
  objectFit = 'cover',
  ...props
}: OptimizedImageProps & Omit<React.ComponentPropsWithoutRef<typeof Image>, 'objectFit'>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  // Check for WebP support and append format if not already specified in the URL
  useEffect(() => {
    const updateImageFormat = async () => {
      if (typeof window !== 'undefined' && !src.includes('?') && !src.includes('base64')) {
        try {
          // Check for WebP support
          const webpSupported = document.createElement('canvas')
            .toDataURL('image/webp')
            .indexOf('data:image/webp') === 0;
            
          if (webpSupported && !src.endsWith('.webp') && !src.endsWith('.avif')) {
            // For local images, we can use Next.js image optimization
            if (src.startsWith('/')) {
              return; // Next.js Image handles this automatically
            }
            
            // For external images, we might want to add a WebP parameter if the service supports it
            // This is a generic example - adjust based on your CDN/image service
            if (src.includes('images.unsplash.com') || src.includes('cloudinary')) {
              setImageSrc(`${src}${src.includes('?') ? '&' : '?'}fm=webp`);
            }
          }
        } catch (e) {
          console.error('Error checking WebP support:', e);
        }
      }
    };
    
    updateImageFormat();
  }, [src]);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  // Calculate aspect ratio for placeholder
  const aspectRatio = width && height ? width / height : undefined;
  
  return (
    <div 
      className={cn(
        'overflow-hidden relative',
        !isLoaded && 'bg-gray-100 animate-pulse',
        className
      )}
      style={aspectRatio ? { aspectRatio: String(aspectRatio) } : undefined}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "w-full h-auto transition-opacity duration-300",
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          !isLoaded && 'opacity-0',
          isLoaded && 'opacity-100'
        )}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        quality={quality}
        onLoad={handleImageLoad}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        {...props}
      />
    </div>
  );
} 
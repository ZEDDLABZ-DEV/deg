// Image loading optimization utilities

// Function to add lazy loading attribute to all images
export function addLazyLoadingToImages() {
  if (typeof window !== 'undefined') {
    // Use IntersectionObserver for lazy loading
    const lazyImages = document.querySelectorAll('img:not([loading])');
    
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      lazyImages.forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
    } else {
      // Fallback to IntersectionObserver for older browsers
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
            }
            observer.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach(img => {
        if (img.src) {
          img.dataset.src = img.src;
          img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; // Transparent placeholder
          imageObserver.observe(img);
        }
      });
    }
  }
}

// Function to preload critical images
export function preloadCriticalImages(imagePaths: string[]) {
  if (typeof window !== 'undefined') {
    imagePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      document.head.appendChild(link);
    });
  }
}

// Function to enable WebP format where supported
export function enableWebPFormat() {
  if (typeof window !== 'undefined') {
    const webpSupported = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;
    
    if (webpSupported) {
      document.documentElement.classList.add('webp');
    } else {
      document.documentElement.classList.add('no-webp');
    }
  }
}

// Set image dimensions to prevent layout shifts
export function preventLayoutShift() {
  if (typeof window !== 'undefined') {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      // Only add dimensions if they're missing
      if (!img.getAttribute('width') && !img.getAttribute('height')) {
        img.setAttribute('width', '100%');
        img.style.aspectRatio = 'auto'; // Use aspect-ratio when available
      }
    });
  }
} 
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Image extensions that should be optimized
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'];

// This middleware adds performance optimizations for images
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  
  // Extract file extension
  const extension = pathname.split('.').pop()?.toLowerCase();
  
  // Check if it's an image request
  if (extension && IMAGE_EXTENSIONS.includes(extension)) {
    // Set Cache-Control headers for images
    const response = NextResponse.next();
    
    // Enable strong caching for static assets
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
    
    // Set content-type based on extension
    const contentTypes: Record<string, string> = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
      avif: 'image/avif',
      gif: 'image/gif',
    };
    
    if (contentTypes[extension]) {
      response.headers.set('Content-Type', contentTypes[extension]);
    }
    
    // Add Vary header for correct client-side caching
    response.headers.set('Vary', 'Accept');
    
    return response;
  }
  
  return NextResponse.next();
}

// Matcher for paths this middleware should run on
export const config = {
  matcher: [
    // Match all image files in the public directory
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 
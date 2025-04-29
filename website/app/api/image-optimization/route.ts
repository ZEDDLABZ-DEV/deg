import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { stat } from 'fs/promises';
import path from 'path';
import { cwd } from 'process';
import sharp from 'sharp';

// This API route provides on-the-fly image optimization
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const imagePath = url.searchParams.get('path');
    const width = parseInt(url.searchParams.get('width') || '0');
    const height = parseInt(url.searchParams.get('height') || '0');
    const quality = parseInt(url.searchParams.get('quality') || '80');
    const format = url.searchParams.get('format') || 'webp';

    if (!imagePath) {
      return NextResponse.json(
        { error: 'Missing image path' },
        { status: 400 }
      );
    }

    // Handle remote URLs
    if (imagePath.startsWith('http')) {
      try {
        // For remote URLs, fetch the image and then process it
        const imageResponse = await fetch(imagePath);
        if (!imageResponse.ok) {
          throw new Error(`Failed to fetch remote image: ${imageResponse.statusText}`);
        }
        
        const imageBuffer = await imageResponse.arrayBuffer();
        
        // Process with Sharp
        let sharpInstance = sharp(Buffer.from(imageBuffer));
        
        // Apply transformations
        if (width > 0 || height > 0) {
          sharpInstance = sharpInstance.resize({
            width: width || undefined,
            height: height || undefined,
            fit: 'contain',
            withoutEnlargement: true
          });
        }
        
        // Convert to requested format
        const processedImage = await processImageFormat(sharpInstance, format, quality);
        
        return createImageResponse(processedImage, format);
      } catch (error) {
        console.error('Error processing remote image:', error);
        return NextResponse.json(
          { error: 'Failed to process remote image' },
          { status: 500 }
        );
      }
    }

    // For local files
    try {
      // Normalize the image path to prevent directory traversal attacks
      const normalizedPath = path.normalize(imagePath).replace(/^(\.\.(\/|\\|$))+/, '');
      
      // Ensure the path is within the public directory
      const fullPath = path.join(cwd(), 'public', normalizedPath);
      
      // Check if file exists
      await stat(fullPath);
      
      // Read and process the file
      const fileBuffer = readFileSync(fullPath);
      let sharpInstance = sharp(fileBuffer);
      
      // Resize if needed
      if (width > 0 || height > 0) {
        sharpInstance = sharpInstance.resize({
          width: width || undefined,
          height: height || undefined,
          fit: 'contain',
          withoutEnlargement: true
        });
      }
      
      // Convert to requested format
      const processedImage = await processImageFormat(sharpInstance, format, quality);
      
      return createImageResponse(processedImage, format);
    } catch (error) {
      console.error('Error processing local image:', error);
      return NextResponse.json(
        { error: 'Image not found or processing failed' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error in image optimization route:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}

// Helper function to process image format
async function processImageFormat(sharpInstance: sharp.Sharp, format: string, quality: number): Promise<Buffer> {
  switch (format.toLowerCase()) {
    case 'webp':
      return sharpInstance.webp({ quality }).toBuffer();
    case 'avif':
      return sharpInstance.avif({ quality }).toBuffer();
    case 'jpeg':
    case 'jpg':
      return sharpInstance.jpeg({ quality }).toBuffer();
    case 'png':
      return sharpInstance.png({ quality }).toBuffer();
    default:
      return sharpInstance.webp({ quality }).toBuffer();
  }
}

// Helper function to create image response
function createImageResponse(buffer: Buffer, format: string): NextResponse {
  const contentTypeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    avif: 'image/avif',
  };
  
  const contentType = contentTypeMap[format.toLowerCase()] || 'image/webp';
  
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Length': String(buffer.length),
      'Vary': 'Accept',
    },
  });
}

// To use this in full production, you would:
// 1. Integrate with Sharp.js for proper image resizing and format conversion
// 2. Add memory caching to avoid reprocessing the same images
// 3. Consider moving this functionality to a middleware or Edge function for faster response
// 4. Implement a proper CDN for global distribution 
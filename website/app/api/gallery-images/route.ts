import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const dynamic = 'force-dynamic'; // Ensure we don't cache the response

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    
    // Get images from gallery folder
    const galleryPath = path.join(publicDir, "images", "gallery");
    const infrastructurePath = path.join(publicDir, "images", "infrastructure");
    
    const galleryImages: { src: string; width: number; height: number }[] = [];
    const infrastructureImages: { src: string; width: number; height: number }[] = [];
    
    // Helper function to get image dimensions
    const getImageDimensions = async (filePath: string): Promise<{ width: number; height: number } | null> => {
      try {
        if (fs.existsSync(filePath)) {
          const metadata = await sharp(filePath).metadata();
          return { 
            width: metadata.width || 0, 
            height: metadata.height || 0 
          };
        }
        return null;
      } catch (error) {
        console.error(`Error processing image ${filePath}:`, error);
        return null;
      }
    };

    // Process gallery directory if it exists
    if (fs.existsSync(galleryPath)) {
      const files = fs.readdirSync(galleryPath)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
        
      for (const file of files) {
        const filePath = path.join(galleryPath, file);
        const dimensions = await getImageDimensions(filePath);
        
        if (dimensions) {
          galleryImages.push({
            src: `/images/gallery/${file}`,
            ...dimensions
          });
        }
      }
    }
    
    // Process infrastructure directory if it exists
    if (fs.existsSync(infrastructurePath)) {
      const files = fs.readdirSync(infrastructurePath)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
        
      for (const file of files) {
        const filePath = path.join(infrastructurePath, file);
        const dimensions = await getImageDimensions(filePath);
        
        if (dimensions) {
          infrastructureImages.push({
            src: `/images/infrastructure/${file}`,
            ...dimensions
          });
        }
      }
    }
    
    // Format the response
    const formattedGalleryImages = galleryImages.map(({ src, width, height }) => ({
      src,
      alt: "Gallery image",
      category: "gallery",
      width,
      height,
      aspectRatio: width / height
    }));
    
    const formattedInfrastructureImages = infrastructureImages.map(({ src, width, height }) => ({
      src,
      alt: "Infrastructure image",
      category: "infrastructure",
      width,
      height,
      aspectRatio: width / height
    }));
    
    return NextResponse.json({
      images: [...formattedGalleryImages, ...formattedInfrastructureImages]
    });
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery images" },
      { status: 500 }
    );
  }
} 
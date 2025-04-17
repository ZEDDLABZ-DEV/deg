"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch gallery images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/gallery-images');
        
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Image modal functions
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";   
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Function to determine grid span based on aspect ratio
  const getGridSpan = (aspectRatio?: number): string => {
    if (!aspectRatio) return "col-span-1 row-span-1";
    
    // Wide images (landscape)
    if (aspectRatio > 1.7) return "col-span-2 row-span-1";
    
    // Tall images (portrait)
    if (aspectRatio < 0.7) return "col-span-1 row-span-2";
    
    // Very large or panoramic images
    if (aspectRatio > 2.5) return "col-span-3 row-span-1";
    
    // Square-ish images
    return "col-span-1 row-span-1";
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 text-indigo-900">
          Photo Gallery
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our collection of moments that showcase our campus, students,
          and events
        </p>
      </motion.div>

      {/* Loading state */}
      {isLoading && (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery images...</p>
        </div>
      )}

      {/* Bento Grid Gallery */}
      {!isLoading && images.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer ${getGridSpan(image.aspectRatio)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => openImageModal(image.src)}
            >
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 rounded-full p-2">
                    <ImageIcon className="h-6 w-6 text-indigo-900" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : !isLoading && (
        <div className="text-center py-16">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No images found
          </h3>
          <p className="mt-1 text-gray-500">
            Add images to the gallery or infrastructure folders.
          </p>
        </div>
      )}

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-200 transition-colors"
              onClick={closeImageModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

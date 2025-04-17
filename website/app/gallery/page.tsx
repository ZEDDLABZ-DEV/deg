"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryPage() {
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prepare gallery images
  useEffect(() => {
    // Showcase images
    const showcaseImages = [
      "/images/showcase/83afd1_80f6fde1ef8743c48dccfcbd40d35abc~mv2.jpg_1.jpeg",
      "/images/showcase/83afd1_b7e1813b4faf4cc5a36d79a7c6a26a81~mv2_2.jpeg",
      "/images/showcase/83afd1_15e02e8c902047f3881ee5e64edf1912~mv2_2.jpeg",
      "/images/showcase/83afd1_f628312b180348ccbeb31f5d062cd5cc~mv2_2.jpeg",
      "/images/showcase/83afd1_4884a6f3dc6e4352b1237a29fa31eb59~mv2_1.png",
      "/images/showcase/a3c153_3592f141741849e8b2cb99afa8e3a412~mv2.jpg_1.jpeg",
      "/images/showcase/83afd1_c30463f0c33b4713a1e268b6262855bdf000.jpg.jpeg",
      "/images/showcase/file_1.jpeg",
      "/images/showcase/file.jpeg",
    ].map((src) => ({ src, alt: "Showcase event", category: "showcase" }));

    // Infrastructure images
    const infrastructureImages = [
      "/images/infrastructure/1.jpg",
      "/images/infrastructure/2.jpg",
      "/images/infrastructure/3.jpg",
      "/images/infrastructure/4.jpg",
    ].map((src) => ({
      src,
      alt: "Campus infrastructure",
      category: "infrastructure",
    }));

    // More images
    const moreImages = [
      "/images/more_images/83afd1_a470b6e8b1724464a2d05b223cb937a1~mv2_1.jpeg",
      "/images/more_images/83afd1_d8295c77a1c3423e881f3dd0c2c7a9da~mv2_1.jpeg",
      "/images/more_images/83afd1_b5ccad43f0654accb97baa4b7d097b73~mv2_1.jpeg",
      "/images/more_images/83afd1_8b2e5266f3be46ec9c610cdc9a0253a8~mv2.jpg.jpeg",
      "/images/more_images/83afd1_bac3206c269b406a97df5f78340a78b6~mv2_1.jpeg",
    ].map((src) => ({ src, alt: "Student activities", category: "more" }));

    const allImages = [
      ...showcaseImages,
      ...infrastructureImages,
      ...moreImages,
    ];
    setFilteredImages(allImages);
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

      {/* Gallery grid */}
      {filteredImages.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="relative group overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer"
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
      ) : (
        <div className="text-center py-16">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No images found
          </h3>
          <p className="mt-1 text-gray-500">
            Try changing your search criteria.
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

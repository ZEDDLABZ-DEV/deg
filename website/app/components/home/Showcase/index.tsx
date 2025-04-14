"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, X, ChevronLeft, ChevronRight, Grid } from "lucide-react"

// Array of showcase images with proper paths
const showcaseImages = [
  {
    src: "/images/showcase/file.jpeg",
    alt: "College campus building",
    width: 5,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_b7e1813b4faf4cc5a36d79a7c6a26a81~mv2_2.jpeg",
    alt: "Students in classroom",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_f628312b180348ccbeb31f5d062cd5cc~mv2_2.jpeg",
    alt: "Laboratory equipment",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/a3c153_3592f141741849e8b2cb99afa8e3a412~mv2.jpg_1.jpeg",
    alt: "Campus event",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_80f6fde1ef8743c48dccfcbd40d35abc~mv2.jpg_1.jpeg",
    alt: "Library resources",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_c30463f0c33b4713a1e268b6262855bdf000.jpg.jpeg",
    alt: "Sports facilities",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/file_1.jpeg",
    alt: "Cultural program",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg_1.jpeg",
    alt: "Student activities",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_c0443b5f612b478e8e2d8ed3835b6034~mv2_1.jpeg",
    alt: "Computer lab",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_f650882d571c49378a3fd0fb72312637~mv2_1.jpeg",
    alt: "Science experiment",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_50d7361c1d02434fb259474c5916bb45~mv2_1.jpeg",
    alt: "Outdoor campus view",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_15e02e8c902047f3881ee5e64edf1912~mv2_2.jpeg",
    alt: "Graduation ceremony",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_0d2865aa93f6446ba3527d9700ac92a0~mv2_1.jpeg",
    alt: "Student project exhibition",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_b3357d2affca49519a7647de3867da43~mv2_1.jpeg",
    alt: "Technical workshop",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_bac3206c269b406a97df5f78340a78b6~mv2_1.jpeg",
    alt: "Faculty member teaching",
    width: 4,
    height: 3
  },
  {
    src: "/images/showcase/83afd1_4884a6f3dc6e4352b1237a29fa31eb59~mv2_1.png",
    alt: "Campus infrastructure",
    width: 4,
    height: 3
  }
]

export function Showcase() {
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [galleryView, setGalleryView] = useState(false)

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    setGalleryView(false)
    document.body.style.overflow = 'hidden'
  }, [])

  const openGalleryView = useCallback(() => {
    setLightboxOpen(true)
    setGalleryView(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }, [])

  const navigateImage = useCallback((direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev === showcaseImages.length - 1 ? 0 : prev + 1))
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? showcaseImages.length - 1 : prev - 1))
    }
  }, [])

  const toggleView = useCallback(() => {
    setGalleryView(prev => !prev)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return
    
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight' && !galleryView) {
      navigateImage('next')
    } else if (e.key === 'ArrowLeft' && !galleryView) {
      navigateImage('prev')
    } else if (e.key === 'g') {
      toggleView()
    }
  }, [lightboxOpen, closeLightbox, navigateImage, galleryView, toggleView])

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              <span className="flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Campus Gallery
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="relative inline-block">
              Campus Life & Facilities
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our modern campus, state-of-the-art facilities, and vibrant student life
          </p>
        </motion.div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {showcaseImages.slice(0, 12).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl shadow-lg ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : 
                index === 5 ? 'lg:col-span-2' :
                index === 8 ? 'xl:col-span-2' :
                index === 3 ? 'lg:row-span-2' : ''
              } cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
              onMouseEnter={() => setActiveImage(index)}
              onMouseLeave={() => setActiveImage(null)}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${
                (index === 0 || index === 3) ? 'h-80 sm:h-[450px]' : 'h-64'
              } w-full overflow-hidden group`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  animate={{ y: activeImage === index ? 0 : 20, opacity: activeImage === index ? 1 : 0 }}
                >
                  <p className="text-lg font-semibold">{image.alt}</p>
                  <p className="text-sm text-blue-100">Dildhani Education Group</p>
                  <div className="mt-2 flex items-center text-sm text-blue-100/80">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    </svg>
                    Click to enlarge
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={openGalleryView}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/30"
          >
            View More Photos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Toggle view button */}
              <button 
                className="absolute left-4 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              {/* Next button */}
              <button 
                className="absolute right-4 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Image */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center p-4 md:p-10"
              >
                <div className="relative w-full max-w-5xl max-h-full overflow-hidden">
                  <div className="relative pb-[60%] w-full">
                    <Image
                      src={showcaseImages[currentImageIndex].src}
                      alt={showcaseImages[currentImageIndex].alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xl font-semibold text-white">{showcaseImages[currentImageIndex].alt}</p>
                    <p className="text-sm text-gray-300">
                      {currentImageIndex + 1} / {showcaseImages.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 
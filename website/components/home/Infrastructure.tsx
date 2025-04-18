"use client"

import { motion } from "framer-motion"
import { GraduationCap, Building, Server, Microscope } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Infrastructure() {
  const [activeImage, setActiveImage] = useState(0)
  
  const infrastructureImages = [
    {
      src: "/images/infrastructure/1.jpg",
      alt: "Campus Building Front View",
    },
    {
      src: "/images/infrastructure/2.jpg",
      alt: "Advanced Laboratory",
    },
    {
      src: "/images/infrastructure/3.jpg",
      alt: "Computer Lab",
    },
    {
      src: "/images/infrastructure/4.jpg",
      alt: "Student Facilities",
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Campus Tour
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="relative inline-block">
              World-Class Infrastructure
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
            Experience our state-of-the-art facilities designed to enhance learning and development
          </p>
        </motion.div>

        {/* Main Feature Image */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={infrastructureImages[activeImage].src}
                alt={infrastructureImages[activeImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infrastructureImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 ${
                activeImage === index 
                  ? "ring-4 ring-indigo-500 scale-[1.02] shadow-xl" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveImage(index)}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 ${activeImage === index ? "bg-indigo-900/20" : "bg-gray-900/40"}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Building,
              title: "Modern Buildings",
              description: "Contemporary architecture designed for optimal learning environments and student comfort"
            },
            {
              icon: Server,
              title: "Digital Infrastructure",
              description: "High-speed internet, digital classrooms, and computer labs with latest technology"
            },
            {
              icon: Microscope,
              title: "Research Facilities",
              description: "Well-equipped laboratories for hands-on learning and practical experimentation"
            },
            {
              icon: GraduationCap,
              title: "Learning Spaces",
              description: "Spacious classrooms, libraries, and study areas conducive to academic excellence"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
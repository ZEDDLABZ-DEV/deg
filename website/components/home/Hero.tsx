"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:h-[90vh] flex items-center justify-center overflow-hidden py-20 sm:py-24 md:py-28">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/80 to-indigo-900/95 mix-blend-multiply" />
        <Image
          src="/images/hero.avif"
          alt="School Campus"
          className="object-cover opacity-70"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Enhanced Particles - Only show on larger screens */}
      <div className="absolute inset-0 z-10 opacity-30 hidden md:block">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i % 3 + 1} h-${i % 3 + 1} ${i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-indigo-300' : 'bg-white'} rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Decorative Elements - Adjusted for better responsiveness */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-5 sm:right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full backdrop-blur-sm bg-black/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-xl">
                Shaping Future Leaders Through Excellence
              </span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 drop-shadow-md max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our prestigious educational institutions and embark on a journey of academic excellence and personal growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium text-base border-0 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 gap-2 sm:gap-4 max-w-4xl mx-auto"
        >
          {[
            { title: "Quality Education", value: "Since 2011" },
            { title: "Recognized", value: "AICTE Approved" },
            { title: "Alumni Network", value: "5000+" },
            { title: "Achievement Rate", value: "96%" }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10"
            >
              <p className="text-xs sm:text-sm text-gray-300">{stat.title}</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator - Hide on smaller screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 sm:gap-2"
        >
          <p className="text-white/70 text-xs sm:text-sm">Discover More</p>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-maroon/80 to-charcoal/90 mix-blend-multiply" />
        <Image
          src="/images/hero.avif"
          alt="Dildhani Education Group Campus"
          className="object-cover opacity-70"
          fill
          priority
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            className="inline-block bg-maroon text-white px-4 py-1 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Since 2011 • AICTE Recognized
          </motion.span>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
              Shaping Future Leaders Through Excellence
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-light-blue mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From polytechnic education to defense training, Dildhani Education Group offers holistic development opportunities for students across Jodhpur, Rajasthan.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/admissions">
              <Button 
                size="lg" 
                variant="default" 
                className="bg-maroon hover:bg-maroon/90 text-white font-medium text-base"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-gold/50 text-base">
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-gold/70 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
} 
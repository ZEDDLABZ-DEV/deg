"use client"

import { motion } from "framer-motion"
import { BellRing } from "lucide-react"

export function Announcement() {
  const announcementText = "Admission open for polytechnic, B.A., school from class PG to 12, new batch for defence and rajasthan police coaching starts from 17 april 2025. JOIN US FOR THE BRIGHTER FUTURE"
  
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-3 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="hidden md:flex items-center gap-2 shrink-0 px-4">
            <BellRing className="h-5 w-5 text-amber-300" />
            <span className="text-white font-medium">Announcement</span>
          </div>
          
          <div className="overflow-hidden w-full relative">
            <motion.div 
              className="whitespace-nowrap flex items-center gap-6"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }
              }}
            >
              {/* We'll repeat the text multiple times to ensure smooth looping */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="inline-flex items-center gap-4">
                  <span className="text-white font-medium">{announcementText}</span>
                  <span className="text-amber-300 text-xl">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 
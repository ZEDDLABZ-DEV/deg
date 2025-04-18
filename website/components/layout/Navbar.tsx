"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
  { name: "Alumni", href: "/alumni" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300">
                <Image 
                  src="/icons/logo.jpg" 
                  alt="Dildhani Education Group Logo" 
                  width={48}
                  height={48}
                  className="rounded-md object-contain"
                />
              </div>
              <div>
                <span className="text-sm sm:text-lg md:text-2xl font-bold text-primary transition-all duration-300 block leading-tight">
                  Dildhani Education Group
                </span>
                <span className="text-[10px] sm:text-xs text-gray-600 hidden sm:block">
                  Near railway bridge manglana road, dildhani (Makrana)
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1 xl:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-600 hover:text-primary hover:bg-gray-50 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tablet Navigation - Condensed */}
          <div className="hidden md:flex lg:hidden">
            <div className="flex space-x-1">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary px-2 py-2 rounded-md text-xs font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-gray-600 hover:text-primary px-2 py-2 rounded-md text-xs font-medium flex items-center">
                  More
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {navItems.slice(4).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg border-t border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
} 
"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Academics", href: "/academics" },
      { name: "Admissions", href: "/admissions" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Academic Calendar", href: "#" },
      { name: "School Policies", href: "#" },
      { name: "Parent Portal", href: "#" },
      { name: "Student Portal", href: "#" },
      { name: "Alumni", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "info@edugroup.com", href: "mailto:info@edugroup.com", icon: Mail },
      { name: "+1 (555) 123-4567", href: "tel:+15551234567", icon: Phone },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EduGroup</h3>
            <p className="text-sm">
              Shaping future leaders through excellence in education and holistic development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>
            © {new Date().getFullYear()} EduGroup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
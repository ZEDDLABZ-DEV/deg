"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/DildhaniEducationGroup", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/DildhaniEducationGroup", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/DildhaniEducationGroup", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/DildhaniEdu", label: "Twitter" },
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
    title: "Our Institutions",
    links: [
      { name: "Bhawani Polytechnic College", href: "/institutions/polytechnic" },
      { name: "Kaptan Officer Academy", href: "/institutions/defense-academy" },
      { name: "PCM Career Point", href: "/institutions/school" },
      { name: "Cricket Academy", href: "/institutions/cricket-academy" },
      { name: "Kaptan Girls Hostel", href: "/institutions/hostel" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "info@dildhanieducationgroup.com", href: "mailto:info@dildhanieducationgroup.com", icon: Mail },
      { name: "+91 82903 56671", href: "tel:+918290356671", icon: Phone },
      { name: "Jodhpur, Rajasthan, India", href: "https://maps.google.com/?q=Dildhani+Education+Group+Jodhpur", icon: MapPin },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold font-serif">Dildhani Education Group</h3>
            <p className="text-sm">
              Shaping future leaders through excellence in education since 2011. AICTE recognized and affiliated with the Board of Technical Education, Rajasthan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="text-soft-gray hover:text-gold transition-colors"
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
              <h4 className="text-gold font-semibold mb-4 font-serif">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-gold transition-colors flex items-center gap-2"
                    >
                      {'icon' in link && link.icon && <link.icon className="w-4 h-4" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-soft-gray/20 mt-12 pt-8 text-sm text-center">
          <p className="text-soft-gray">
            © {new Date().getFullYear()} Dildhani Education Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
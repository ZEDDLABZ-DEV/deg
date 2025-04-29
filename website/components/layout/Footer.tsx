"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  FileText,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define interfaces for type safety
interface FooterLink {
  name: string;
  href: string;
  icon?: LucideIcon;
  isExternal?: boolean;
  isPhone?: boolean;
  isPhoneGroup?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Academics", href: "/academics" },
      { name: "Gallery", href: "/gallery" },
      { name: "Admissions", href: "/admissions" },
      { name: "Alumni", href: "/alumni" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Institutions",
    links: [
      {
        name: "Bhawani Polytechnic College",
        href: "/institutions/polytechnic",
      },
      { name: "Kaptan Officer Academy", href: "/institutions/defence-academy" },
      { name: "Adarsh Senior Secondary School", href: "/institutions/school" },
      { name: "Cricket Academy", href: "/institutions/cricket-academy" },
      { name: "Kaptan Girls Hostel", href: "/institutions/hostel" },
    ],
  },
  {
    title: "Documents",
    links: [
      {
        name: "Compliances",
        href: "/compliances.pdf",
        icon: FileText,
        isExternal: true,
      },
      {
        name: "Fee Structure",
        href: "/FEE_STRUCTURE-1.pdf",
        icon: FileText,
        isExternal: true,
      },
      {
        name: "Staff List",
        href: "/Staff_List_Dildhani_Group_of_Institutes (1).pdf",
        icon: FileText,
        isExternal: true,
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Dildhani Institute Of Technical Education Sansthan, Makrana, Rajasthan, India",
        href: "https://maps.google.com/maps?q=Dildhani+Institute+Of+Technical+Education+Sansthan",
        icon: MapPin,
      },
      {
        name: "info.bite11@gmail.com",
        href: "mailto:info.bite11@gmail.com",
        icon: Mail,
      },
      {
        name: "Phone Numbers",
        href: "#",
        icon: Phone,
        isPhoneGroup: true,
      },
    ],
  },
];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-indigo-900"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-indigo-900 pt-24 pb-12 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid layout for footer sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Branding and description */}
            <div className="lg:col-span-4">
              <div className="bg-indigo-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-700/50 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/icons/logo.jpg"
                      alt="Dildhani Education Group Logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <Link href="/" className="inline-block">
                    <h2 className="text-2xl font-bold text-white">
                      Dildhani Education Group
                    </h2>
                  </Link>
                </div>
                <p className="text-indigo-100 max-w-xs">
                  A group of premier educational institutions dedicated to
                  providing quality education and nurturing future leaders.
                </p>

                <div className="mt-4 pt-4 border-t border-indigo-700/50">
                  <p className="text-sm text-indigo-200 flex items-center">
                    <span className="bg-amber-500/20 px-2 py-1 rounded text-amber-300 font-medium text-xs mr-2">
                      EST. 2011
                    </span>
                    Excellence in Education
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Links - modernized with animations */}
            {footerLinks.map((section) => (
              <div key={section.title} className="lg:col-span-2">
                <h4 className="text-lg font-semibold mb-6 text-amber-300 font-serif relative inline-block">
                  {section.title}
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-100 hover:text-amber-300 transition-colors flex items-center gap-2 group whitespace-nowrap"
                        >
                          {link.icon && (
                            <span className="text-indigo-300 group-hover:text-amber-300 transition-colors">
                              <link.icon className="w-4 h-4" />
                            </span>
                          )}
                          {!link.isPhoneGroup && (
                            <span className="relative overflow-hidden">
                              {link.name}
                              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
                            </span>
                          )}
                          {link.isPhoneGroup && (
                            <div className="flex flex-wrap items-center">
                              <a
                                href="tel:+919142670007"
                                className="relative group-hover:text-amber-300"
                              >
                                +91 9142670007
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
                              </a>
                              <span className="mx-1">,</span>
                              <a
                                href="tel:+919142970007"
                                className="relative group-hover:text-amber-300"
                              >
                                +91 9142970007
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
                              </a>
                            </div>
                          )}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-indigo-100 hover:text-amber-300 transition-colors flex items-center gap-2 group"
                        >
                          {link.icon && (
                            <span className="text-indigo-300 group-hover:text-amber-300 transition-colors">
                              <link.icon className="w-4 h-4" />
                            </span>
                          )}
                          {!link.isPhoneGroup && (
                            <span className="relative overflow-hidden">
                              {link.name}
                              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
                            </span>
                          )}
                          {link.isPhoneGroup && (
                            <div className="flex flex-wrap items-center">
                              <a
                                href="tel:+919142670007"
                                className="relative group-hover:text-amber-300"
                              >
                                +91 9142670007
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-amber-300 transform scale-x-0 hover:scale-x-100 transition-transform origin-right hover:origin-left duration-300"></span>
                              </a>
                              <span className="mx-1">,</span>
                              <a
                                href="tel:+919142970007"
                                className="relative group-hover:text-amber-300"
                              >
                                +91 9142970007
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-amber-300 transform scale-x-0 hover:scale-x-100 transition-transform origin-right hover:origin-left duration-300"></span>
                              </a>
                            </div>
                          )}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar with subtle dividers */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="text-indigo-200 text-sm">
                  © {new Date().getFullYear()} Dildhani Education Group. All
                  rights reserved.
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-indigo-300">
                <Link
                  href="/privacy-policy"
                  className="hover:text-amber-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-amber-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 p-3 bg-amber-400 text-indigo-900 rounded-full shadow-lg hover:bg-amber-300 transition-colors z-50 focus:outline-none"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

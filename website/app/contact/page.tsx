"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-maroon to-charcoal text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src="/images/hero.avif"
            alt="Contact Dildhani Education Group"
            className="object-cover opacity-60"
            fill
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">Contact Us</h1>
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Get in touch with Dildhani Education Group. We&apos;re here to answer your questions and help you on your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6 font-serif">Get In Touch</h2>
                <p className="text-deep-gray mb-8">
                  Whether you&apos;re a prospective student, parent, or partner, we welcome your inquiries. Reach out through any of the following channels, and our team will be happy to assist you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-maroon/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-maroon" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Our Location</h3>
                    <p className="text-deep-gray mt-1">
                      Dildhani Education Group Campus<br />
                      Jodhpur, Rajasthan<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-maroon/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-maroon" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Phone</h3>
                    <p className="text-deep-gray mt-1">
                      Main: +91 82903 56671<br />
                      Admissions: +91 82903 56672
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-maroon/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-maroon" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Email</h3>
                    <p className="text-deep-gray mt-1">
                      General: info@dildhanieducationgroup.com<br />
                      Admissions: admissions@dildhanieducationgroup.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-maroon/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-maroon" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Office Hours</h3>
                    <p className="text-deep-gray mt-1">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-4 font-serif">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "https://facebook.com/DildhaniEducationGroup", label: "Facebook" },
                    { icon: Instagram, href: "https://instagram.com/DildhaniEducationGroup", label: "Instagram" },
                    { icon: Twitter, href: "https://twitter.com/DildhaniEdu", label: "Twitter" },
                    { icon: Linkedin, href: "https://linkedin.com/company/DildhaniEducationGroup", label: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -2 }}
                      className="bg-off-white p-3 rounded-full text-deep-gray hover:text-maroon transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-off-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-deep-gray mb-1">First Name</label>
                    <input type="text" className="w-full p-2 border border-soft-gray rounded-md" />
                  </div>
                  <div>
                    <label className="block text-deep-gray mb-1">Last Name</label>
                    <input type="text" className="w-full p-2 border border-soft-gray rounded-md" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Email</label>
                  <input type="email" className="w-full p-2 border border-soft-gray rounded-md" />
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Phone</label>
                  <input type="tel" className="w-full p-2 border border-soft-gray rounded-md" />
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Subject</label>
                  <select className="w-full p-2 border border-soft-gray rounded-md">
                    <option>Select a subject</option>
                    <option>Admissions Inquiry</option>
                    <option>Program Information</option>
                    <option>Campus Visit</option>
                    <option>Career Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Message</label>
                  <textarea rows={4} className="w-full p-2 border border-soft-gray rounded-md"></textarea>
                </div>
                
                <Button className="w-full bg-maroon hover:bg-maroon/90">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">Our Location</h2>
            <p className="text-xl text-deep-gray max-w-3xl mx-auto">
              Visit our campus in Jodhpur, Rajasthan to experience our facilities and meet our team in person.
            </p>
          </motion.div>
          
          <div className="rounded-xl overflow-hidden h-[450px] shadow-lg">
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="bg-soft-gray h-full w-full flex items-center justify-center">
              <p className="text-white text-xl">Google Maps Embed will appear here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
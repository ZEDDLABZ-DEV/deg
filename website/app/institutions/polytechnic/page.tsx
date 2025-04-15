"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BookOpen, Briefcase, HardHat } from "lucide-react"

export default function PolytechnicPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-maroon to-charcoal text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src="/images/school1.jpg"
            alt="Bhawani Polytechnic College"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">Bhawani Polytechnic College</h1>
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              AICTE approved polytechnic institution offering quality technical education since 2011.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/admissions">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-charcoal font-medium"
                >
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6 font-serif">About Our College</h2>
              <p className="text-deep-gray mb-4">
                Bhawani Polytechnic College, part of the Dildhani Education Group, is an AICTE-approved institution offering diploma programs in engineering disciplines including Electrical, Civil, and Mechanical Engineering.
              </p>
              <p className="text-deep-gray mb-6">
                Established in 2011 in Makrana (pincode-341505), Rajasthan, our college is affiliated with the Board of Technical Education, Rajasthan, and is committed to providing high-quality technical education that prepares students for successful careers in engineering and technology.
              </p>
              
              <ul className="space-y-3">
                {[
                  "AICTE approved curriculum",
                  "Experienced faculty with industry background",
                  "Modern laboratories and workshops",
                  "Industry partnerships for placements",
                  "Hands-on practical training"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-maroon mr-2 shrink-0 mt-0.5" />
                    <span className="text-deep-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-4 aspect-h-3 relative h-[350px]">
                <Image 
                  src="/images/school1.jpg" 
                  alt="Bhawani Polytechnic College Campus" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">Our Programs</h2>
            <p className="text-xl text-deep-gray max-w-3xl mx-auto">
              We offer diploma programs in various engineering disciplines, designed to equip students with both theoretical knowledge and practical skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diploma in Electrical Engineering",
                description: "Focus on electrical systems, power generation, transmission, and electrical machines.",
                icon: BookOpen,
                color: "bg-maroon/10 text-maroon",
              },
              {
                title: "Diploma in Civil Engineering",
                description: "Study of structural design, construction techniques, and infrastructure development.",
                icon: HardHat,
                color: "bg-gold/10 text-gold",
              },
              {
                title: "Diploma in Mechanical Engineering",
                description: "Training in machinery design, thermodynamics, and manufacturing processes.",
                icon: Briefcase,
                color: "bg-charcoal/10 text-charcoal",
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                  <program.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-serif">{program.title}</h3>
                <p className="text-deep-gray mb-4">{program.description}</p>
                <ul className="space-y-2 text-deep-gray text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-maroon mr-2 shrink-0" />
                    <span>3-year diploma program</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-maroon mr-2 shrink-0" />
                    <span>Board of Technical Education approved</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-maroon mr-2 shrink-0" />
                    <span>Industry-oriented curriculum</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-maroon to-charcoal rounded-xl p-10 md:p-16 text-white text-center shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Start Your Technical Journey?</h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-light-blue">
                Applications are now open for the upcoming academic session. Take the first step toward a rewarding career in engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/admissions">
                  <Button 
                    size="lg" 
                    className="bg-gold hover:bg-gold/90 text-charcoal font-medium"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 
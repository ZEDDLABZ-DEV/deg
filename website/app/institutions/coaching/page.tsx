"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BookOpen, Brain, Users, Award } from "lucide-react"

export default function CoachingPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-maroon to-charcoal text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src="/images/school6.jpg"
            alt="Kaptan Coaching Centre"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">Kaptan Coaching Centre</h1>
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Specialized coaching for competitive exams and higher education entrance tests since 2011.
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
              <h2 className="text-3xl font-bold text-charcoal mb-6 font-serif">About Our Coaching</h2>
              <p className="text-deep-gray mb-4">
                Kaptan Coaching Centre, part of the Dildhani Education Group, provides comprehensive educational support
                to help students excel in their academic pursuits and competitive examinations.
              </p>
              <p className="text-deep-gray mb-6">
                Established in 2011 in Jodhpur, Rajasthan, our coaching institute is committed to providing high-quality education
                with experienced faculty, structured curriculum, and personalized attention to ensure every student reaches their full potential.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Expert faculty with proven track record",
                  "Comprehensive study materials and resources",
                  "Regular mock tests and performance analysis",
                  "Personalized attention and doubt-clearing sessions",
                  "Modern classrooms with digital teaching aids"
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
                  src="/images/school6.jpg" 
                  alt="Kaptan Coaching Centre" 
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
              We offer specialized coaching programs designed to prepare students for various competitive exams and academic challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "JEE (Main & Advanced) Preparation",
                description: "Comprehensive coaching for engineering entrance exams with focus on Physics, Chemistry, and Mathematics.",
                icon: BookOpen,
                color: "bg-maroon/10 text-maroon",
              },
              {
                title: "NEET Preparation",
                description: "Specialized program for medical entrance exams covering Biology, Physics, and Chemistry.",
                icon: Brain,
                color: "bg-gold/10 text-gold",
              },
              {
                title: "School Board & Olympiad Training",
                description: "Academic support for school board exams (8-12) and preparation for various Olympiads.",
                icon: Award,
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
                    <span>Regular batch and weekend programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-maroon mr-2 shrink-0" />
                    <span>Customized study material and test series</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-maroon mr-2 shrink-0" />
                    <span>One-on-one mentoring available</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">Why Choose Us</h2>
            <p className="text-xl text-deep-gray max-w-3xl mx-auto">
              Our coaching center stands out for its commitment to quality education and student success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expert Faculty",
                description: "Our teachers are subject matter experts with years of experience in preparing students for competitive exams.",
                icon: Users,
              },
              {
                title: "Proven Results",
                description: "We have a consistent track record of producing top-ranking students in various competitive exams.",
                icon: Award,
              },
              {
                title: "Comprehensive Study Material",
                description: "Well-structured, up-to-date study materials designed by experts for optimal learning.",
                icon: BookOpen,
              },
              {
                title: "Regular Assessments",
                description: "Frequent tests and detailed performance analysis to track improvement and focus on weak areas.",
                icon: Brain,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-off-white rounded-lg"
              >
                <div className="bg-maroon/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2 font-serif">{feature.title}</h3>
                  <p className="text-deep-gray">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-maroon to-charcoal rounded-xl p-10 md:p-16 text-white text-center shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Excel in Your Exams?</h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-light-blue">
                Join Kaptan Coaching Centre today and take the first step toward academic excellence and a successful career.
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
  );
} 
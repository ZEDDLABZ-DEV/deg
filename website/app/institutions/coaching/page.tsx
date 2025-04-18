"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { BookOpen, Brain, Users, Award, CheckCircle2, ChevronRight, BarChart } from "lucide-react"

export default function CoachingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/images/gallery/83afd1_8fbca8bfdafb4b1cb2f2b1a0cb78da85~mv2.jpeg"
            alt="Kaptan Coaching Centre"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-indigo-900/85 to-indigo-950/90 mix-blend-multiply" />
        </motion.div>

        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl" />

          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${
                i % 4 === 0
                  ? "bg-blue-400/70"
                  : i % 4 === 1
                  ? "bg-purple-400/70"
                  : i % 4 === 2
                  ? "bg-indigo-400/70"
                  : "bg-sky-400/70"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5,
              }}
              animate={{
                y: [0, -(15 + Math.random() * 20)],
                x: [
                  0,
                  (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 10),
                ],
                scale: [1, 1.1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Centered Content */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          style={{ y: titleY, opacity: opacityTitle }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-5">
              <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-lg">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Link
                    href="/"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Home
                  </Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <Link
                    href="/institutions"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Institutions
                  </Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <span>Coaching Centre</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Kaptan
                <span className="relative ml-2">
                  <span className="relative z-10">Coaching</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Centre</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Specialized coaching for competitive exams and higher education entrance tests since 2011
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Apply Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1200+", label: "Students Coached" },
              { value: "85%", label: "Success Rate" },
              { value: "20+", label: "Expert Faculty" },
              { value: "12+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-indigo-600">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  About Us
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block tracking-tight">
                <span>Excellence in Education</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Kaptan Coaching Centre, part of the Dildhani Education Group, provides comprehensive educational support
                  to help students excel in their academic pursuits and competitive examinations.
                </p>
                <p>
                  Established in 2011 in Makrana (pincode-341505), Rajasthan, our coaching institute is committed to providing high-quality education
                  with experienced faculty, structured curriculum, and personalized attention to ensure every student reaches their full potential.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                {[
                  "Expert faculty with proven track record",
                  "Comprehensive study materials and resources",
                  "Regular mock tests and performance analysis",
                  "Personalized attention and doubt-clearing sessions",
                  "Modern classrooms with digital teaching aids"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex bg-gray-50 p-4 rounded-lg border border-gray-100"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="p-1 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl relative">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="aspect-w-4 aspect-h-3 relative h-[500px]">
                    <Image 
                      src="/images/coaching/1.png" 
                      alt="Kaptan Coaching Centre" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <p className="text-xl font-bold">
                        Leading Coaching Institute
                      </p>
                      <p className="text-blue-100">
                        Nurturing talent since 2011
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-blue-100/80 z-[-1]"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-indigo-100/80 z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                  Our Programs
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="relative inline-block">
                  Specialized Coaching Programs
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer specialized coaching programs designed to prepare students for various competitive exams and academic challenges
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "JEE (Main & Advanced) Preparation",
                description: "Comprehensive coaching for engineering entrance exams with focus on Physics, Chemistry, and Mathematics.",
                icon: BookOpen,
                color: "from-blue-500 to-indigo-600",
                shadowColor: "shadow-blue-500/30",
              },
              {
                title: "NEET Preparation",
                description: "Specialized program for medical entrance exams covering Biology, Physics, and Chemistry.",
                icon: Brain,
                color: "from-purple-500 to-indigo-600",
                shadowColor: "shadow-purple-500/30",
              },
              {
                title: "School Board & Olympiad Training",
                description: "Academic support for school board exams (8-12) and preparation for various Olympiads.",
                icon: Award,
                color: "from-indigo-500 to-blue-600",
                shadowColor: "shadow-indigo-500/30",
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`p-6 bg-gradient-to-br ${program.color} text-white`}>
                  <div className="flex items-center">
                    <div className={`h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4 ${program.shadowColor}`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{program.title}</h3>
                  </div>
                  <p className="mt-2 text-white/90 text-sm">
                    {program.description}
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Regular batch and weekend programs",
                      "Customized study material and test series",
                      "One-on-one mentoring available"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-indigo-500 shrink-0 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  Why Choose Us
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="relative inline-block">
                  Our Advantages
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  />
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our coaching center stands out for its commitment to quality education and student success
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Faculty",
                description: "Subject matter experts with years of experience in preparing students for competitive exams",
                icon: Users,
              },
              {
                title: "Proven Results",
                description: "Consistent track record of producing top-ranking students in various competitive exams",
                icon: Award,
              },
              {
                title: "Comprehensive Materials",
                description: "Well-structured, up-to-date study materials designed by experts for optimal learning",
                icon: BookOpen,
              },
              {
                title: "Data-Driven Approach",
                description: "Regular assessments and detailed performance analysis to track improvement",
                icon: BarChart,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Excel in Your Exams?
              </h2>
              <p className="text-lg text-blue-100 mb-10">
                Join Kaptan Coaching Centre today and take the first step toward academic excellence and a successful career.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/admissions"
                  className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 
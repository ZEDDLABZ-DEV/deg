"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import { 
  ChevronRight, 
  Award, 
  Book, 
  Users, 
  Lightbulb, 
  Target, 
  Clock, 
  Shield,
  GraduationCap,
  Globe
} from "lucide-react"

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  
  return (
    <div className=" overflow-hidden">
      {/* Enhanced Hero Section with more professional look */}
      <section ref={containerRef} className="relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image 
            src="/images/campus.jpg" 
            alt="Dildhani Education Group Campus" 
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-indigo-900/85 to-indigo-950/90 mix-blend-multiply" />
        </motion.div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs - more subtle for professionalism */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl" />
          
          {/* Floating particles - fewer and more subtle */}
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${
                i % 4 === 0 ? "bg-blue-400/70" : 
                i % 4 === 1 ? "bg-purple-400/70" : 
                i % 4 === 2 ? "bg-indigo-400/70" : 
                "bg-sky-400/70"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5,
              }}
              animate={{
                y: [0, -(15 + Math.random() * 20)],
                x: [0, (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 10)],
                scale: [1, 1.1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Centered Content - refined typography */}
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
                  <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <span>About Us</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                About 
                <span className="relative ml-2">
                  <span className="relative z-10">Dildhani</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Education Group</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Shaping the future of education with excellence and innovation since 2011.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a 
                href="#story" 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Discover Our Story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
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

      {/* Accreditations Section - for professionalism */}
      <section className="py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-gray-500 text-sm font-medium mb-2">Accredited By</div>
              <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                  <div className="h-12 flex items-center">
                    <span className="text-indigo-950 font-bold flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-indigo-600" /> AICTE
                    </span>
                  </div>
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                  <div className="h-12 flex items-center">
                    <span className="text-indigo-950 font-bold flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-indigo-600" /> BTE Rajasthan
                    </span>
                  </div>
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                  <div className="h-12 flex items-center">
                    <span className="text-indigo-950 font-bold flex items-center gap-2">
                      <Globe className="w-6 h-6 text-indigo-600" /> ISO 9001:2015
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-950 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2011", label: "Est.", icon: Clock },
              { value: "5000+", label: "Alumni Network", icon: Users },
              { value: "98%", label: "Placement Rate", icon: Target },
              { value: "15+", label: "Academic Awards", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm text-blue-100 mb-5">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-blue-200 font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Story Section - more professional content */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  Our Legacy
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block tracking-tight">
                <span>Our Story</span>
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
                  Founded in 2011, Dildhani Education Group has evolved from a modest beginning into one of Rajasthan&apos;s most respected educational establishments. Our journey began with a single institution and a clear vision: to provide quality education that transforms lives.
                </p>
                <p>
                  Recognized by the All India Council for Technical Education (AICTE) and affiliated with the Board of Technical Education, Rajasthan, we maintain rigorous academic standards across all our programs while embracing innovation in education.
                </p>
                <p>
                  Today, our campus houses multiple specialized institutions including the Bhawani Polytechnic College, Kaptan Officer Academy, Adarsh Senior Secondary School, Colonel Rajvardhan Cricket Academy, and Kaptan Girls Hostel &mdash; creating a holistic educational ecosystem that addresses diverse career aspirations.
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/institutions"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-indigo-700 transition-colors group"
                >
                  Explore Our Institutions
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="p-1 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl">
                <div className="relative rounded-xl overflow-hidden">
                  <div className="relative h-[500px] w-full">
                    <Image 
                      src="/images/about/ourstory.jpg" 
                      alt="Dildhani Education Group Campus" 
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements - more subtle */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-blue-100/80 z-[-1]"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-indigo-100/80 z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                From the Director&apos;s Office
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Director&apos;s Message
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-xl border-4 border-indigo-500/30 aspect-square">
                <Image
                  src="/images/about/director.jpg"
                  alt="Director's Message"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed relative">
                <div className="absolute -top-10 -left-6 text-9xl font-serif text-indigo-100">&ldquo;</div>
                
                <p className="relative z-10">
                  Welcome to Dildhani Education Group. As the Director, it is my privilege to lead an institution committed to educational excellence and holistic development.
                </p>
                
                <p>
                  Our mission is to nurture not just academic brilliance but to shape individuals with strong character, innovative thinking, and the resilience needed to thrive in today&apos;s competitive world. We believe that true education goes beyond textbooks and examinations – it&apos;s about inspiring young minds to discover their potential and pursue their passions with dedication.
                </p>
                
                <p>
                  At Dildhani Education Group, we have created an ecosystem where traditional values meet modern educational approaches. Our diverse institutions cater to various educational needs while maintaining the highest standards of quality and integrity.
                </p>
                
                <p>
                  I invite you to join us on this journey of learning and growth. Together, we can build a brighter future for our students and contribute to the development of our society and nation.
                </p>
                
                <div className="relative z-10 pt-4">
                  <p className="font-semibold text-indigo-700">Harshwardhan Singh Rathore</p>
                </div>
                
                <div className="absolute -bottom-10 -right-6 text-9xl font-serif text-indigo-100">&rdquo;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - professional addition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                Our Journey
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Milestones & Achievements
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
              Key milestones in our journey of educational excellence
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-indigo-200 z-0"></div>
            
            <div className="space-y-12">
              {[
                { 
                  year: "2011", 
                  title: "Foundation", 
                  description: "Dildhani Education Group was established with a vision to transform education in Rajasthan.",
                  highlight: "Initial Campus Established"
                },
                { 
                  year: "2014", 
                  title: "Expansion", 
                  description: "Launch of Bhawani Polytechnic College with AICTE approval and state-of-the-art facilities.",
                  highlight: "AICTE Approval"
                },
                { 
                  year: "2016", 
                  title: "Diversification", 
                  description: "Established the Kaptan Officer Academy to prepare students for careers in defence services.",
                  highlight: "Defence Services Focus"
                },
                { 
                  year: "2019", 
                  title: "Growth", 
                  description: "Addition of Adarsh Senior Secondary School and Colonel Rajvardhan Cricket Academy to our educational ecosystem.",
                  highlight: "Sports Integration"
                },
                { 
                  year: "2022", 
                  title: "Innovation", 
                  description: "Introduction of updated curriculum with advanced technological integration in all institutions.",
                  highlight: "Technology Enhancement"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} md:flex-row-reverse`}
                >
                  {/* Year bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center shadow-md">
                      <span className="text-indigo-700 font-bold text-sm">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - professional addition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                Our Team
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Leadership
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
              Meet the visionaries guiding our educational mission
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Harshwardhan Singh Rathore",
                role: "Director",
                image: "/images/about/director.jpg",
                bio: "With extensive experience in educational leadership, Mr. Rathore guides our institution with a vision for academic excellence and holistic development."
              },
              {
                name: "Col. Vikram Singh (Retd.)",
                role: "Founder of Dildhani Education Group",
                image: "/images/team2.jpg",
                bio: "Colonel Singh brings decades of military experience to prepare students for successful careers in defence services."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-70"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                What Guides Us
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Our Core Values
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
              The principles that guide everything we do at Dildhani Education Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", description: "Striving for the highest standards in all educational endeavors", icon: Award },
              { title: "Integrity", description: "Acting with honesty, ethics, and responsibility in all aspects", icon: Shield },
              { title: "Innovation", description: "Embracing creativity and forward-thinking approaches to education", icon: Lightbulb },
              { title: "Inclusivity", description: "Creating an environment where every student feels welcomed and supported", icon: Book }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
                </div>
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section - more professional */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-medium rounded-full hover:bg-transparent hover:text-white transition-all duration-300"
              >
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
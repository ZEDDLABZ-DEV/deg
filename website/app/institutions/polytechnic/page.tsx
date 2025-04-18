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
  Building,
  GraduationCap,
  BookOpen
} from "lucide-react"

export default function PolytechnicPage() {
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image 
            src="/images/institutions/polytechnic.jpg" 
            alt="Bhawani Polytechnic College Campus" 
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-indigo-900/85 to-indigo-950/90 mix-blend-multiply" />
        </motion.div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl" />
          
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
                  <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <Link href="/institutions" className="hover:text-blue-200 transition-colors">Institutions</Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <span>Polytechnic</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Bhawani
                <span className="relative ml-2">
                  <span className="relative z-10">Polytechnic</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">College</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Empowering students with technical skills and knowledge for a brighter future
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a 
                href="#programs" 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Programs
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

      {/* Accreditations Section */}
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the College */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Excellence in Technical Education</h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/polytechnic/here2ndsection.png" 
                  alt="Bhawani Polytechnic College" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                <div className="text-center">
                  <div className="text-3xl">10+</div>
                  <div className="text-xs uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Building Futures with Technical Excellence</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bhawani Polytechnic College, established under the Dildhani Education Group, is a premier technical institution dedicated to providing quality technical education. Our college is recognized by AICTE and affiliated with the Board of Technical Education, Rajasthan.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer diploma programs in various engineering disciplines with state-of-the-art laboratories, workshops, and modern infrastructure. Our focus is on practical training, industry exposure, and holistic development of students.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">Quality Education</h5>
                    <p className="mt-1 text-sm text-gray-500">AICTE approved curriculum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <Building className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">Modern Facilities</h5>
                    <p className="mt-1 text-sm text-gray-500">Latest equipment & labs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Our Programs</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Diploma Engineering Programs</h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={program.image} 
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{program.duration}</span>
                    </div>
                    <Link href="#contact" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      Learn more
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Campus Facilities</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">World-Class Infrastructure</h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <facility.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h4>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Technical Journey?</h2>
              <p className="text-blue-100 mb-8">Join Bhawani Polytechnic College and become a skilled technical professional.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="px-8 py-3.5 bg-white text-indigo-700 font-medium rounded-md hover:shadow-lg transition-all duration-300"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-indigo-800/30 backdrop-blur-sm text-white font-medium rounded-md border border-white/10 hover:bg-indigo-800/50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const programs = [
  {
    title: "Civil Engineering",
    description: "Learn to design, construct and maintain infrastructure projects like buildings, roads, and bridges.",
    image: "/images/polytechnic/civil.png",
    duration: "3 Years",
    tags: ["Infrastructure", "Construction", "Design"]
  },
  {
    title: "Mechanical Engineering",
    description: "Study the design, manufacturing and maintenance of mechanical systems and machines.",
    image: "/images/polytechnic/mechanical.png",
    duration: "3 Years",
    tags: ["Manufacturing", "Design", "Automation"]
  },
  {
    title: "Electrical Engineering",
    description: "Focus on electrical systems, power generation, distribution and electrical equipment.",
    image: "/images/polytechnic/electric.png",
    duration: "3 Years",
    tags: ["Power Systems", "Electronics", "Control"]
  }
];

const facilities = [
  {
    title: "Modern Laboratories",
    description: "Well-equipped labs with latest tools and technology for hands-on learning experience.",
    icon: Lightbulb
  },
  {
    title: "Digital Library",
    description: "Access to digital resources, journals, and e-books for research and learning.",
    icon: Book
  },
  {
    title: "Industry Partnerships",
    description: "Collaborations with leading industries for internships and placements.",
    icon: Users
  },
  {
    title: "Sports Facilities",
    description: "Indoor and outdoor sports facilities for physical fitness and recreation.",
    icon: Target
  },
  {
    title: "Workshops",
    description: "Specialized workshops for practical training in various engineering disciplines.",
    icon: Building
  },
  {
    title: "Placement Cell",
    description: "Dedicated placement cell to assist students with job opportunities and career guidance.",
    icon: Award
  }
]; 
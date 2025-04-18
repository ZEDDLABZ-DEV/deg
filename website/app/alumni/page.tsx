"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import { ChevronRight, Award, Medal, Star, Users, Briefcase } from "lucide-react"

const alumniData = [
  {
    id: 1,
    name: "Pinkraj Singh Chauhan",
    fatherName: "Shivji Singh Chauhan",
    position: "JODHPUR ARO, ARMY GD",
    image: "/images/alumini/pinkraj.jpg",
    achievement: "Successfully completed training and deployed in active service",
    year: "2021"
  },
  {
    id: 2,
    name: "Pradeep Parihar",
    fatherName: "Dilip Parihar",
    location: "Village Jakhli, Makrana",
    position: "INDIAN ARMY, Corps of Signals Jabalpur",
    image: "/images/alumini/pardeep.jpg",
    achievement: "Specialized in military communications and signal operations",
    year: "2020"
  },
  {
    id: 3,
    name: "Mohit Kumar Meena",
    fatherName: "Ramesh Kumar Meena",
    location: "District Dosa",
    position: "ARMY GD",
    image: "/images/alumini/mohit.jpg",
    achievement: "Selected through competitive recruitment process",
    year: "2022"
  },
  {
    id: 4,
    name: "Sunil Rahar",
    fatherName: "Prema Ram",
    position: "ARMY TECHNICAL, SUZLON",
    image: "/images/alumini/sunil.jpg",
    achievement: "Specializes in technical operations at SUZLON",
    year: "2019"
  }
]

export default function AlumniPage() {
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
      <section ref={containerRef} className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image 
            src="/images/more_images/83afd1_d82db51ba27a40629ed67314b0b940a0~mv2.jpg.jpeg" 
            alt="Dildhani Education Group Alumni" 
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
                  <span>Alumni</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Our
                <span className="relative ml-2">
                  <span className="relative z-10">Alumni</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Pride and Success</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Celebrating the achievements of our graduates who make us proud
            </p>
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

      {/* Alumni Profiles Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Our Successful Graduates</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Alumni Success Stories</h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
              <p className="mt-8 text-gray-600 max-w-3xl mx-auto">
                Our alumni represent our legacy of excellence across various fields. Their achievements reflect our commitment to quality education and comprehensive development.
              </p>
            </motion.div>
          </div>
          
          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {alumniData.map((alumni, index) => (
              <motion.div
                key={alumni.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-[300px] overflow-hidden">
                  {alumni.image ? (
                    <Image
                      src={alumni.image}
                      alt={alumni.name}
                      fill
                      className="object-contain object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Users className="h-24 w-24 text-white/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent group-hover:from-gray-900/90 transition-colors duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                    <h4 className="text-xl font-bold mb-1">{alumni.name}</h4>
                    <p className="text-sm text-gray-200 mb-1">S/O {alumni.fatherName}</p>
                    {alumni.location && (
                      <p className="text-sm text-gray-300">{alumni.location}</p>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Medal className="h-5 w-5 text-indigo-600 mr-2" />
                    <h5 className="font-semibold text-gray-900">{alumni.position}</h5>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <Award className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{alumni.achievement}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-indigo-600 text-sm font-medium">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>Defense Services</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Impact Section */}
      <section className="py-20 bg-indigo-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-70"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mb-10 lg:mb-0"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                Making Us Proud
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Graduates in Defense Services</h2>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Dildhani Education Group takes immense pride in our alumni who have chosen to serve the nation through defense services. Our specialized training programs and disciplined environment prepare students for successful careers in the armed forces.
                </p>
                <p>
                  Our graduates have demonstrated exceptional skill, dedication, and courage in their respective roles within the Army and other defense organizations. Their achievements are a testament to both their personal commitment and the quality of education they received.
                </p>
                <p>
                  We continue to support our alumni throughout their careers and celebrate their contributions to national security and service.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Defense Services Selections</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Placement Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="p-1 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Alumni Network</h3>
                  <p className="text-gray-600 mb-6">
                    Are you a former student of Dildhani Education Group? Connect with us to share your success story and stay in touch with the institution and fellow alumni.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <Users className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Networking Opportunities</h4>
                        <p className="text-sm text-gray-600">Connect with fellow alumni for professional growth</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <Medal className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Share Your Achievements</h4>
                        <p className="text-sm text-gray-600">Let us celebrate your success and inspire current students</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <Award className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Alumni Meet</h4>
                        <p className="text-sm text-gray-600">Participate in annual alumni gatherings and events</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-sm hover:shadow-lg"
                    >
                      Contact Us
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 
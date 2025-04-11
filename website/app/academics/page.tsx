"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import { 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Briefcase,
  Clock,
  Brain,
  Award,
  BookMarked,
  Medal,
  FileText,
  CheckCircle,
  CalendarClock,
  ArrowUpRight
} from "lucide-react"

export default function AcademicsPage() {
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
      <section ref={containerRef} className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image 
            src="/images/academics.jpg" 
            alt="Dildhani Education Group - Academic Excellence" 
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
        </div>

        {/* Content */}
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
                  <span>Academics</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Academic 
                <span className="relative ml-2">
                  <span className="relative z-10">Excellence</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Shaping Future Leaders</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Comprehensive educational programs designed to inspire and prepare students for success.
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
                Explore Our Programs
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

      {/* Academic Approach Section */}
      <section className="py-24 bg-white">
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
                  Our Approach
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block tracking-tight">
                <span>Academic Philosophy</span>
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
                  At Dildhani Education Group, we believe in a holistic approach to education that balances academic rigor with practical skills development. Our educational philosophy is built on the foundation of preparing students not just for examinations, but for life-long success.
                </p>
                <p>
                  We emphasize critical thinking, problem-solving, and innovation across all our academic programs. Our curriculum is designed to be comprehensive yet flexible, allowing students to pursue their interests while building a strong foundation in core subjects.
                </p>
                <p>
                  With smaller class sizes and personalized attention, we ensure that each student receives the guidance they need to excel academically and grow personally. Our faculty members are dedicated to identifying and nurturing the unique potential of every student.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Student-Teacher Ratio", value: "12:1" },
                  { label: "Avg. Class Size", value: "25" },
                  { label: "Academic Faculty", value: "120+" },
                  { label: "Pass Rate", value: "98%" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-indigo-700">{stat.value}</p>
                  </div>
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
                      src="/images/classroom.jpg" 
                      alt="Modern classroom at Dildhani Education Group" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <p className="text-xl font-bold">Modern Learning Environments</p>
                      <p className="text-blue-100">Technology-integrated classrooms</p>
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
      <section id="programs" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
                Academic Programs
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Our Educational Offerings
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
              Comprehensive programs designed to meet the diverse educational needs of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Polytechnic Engineering",
                description: "AICTE-approved diploma programs in various engineering disciplines with hands-on training and industry exposure.",
                icon: GraduationCap,
                features: ["3-year diploma program", "Industry partnerships", "Advanced labs", "Placement assistance"],
                link: "/institutions/polytechnic",
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Defense Services Preparation",
                description: "Specialized coaching and training program for students aspiring to join various defense services in India.",
                icon: Medal,
                features: ["Physical training", "Written exam preparation", "Personality development", "Interview coaching"],
                link: "/institutions/defense-academy",
                color: "from-indigo-500 to-purple-600"
              },
              {
                title: "Secondary Education (PCM)",
                description: "Focused programs in Physics, Chemistry, and Mathematics with specialized coaching for competitive examinations.",
                icon: BookMarked,
                features: ["Classes 11-12", "Exam-oriented preparation", "Regular assessments", "Expert faculty"],
                link: "/institutions/school",
                color: "from-purple-500 to-pink-600"
              },
              {
                title: "Cricket Academy",
                description: "Professional cricket training program that combines sports excellence with academic education.",
                icon: Award,
                features: ["Professional coaching", "Physical fitness", "Match exposure", "Balanced academics"],
                link: "/institutions/cricket-academy",
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Industrial Training",
                description: "Short-term vocational training programs designed to build practical skills required by the industry.",
                icon: Briefcase,
                features: ["Hands-on training", "Industry certifications", "Internship opportunities", "Job placement"],
                link: "/academics/vocational",
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "Foundation Courses",
                description: "Preparatory programs for students aiming to excel in IIT-JEE, NEET, and other competitive examinations.",
                icon: BookOpen,
                features: ["Concept building", "Problem-solving", "Mock tests", "Performance analysis"],
                link: "/academics/foundation",
                color: "from-cyan-500 to-blue-600"
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-2 w-full bg-gradient-to-r ${program.color}"></div>
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 text-white`}>
                    <program.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    Learn more
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Academic Calendar Section */}
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
                Academic Schedule
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Academic Calendar
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
              Key dates and events for the current academic year
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CalendarClock className="w-6 h-6 mr-2 text-indigo-600" />
                Academic Year 2023-24
              </h3>
              
              <div className="space-y-6">
                {[
                  { period: "First Semester", dates: "July 15 - December 20, 2023" },
                  { period: "Winter Break", dates: "December 21, 2023 - January 5, 2024" },
                  { period: "Second Semester", dates: "January 6 - May 31, 2024" },
                  { period: "Summer Break", dates: "June 1 - July 14, 2024" }
                ].map((item, index) => (
                  <div key={index} className="flex border-l-2 border-indigo-500 pl-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.period}</p>
                      <p className="text-gray-600 text-sm">{item.dates}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-indigo-600" />
                Examination Schedule
              </h3>
              
              <div className="space-y-6">
                {[
                  { exam: "First Internal Assessment", dates: "September 15-20, 2023" },
                  { exam: "Mid-Term Examinations", dates: "October 25-31, 2023" },
                  { exam: "Second Internal Assessment", dates: "February 15-20, 2024" },
                  { exam: "Final Examinations", dates: "May 15-30, 2024" }
                ].map((item, index) => (
                  <div key={index} className="flex border-l-2 border-indigo-500 pl-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.exam}</p>
                      <p className="text-gray-600 text-sm">{item.dates}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Regular Class Schedule</h4>
                <p className="text-gray-600 mt-1">Monday to Friday: 8:30 AM - 3:30 PM</p>
                <p className="text-gray-600">Saturday: 8:30 AM - 12:30 PM (Selected activities and remedial classes)</p>
                <p className="text-indigo-600 mt-2 text-sm">Note: Specific program schedules may vary. Please refer to your respective department for detailed timetables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculty Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
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
                Meet Our Team
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Academic Faculty
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
              Our distinguished faculty brings decades of experience and expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Head of Engineering Department",
                image: "/images/faculty1.jpg",
                credentials: "Ph.D. in Mechanical Engineering, IIT Delhi",
                experience: "15+ years of teaching and research experience"
              },
              {
                name: "Prof. Rajesh Mehta",
                role: "Mathematics Department",
                image: "/images/faculty2.jpg",
                credentials: "M.Sc. Mathematics, Rajasthan University",
                experience: "20+ years specializing in competitive exam preparation"
              },
              {
                name: "Dr. Suman Gupta",
                role: "Head of Sciences",
                image: "/images/faculty3.jpg",
                credentials: "Ph.D. in Physics, Delhi University",
                experience: "Author of 5 textbooks and 25+ research papers"
              }
            ].map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{faculty.name}</h3>
                    <p className="text-blue-200">{faculty.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{faculty.credentials}</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{faculty.experience}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/faculty"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-medium rounded-full border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300"
            >
              View All Faculty
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  Resources
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block tracking-tight">
                <span>Learning Infrastructure</span>
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
                  We provide comprehensive learning resources and modern infrastructure to support academic excellence. Our campus features state-of-the-art facilities that enhance the learning experience and prepare students for future challenges.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Well-Equipped Libraries",
                    description: "Extensive collection of books, journals, and digital resources across subjects",
                    icon: BookOpen
                  },
                  {
                    title: "Advanced Laboratories",
                    description: "Modern labs with the latest equipment for practical learning and research",
                    icon: Brain
                  },
                  {
                    title: "Digital Learning Centers",
                    description: "Computer labs with high-speed internet and specialized software applications",
                    icon: FileText
                  },
                  {
                    title: "Smart Classrooms",
                    description: "Technology-integrated learning spaces with audio-visual facilities",
                    icon: GraduationCap
                  }
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
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
              className="relative order-1 md:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-1 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
                    <Image 
                      src="/images/library.jpg" 
                      alt="Modern library at Dildhani Education Group" 
                      width={300}
                      height={400}
                      className="object-cover rounded-lg h-64 w-full"
                    />
                  </div>
                  <div className="p-1 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                    <Image 
                      src="/images/computer-lab.jpg" 
                      alt="Computer lab at Dildhani Education Group" 
                      width={300}
                      height={200}
                      className="object-cover rounded-lg h-40 w-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg">
                    <Image 
                      src="/images/science-lab.jpg" 
                      alt="Science lab at Dildhani Education Group" 
                      width={300}
                      height={200}
                      className="object-cover rounded-lg h-40 w-full"
                    />
                  </div>
                  <div className="p-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
                    <Image 
                      src="/images/smart-classroom.jpg" 
                      alt="Smart classroom at Dildhani Education Group" 
                      width={300}
                      height={400}
                      className="object-cover rounded-lg h-64 w-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
              <p className="text-lg text-blue-100 mb-10">
                Take the first step towards educational excellence with Dildhani Education Group.
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
  )
} 
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import { 
  ChevronRight, 
  School, 
  BookOpen, 
  Shield, 
  Trophy, 
  Home,
  ArrowRight,
  Users 
} from "lucide-react"

export default function InstitutionsPage() {
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
            alt="Dildhani Education Group Institutions" 
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
                  <span>Institutions</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Our
                <span className="relative ml-2">
                  <span className="relative z-10">Institutions</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Excellence in education across diverse disciplines
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

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Educational Excellence</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Dildhani Education Group Institutions</h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
              <p className="mt-8 text-gray-600 max-w-3xl mx-auto">
                Dildhani Education Group operates diverse educational institutions, each committed to excellence in its respective field. Our institutions provide quality education and training to students at various levels.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={institution.href} className="block">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={institution.image}
                        alt={institution.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/20 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                      
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                        <div className="mb-2">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm">
                            {institution.icon}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{institution.name}</h3>
                        <p className="text-sm text-blue-100 mb-4">{institution.description}</p>
                        <div className="flex items-center text-blue-200 text-sm font-medium">
                          <span>Learn more</span>
                          <motion.span
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Our Commitment</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Institutional Values</h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Join Our Educational Journey?</h2>
              <p className="text-blue-100 mb-8">Explore our institutions and discover the right path for your educational goals.</p>
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

// Icons for institutions
const SchoolIcon = () => <School className="h-5 w-5 text-white" />
const DefenceIcon = () => <Shield className="h-5 w-5 text-white" />
const PolytechnicIcon = () => <BookOpen className="h-5 w-5 text-white" />
const CricketIcon = () => <Trophy className="h-5 w-5 text-white" />
const HostelIcon = () => <Home className="h-5 w-5 text-white" />

// Data for institutions
const institutions = [
  {
    name: "Bhawani Polytechnic College",
    description: "AICTE approved technical education with modern facilities",
    href: "/institutions/polytechnic",
    image: "/images/more_images/83afd1_bac3206c269b406a97df5f78340a78b6~mv2.jpeg",
    icon: <PolytechnicIcon />,
  },
  {
    name: "Kaptan Officer Academy",
    description: "Preparing candidates for defence and civil services",
    href: "/institutions/defence-academy",
    image: "/images/more_images/83afd1_a470b6e8b1724464a2d05b223cb937a1~mv2.jpeg",
    icon: <DefenceIcon />,
  },
  {
    name: "Adarsh Senior Secondary School",
    description: "Quality education with holistic development approach",
    href: "/institutions/school",
    image: "/images/more_images/83afd1_e272790fdc8f442e8fce0f46e0cad890~mv2.jpeg",
    icon: <SchoolIcon />,
  },
  {
    name: "Cricket Academy",
    description: "Professional coaching for cricket enthusiasts",
    href: "/institutions/cricket-academy",
    image: "/images/more_images/83afd1_7308011757bf48b495446e75c31cf7eb~mv2.jpeg",
    icon: <CricketIcon />,
  },
  {
    name: "Kaptan Girls Hostel",
    description: "Safe and nurturing residential facility for female students",
    href: "/institutions/hostel",
    image: "/images/more_images/83afd1_50d7361c1d02434fb259474c5916bb45~mv2.jpeg",
    icon: <HostelIcon />,
  }
];

// Values of the institutions
const values = [
  {
    title: "Excellence in Education",
    description: "We are committed to providing top-quality education across all our institutions, ensuring students receive the best possible learning experience.",
    icon: School
  },
  {
    title: "Holistic Development",
    description: "Beyond academics, we focus on the all-round development of students, including physical fitness, moral values, and social awareness.",
    icon: BookOpen
  },
  {
    title: "Modern Infrastructure",
    description: "Our institutions are equipped with state-of-the-art facilities and modern infrastructure to enhance the learning experience.",
    icon: Shield
  },
  {
    title: "Skilled Faculty",
    description: "We have a team of experienced and dedicated faculty members who are experts in their respective fields.",
    icon: Users
  },
  {
    title: "Safe Environment",
    description: "We ensure a safe and supportive environment for all our students, with special focus on security and well-being.",
    icon: Home
  },
  {
    title: "Career Guidance",
    description: "We provide comprehensive career guidance and placement assistance to help students achieve their career goals.",
    icon: ChevronRight
  }
]; 
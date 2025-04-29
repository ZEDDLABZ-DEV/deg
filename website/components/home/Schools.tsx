"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Shield, School, Trophy, Building, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const schools = [
  {
    id: 1,
    name: "Bhawani Polytechnic College",
    description: "AICTE approved polytechnic institution offering electrical, civil and mechanical engineering programs.",
    image: "/images/institutions/polytechnic.jpg",
    gradient: "from-blue-800 to-indigo-900",
    link: "/institutions/polytechnic",
    icon: GraduationCap,
    hoverColor: "bg-blue-100"
  },
  {
    id: 2,
    name: "Kaptan Officer Academy",
    description: "Defence training academy preparing students for careers in armed forces and security services.",
    image: "/images/institutions/kaptan-officer-academy.jpg",
    gradient: "from-slate-800 to-gray-900",
    link: "/institutions/defence-academy",
    icon: Shield,
    hoverColor: "bg-slate-100"
  },
  {
    id: 3,
    name: "Adarsh Senior Secondary School",
    description: "Senior secondary school and coaching center for 9th-12th with focus on science & mathematics.",
    image: "/images/institutions/adarsh-school.jpg",
    gradient: "from-amber-700 to-orange-800",
    link: "/institutions/school",
    icon: School,
    hoverColor: "bg-amber-50"
  },
  {
    id: 4,
    name: "Colonel Rajvardhan Cricket Academy",
    description: "Professional cricket training facility developing the next generation of cricket talent.",
    image: "/images/institutions/cricket-academy.jpg",
    gradient: "from-emerald-700 to-green-800",
    link: "/institutions/cricket-academy",
    icon: Trophy,
    hoverColor: "bg-emerald-50"
  },
  {
    id: 5,
    name: "Kaptan Girls Hostel",
    description: "Safe, comfortable residential facility for female students with modern amenities.",
    image: "/images/about/ourstory.jpg",
    gradient: "from-purple-700 to-violet-900",
    link: "/institutions/hostel",
    icon: Building,
    hoverColor: "bg-purple-50",
  },
  {
    id: 6,
    name: "Kaptan Coaching Centre",
    description: "Specialized coaching for competitive exams and higher education entrance tests.",
    image: "/images/gallery/83afd1_8fbca8bfdafb4b1cb2f2b1a0cb78da85~mv2.jpeg",
    gradient: "from-rose-700 to-red-900",
    link: "/institutions/coaching",
    icon: BookOpen,
    hoverColor: "bg-rose-50"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -12,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export function Schools() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800 mb-4"
          >
            Educational Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              Our Prestigious
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-3 bg-blue-200/30 -z-10"
              />
            </span>
            <span className="relative inline-block ml-2">
              Institutions
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-3 bg-blue-200/30 -z-10"
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Discover our world-class educational institutions that have been nurturing young minds and shaping future leaders since 2011.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <motion.div
              key={school.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group relative isolate"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  alt={school.name}
                  className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                  src={school.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="px-6 py-4 text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <Link 
                        href={school.link}
                        className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-900 font-medium px-5 py-2.5 rounded-full transition-colors duration-300"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${school.hoverColor} text-gray-900`}>
                    <school.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{school.description}</p>
                <Link 
                  href={school.link}
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <motion.div 
                  animate={{ 
                    rotate: [0, 90], 
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="w-full h-full bg-blue-500 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
          >
            Discover Our Vision
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 
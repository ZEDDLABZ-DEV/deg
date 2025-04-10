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
    image: "/images/school1.jpg",
    gradient: "from-maroon to-maroon/70",
    link: "/institutions/polytechnic",
    icon: GraduationCap
  },
  {
    id: 2,
    name: "Kaptan Officer Academy",
    description: "Defense training academy preparing students for careers in armed forces and security services.",
    image: "/images/school2.jpg",
    gradient: "from-charcoal to-charcoal/80",
    link: "/institutions/defense-academy",
    icon: Shield
  },
  {
    id: 3,
    name: "PCM Career Point",
    description: "Senior secondary school and coaching center for 9th-12th with focus on science & mathematics.",
    image: "/images/school3.jpg",
    gradient: "from-gold to-gold/70",
    link: "/institutions/school",
    icon: School
  },
  {
    id: 4,
    name: "Colonel Rajvardhan Cricket Academy",
    description: "Professional cricket training facility developing the next generation of cricket talent.",
    image: "/images/school4.jpg",
    gradient: "from-light-blue to-light-blue/70",
    link: "/institutions/cricket-academy",
    icon: Trophy
  },
  {
    id: 5,
    name: "Kaptan Girls Hostel",
    description: "Safe, comfortable residential facility for female students with modern amenities.",
    image: "/images/school5.jpg",
    gradient: "from-gold to-gold/70",
    link: "/institutions/hostel",
    icon: Building
  },
  {
    id: 6,
    name: "Kaptan Coaching Centre",
    description: "Specialized coaching for competitive exams and higher education entrance tests.",
    image: "/images/school6.jpg",
    gradient: "from-maroon to-maroon/70",
    link: "/institutions/coaching",
    icon: BookOpen
  }
]

export function Schools() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">
            Our Prestigious Institutions
          </h2>
          <p className="text-xl text-deep-gray max-w-3xl mx-auto">
            Discover our world-class educational institutions in Jodhpur, Rajasthan that have been nurturing young minds since 2011.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group relative"
            >
              <div className="h-56 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${school.gradient} opacity-80 z-10`}></div>
                <Image
                  alt={school.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  src={school.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
                  >
                    <ArrowRight className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <school.icon className="h-6 w-6 text-maroon" />
                  <h3 className="text-xl font-bold text-charcoal font-serif">{school.name}</h3>
                </div>
                <p className="text-deep-gray mb-4 text-sm">{school.description}</p>
                <Link 
                  href={school.link}
                  className="inline-flex items-center text-maroon font-medium hover:text-gold transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
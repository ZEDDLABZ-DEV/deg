"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/app/lib/utils"

const schools = [
  {
    id: 1,
    name: "EduGroup School Pilani",
    description: "A premier boarding school with over 100 years of educational excellence.",
    image: "/images/school1.jpg",
    gradient: "from-blue-500 to-purple-600",
    link: "/schools/pilani",
  },
  {
    id: 2,
    name: "EduGroup School Sanawar",
    description: "Set amidst beautiful hills, offering holistic education in a serene environment.",
    image: "/images/school2.jpg",
    gradient: "from-emerald-500 to-teal-600",
    link: "/schools/sanawar",
  },
  {
    id: 3,
    name: "EduGroup School Shimla",
    description: "A modern campus with traditional values, nurturing future global leaders.",
    image: "/images/school3.jpg",
    gradient: "from-amber-500 to-orange-600",
    link: "/schools/shimla",
  },
]

export function Schools() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Prestigious Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our world-class educational institutions that have been nurturing young minds for generations.
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
                <img
                  alt={school.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src={school.image}
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
                <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                <p className="text-gray-600 mb-4">{school.description}</p>
                <Link 
                  href={school.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
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
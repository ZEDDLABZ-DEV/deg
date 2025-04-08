"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Users, Globe, Award, Heart } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "World-class curriculum and teaching methodologies to ensure outstanding academic performance.",
  },
  {
    icon: BookOpen,
    title: "Holistic Education",
    description: "Balanced focus on academics, sports, arts, and character development.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Highly qualified and experienced teachers dedicated to student success.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International collaborations and exchange programs for global exposure.",
  },
  {
    icon: Award,
    title: "State-of-the-Art Facilities",
    description: "Modern infrastructure and resources to support comprehensive learning.",
  },
  {
    icon: Heart,
    title: "Inclusive Environment",
    description: "Welcoming community that celebrates diversity and fosters growth.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing an exceptional educational experience that prepares students for success in an ever-changing world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
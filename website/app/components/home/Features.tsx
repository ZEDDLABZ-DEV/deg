"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Users, Globe, Award, Shield } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Technical Excellence",
    description: "AICTE-approved polytechnic programs with industry-ready curriculum and practical training.",
  },
  {
    icon: Shield,
    title: "Defense Training",
    description: "Specialized coaching and physical training for students aiming for careers in defense services.",
  },
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Board of Technical Education (Rajasthan) affiliated programs with focus on academic rigor.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Experienced educators and industry professionals dedicated to student success.",
  },
  {
    icon: Award,
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure including labs, sports facilities, and residential accommodations.",
  },
  {
    icon: Globe,
    title: "Career Development",
    description: "Placement assistance, career counseling, and industry connections for all students.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">
            Why Choose Our Institutions
          </h2>
          <p className="text-xl text-deep-gray max-w-3xl mx-auto">
            Since 2011, we&apos;ve been committed to providing exceptional educational experiences that prepare students for success in an ever-changing world.
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
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-soft-gray/10"
            >
              <div className="w-12 h-12 bg-maroon/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-maroon" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-deep-gray">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
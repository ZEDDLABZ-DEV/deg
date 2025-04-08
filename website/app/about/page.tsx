"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/30"></div>
          {/* Animated Shapes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-white/5 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: 0.5 + Math.random() * 1.5,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About Dildhani Education Group</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A legacy of educational excellence spanning decades, committed to nurturing future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Dildhani Education Group was founded with a vision to provide world-class education that balances academic excellence with character development. For decades, we have been at the forefront of educational innovation, creating learning environments that inspire students to achieve their fullest potential.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a single institution and has grown into a family of prestigious schools across the country, each maintaining the highest standards of educational excellence while honoring their unique traditions and heritage.
              </p>
              <p className="text-gray-600">
                Today, Dildhani Education Group institutions are recognized nationally for their academic achievements, state-of-the-art facilities, and the accomplishments of our alumni who have gone on to make significant contributions in various fields across the globe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img src="/images/about.jpg" alt="Our Campus" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Dildhani Education Group institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", description: "Striving for the highest standards in all endeavors" },
              { title: "Integrity", description: "Acting with honesty, ethics, and responsibility" },
              { title: "Innovation", description: "Embracing creativity and forward-thinking approaches" },
              { title: "Inclusivity", description: "Celebrating diversity and fostering belonging" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
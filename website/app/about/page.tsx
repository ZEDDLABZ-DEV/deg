"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-maroon to-charcoal text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-charcoal/30"></div>
          {/* Animated Shapes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gold/5 rounded-full"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">About Dildhani Education Group</h1>
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              A legacy of educational excellence since 2011, committed to nurturing future leaders in Jodhpur, Rajasthan.
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
              <h2 className="text-3xl font-bold text-charcoal mb-6 font-serif">Our Story</h2>
              <p className="text-deep-gray mb-4">
                Since its founding in 2011, Dildhani Education Group has been providing quality education from its base in Jodhpur, Rajasthan. What began as a small initiative has evolved into a comprehensive educational hub offering diverse learning opportunities.
              </p>
              <p className="text-deep-gray mb-4">
                Recognized by the All India Council for Technical Education (AICTE) and affiliated with the Board of Technical Education, Rajasthan, we&apos;ve established ourselves as a trusted name in education across the region.
              </p>
              <p className="text-deep-gray">
                Today, our campus houses multiple specialized institutions including the Bhawani Polytechnic College, Kaptan Officer Academy, PCM Career Point, Colonel Rajvardhan Cricket Academy, and Kaptan Girls Hostel &mdash; creating a holistic educational ecosystem.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <Image 
                  src="/images/about.jpg" 
                  alt="Dildhani Education Group Campus" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">Our Core Values</h2>
            <p className="text-xl text-deep-gray max-w-3xl mx-auto">
              These principles guide everything we do at Dildhani Education Group institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", description: "Striving for the highest standards in all educational endeavors" },
              { title: "Integrity", description: "Acting with honesty, ethics, and responsibility in all aspects" },
              { title: "Innovation", description: "Embracing creativity and forward-thinking approaches to education" },
              { title: "Inclusivity", description: "Creating an environment where every student feels welcomed and supported" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-maroon"
              >
                <h3 className="text-xl font-bold text-charcoal mb-3 font-serif">{value.title}</h3>
                <p className="text-deep-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
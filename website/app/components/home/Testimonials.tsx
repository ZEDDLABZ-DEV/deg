"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Dildhani Education Group has transformed my child's approach to learning. The dedicated faculty and excellent facilities have helped them excel both academically and in extracurricular activities.",
    author: "Navneet Kaushik",
    role: "Parent",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    quote: "Since joining Dildhani Education Group School, I have witnessed my child grow into a confident and compassionate teenager. The school's environment has developed a love of learning that extends beyond the classroom.",
    author: "Rashmita Bhattacharjee",
    role: "Parent",
    gradient: "from-purple-600 to-pink-700",
  },
  {
    id: 3,
    quote: "My journey at Dildhani Education Group was transformative. The values instilled and skills nurtured here have been instrumental in my personal and professional success.",
    author: "Sikander Singh",
    role: "Alumni",
    gradient: "from-amber-500 to-red-600",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
      }, 6000)
    }
    
    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our parents, students and alumni about their experience with our institutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative h-full overflow-hidden">
            <div className="flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: current === index ? 1 : 0,
                    x: current === index ? 0 : 100,
                    display: current === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-3xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative">
                    <div className={`absolute top-0 left-0 h-2 w-full rounded-t-2xl bg-gradient-to-r ${testimonial.gradient}`}></div>
                    <Quote className="text-gray-300 h-12 w-12 mb-6" />
                    <p className="text-lg md:text-xl italic text-gray-700 mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </motion.button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'w-8 bg-primary' 
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
} 
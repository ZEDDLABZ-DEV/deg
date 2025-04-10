"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The polytechnic program at Dildhani Education Group provided me with excellent technical skills and industry connections. Their placement support helped me secure a great job right after graduation.",
    author: "Praveen Choudhary",
    role: "Polytechnic Graduate, 2020",
    gradient: "from-maroon to-maroon/70",
  },
  {
    id: 2,
    quote: "The defense academy&apos;s rigorous training and mentorship prepared me thoroughly for my career in the armed forces. The discipline and skills I gained here have been invaluable.",
    author: "Lt. Vikram Shekhawat",
    role: "Defense Academy Alumni",
    gradient: "from-charcoal to-charcoal/80",
  },
  {
    id: 3,
    quote: "As a parent, I&apos;ve seen my daughter thrive at PCM Career Point. The faculty provides individual attention and the campus facilities ensure both safety and comfort for students.",
    author: "Meena Sharma",
    role: "Parent",
    gradient: "from-gold to-gold/70",
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
    <section className="py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">
            What Our Community Says
          </h2>
          <p className="text-xl text-deep-gray max-w-3xl mx-auto">
            Hear from our alumni, students, and parents about their experience with our institutions in Jodhpur.
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
                  <div className="bg-off-white rounded-2xl p-8 md:p-12 shadow-lg relative">
                    <div className={`absolute top-0 left-0 h-2 w-full rounded-t-2xl bg-gradient-to-r ${testimonial.gradient}`}></div>
                    <Quote className="text-soft-gray h-12 w-12 mb-6" />
                    <p className="text-lg md:text-xl italic text-charcoal mb-8 font-serif">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-maroon/20 to-gold/20 flex items-center justify-center text-maroon font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-charcoal">{testimonial.author}</h4>
                        <p className="text-deep-gray">{testimonial.role}</p>
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
              className="p-2 rounded-full bg-white shadow-md hover:bg-off-white transition-colors border border-soft-gray/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-charcoal" />
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
                      ? 'w-8 bg-maroon' 
                      : 'w-2.5 bg-soft-gray hover:bg-deep-gray'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-off-white transition-colors border border-soft-gray/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-charcoal" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
} 
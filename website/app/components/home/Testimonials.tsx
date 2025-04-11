"use client"

import { motion } from "framer-motion"
import { Quote, User } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Singh",
    role: "JEE Advanced Qualifier",
    image: "/images/testimonial1.jpg",
    quote: "The coaching at DEG helped me secure a place at IIT Bombay. The faculty's dedication and structured approach to complex topics made all the difference.",
    program: "Kaptan Coaching Centre"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Class 12 Student",
    image: "/images/testimonial2.jpg",
    quote: "The supportive environment at Adarsh Senior Secondary School helped me overcome my fear of mathematics. Now I'm confident and excited about pursuing engineering.",
    program: "Adarsh Senior Secondary School"
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Defense Academy Graduate",
    image: "/images/testimonial3.jpg",
    quote: "The discipline and training I received at Kaptan Officer Academy prepared me for both physical and mental challenges of defense services selection.",
    program: "Kaptan Officer Academy"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute -left-64 top-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-70" />
        <div className="absolute -right-64 bottom-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply blur-3xl opacity-70" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 mb-4"
          >
            Student Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              Voices of Our
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-3 bg-indigo-100 -z-10"
              />
            </span>
            <span className="relative inline-block ml-2">
              Students
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-3 bg-indigo-100 -z-10"
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Hear directly from our students about their transformational educational journey with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow p-8 relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-indigo-100 rounded-full" />
              
              <div className="mb-6 flex justify-between items-start relative">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-100 bg-indigo-50 flex items-center justify-center">
                    {/* Using fallback UI with User icon if image is not available */}
                    <ImageWithFallback 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      fallback={
                        <div className="flex items-center justify-center w-full h-full bg-indigo-100">
                          <User className="h-8 w-8 text-indigo-500" />
                        </div>
                      }
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-indigo-600 mt-1">{testimonial.program}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-indigo-400 opacity-40" />
              </div>
              
              <blockquote className="text-gray-600 italic relative">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="mt-6 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-xs ml-2">5.0</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            &ldquo;Our mission is to provide quality education that transforms lives and creates opportunities for our students to excel in their chosen paths.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-indigo-50 flex items-center justify-center">
              <ImageWithFallback 
                src="/images/principal.jpg" 
                alt="Dr. Rajesh Kapoor" 
                width={48} 
                height={48}
                fallback={
                  <div className="flex items-center justify-center w-full h-full bg-indigo-100">
                    <User className="h-6 w-6 text-indigo-500" />
                  </div>
                }
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Dr. Rajesh Kapoor</p>
              <p className="text-sm text-gray-500">Principal Director, Dildhani Education Group</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Custom component that handles image loading errors
function ImageWithFallback({ 
  src, 
  alt, 
  fallback, 
  ...props 
}: { 
  src: string; 
  alt: string; 
  fallback: React.ReactNode; 
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  const [error, setError] = useState(false)
  
  return error ? (
    fallback
  ) : (
    <Image 
      src={src} 
      alt={alt}
      className="object-cover w-full h-full"
      onError={() => setError(true)}
      {...props}
    />
  )
} 
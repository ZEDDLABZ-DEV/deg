"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Users, Trophy, GraduationCap, Building } from "lucide-react"

interface StatProps {
  icon: React.ElementType
  value: number
  label: string
  prefix?: string
  suffix?: string
  color: string
}

function Stat({ icon: Icon, value, label, prefix = "", suffix = "", color }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // animation duration in ms
      const increment = Math.ceil(value / (duration / 16)) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start > value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(start)
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`mx-auto ${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-4xl font-bold text-gray-900 mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating over a decade of academic excellence and student success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat 
            icon={Users} 
            value={12000} 
            label="Alumni & Students"
            color="bg-blue-600" 
          />
          <Stat 
            icon={GraduationCap} 
            value={96} 
            label="Placement Rate" 
            suffix="%" 
            color="bg-indigo-600" 
          />
          <Stat 
            icon={Trophy} 
            value={250} 
            label="Awards & Recognition" 
            color="bg-purple-600" 
          />
          <Stat 
            icon={Building} 
            value={6} 
            label="Specialized Institutions" 
            color="bg-rose-600" 
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-blue-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-end">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                2011
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Since our founding in 2011</h3>
              <p className="text-gray-600">
                Dildhani Education Group has been committed to providing affordable, quality education 
                to students across Makrana (pincode-341505), Rajasthan. From our humble beginnings, we&apos;ve grown to 
                become one of the region&apos;s most respected educational institutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
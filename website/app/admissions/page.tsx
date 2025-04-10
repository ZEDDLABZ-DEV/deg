"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, FileText, Phone, Mail, Building } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-maroon to-charcoal text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src="/images/about.jpg"
            alt="Admissions at Dildhani Education Group"
            className="object-cover opacity-60"
            fill
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">Admissions</h1>
            <p className="text-xl text-light-blue max-w-3xl mx-auto">
              Take the first step toward a bright future with Dildhani Education Group&apos;s diverse educational programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4 font-serif">Our Educational Programs</h2>
            <p className="text-xl text-deep-gray max-w-3xl mx-auto">
              Dildhani Education Group offers a range of educational opportunities to meet diverse student needs and aspirations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Polytechnic College",
                description: "AICTE-approved diploma programs in Electrical, Civil, and Mechanical Engineering.",
                icon: Building,
                link: "/institutions/polytechnic",
              },
              {
                title: "Officer Academy",
                description: "Defense training programs preparing students for careers in armed forces and security services.",
                icon: BookOpen,
                link: "/institutions/defense-academy",
              },
              {
                title: "PCM Career Point",
                description: "Senior secondary education with specialized focus on Physics, Chemistry, and Mathematics.",
                icon: Calendar,
                link: "/institutions/school",
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-off-white p-8 rounded-lg shadow-md border border-soft-gray/10"
              >
                <div className="w-12 h-12 bg-maroon/10 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-maroon" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-serif">{program.title}</h3>
                <p className="text-deep-gray mb-4">{program.description}</p>
                <Link href={program.link}>
                  <Button variant="outline" className="border-maroon text-maroon hover:bg-maroon/5">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6 font-serif">Admissions Process</h2>
              <p className="text-deep-gray mb-6">
                Joining the Dildhani Education Group is a straightforward process. We welcome applications from motivated students looking to pursue quality education in a supportive environment.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "1. Choose Your Program",
                    description: "Explore our offerings and select the program that aligns with your educational goals and career aspirations."
                  },
                  {
                    title: "2. Submit Your Application",
                    description: "Complete and submit the application form along with the required documents either online or at our campus."
                  },
                  {
                    title: "3. Entrance Assessment",
                    description: "Depending on the program, candidates may need to take an entrance test or participate in an interview."
                  },
                  {
                    title: "4. Admission Confirmation",
                    description: "Successful candidates will receive an admission offer letter with further instructions."
                  }
                ].map((step, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">{step.title}</h3>
                    <p className="text-deep-gray mt-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Application Form</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-deep-gray mb-1">First Name</label>
                    <input type="text" className="w-full p-2 border border-soft-gray rounded-md" />
                  </div>
                  <div>
                    <label className="block text-deep-gray mb-1">Last Name</label>
                    <input type="text" className="w-full p-2 border border-soft-gray rounded-md" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Email</label>
                  <input type="email" className="w-full p-2 border border-soft-gray rounded-md" />
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Phone</label>
                  <input type="tel" className="w-full p-2 border border-soft-gray rounded-md" />
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Program of Interest</label>
                  <select className="w-full p-2 border border-soft-gray rounded-md">
                    <option>Select a program</option>
                    <option>Diploma in Electrical Engineering</option>
                    <option>Diploma in Civil Engineering</option>
                    <option>Diploma in Mechanical Engineering</option>
                    <option>Defense Academy Training</option>
                    <option>Senior Secondary (PCM)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-deep-gray mb-1">Message (Optional)</label>
                  <textarea rows={3} className="w-full p-2 border border-soft-gray rounded-md"></textarea>
                </div>
                
                <Button className="w-full bg-maroon hover:bg-maroon/90">Submit Application</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-maroon to-charcoal rounded-xl p-10 md:p-16 text-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 font-serif">Have Questions?</h2>
                <p className="text-light-blue mb-8">
                  Our admissions team is here to help you navigate the application process and answer any questions you may have.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>+91 82903 56671</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>admissions@dildhanieducationgroup.com</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>Download Admissions Brochure</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 font-serif">Important Dates</h3>
                <div className="space-y-3 text-light-blue">
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span>Application Deadline</span>
                    <span className="font-semibold">July 31, 2023</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span>Entrance Exam</span>
                    <span className="font-semibold">August 15, 2023</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span>Results Announcement</span>
                    <span className="font-semibold">August 30, 2023</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-white/20">
                    <span>Academic Session Begins</span>
                    <span className="font-semibold">September 15, 2023</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
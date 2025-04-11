"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, FileText, Phone, Mail, Building, ChevronRight, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function AdmissionsPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="relative py-28 bg-gradient-to-br from-purple-600 via-maroon to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
          <Image
            src="/images/about.jpg"
            alt="Admissions at Dildhani Education Group"
            className="object-cover scale-110 filter brightness-90"
            fill
            priority
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1, 0.3)}
            className="text-center lg:text-left lg:max-w-3xl"
          >
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/30 text-cyan-200 text-sm font-medium mb-3 border border-cyan-400/20 backdrop-blur-sm">
                <span className="flex items-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Start Your Journey</span>
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight"
            >
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-300">Educational</span> Community
            </motion.h1>
            
            <motion.p 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Take the first step toward a bright future with Dildhani Education Group&apos;s diverse and transformative educational programs.
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 'tween', 0.5, 1)}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-charcoal font-medium px-6 shadow-lg shadow-yellow-400/20">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/50 to-white relative">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer(0.1, 0.2)}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeIn('up', 'tween', 0.1, 1)}
              className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-600 text-sm font-medium mb-3 border border-fuchsia-200"
            >
              <span className="flex items-center justify-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Our Programs</span>
            </motion.span>
            <motion.h2 
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="text-4xl font-bold text-charcoal mb-4 font-serif"
            >
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Opportunities</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-xl text-deep-gray/80 max-w-3xl mx-auto"
            >
              Dildhani Education Group offers a range of educational paths to meet diverse student needs and aspirations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Polytechnic College",
                description: "AICTE-approved diploma programs in Electrical, Civil, and Mechanical Engineering for aspiring engineers.",
                icon: Building,
                link: "/institutions/polytechnic",
                color: "from-blue-500/20 to-blue-600/20",
                iconColor: "text-blue-600",
                borderColor: "border-blue-200",
                bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
                hoverBg: "group-hover:bg-blue-50"
              },
              {
                title: "Officer Academy",
                description: "Comprehensive defense training programs preparing students for successful careers in armed forces and security services.",
                icon: BookOpen,
                link: "/institutions/defense-academy",
                color: "from-teal-500/20 to-emerald-600/20",
                iconColor: "text-emerald-600",
                borderColor: "border-emerald-200",
                bgGradient: "bg-gradient-to-br from-teal-500 to-emerald-600",
                hoverBg: "group-hover:bg-emerald-50"
              },
              {
                title: "Adarsh Senior Secondary School",
                description: "Specialized senior secondary education with focused approach to Physics, Chemistry, and Mathematics.",
                icon: Calendar,
                link: "/institutions/school",
                color: "from-amber-500/20 to-orange-600/20",
                iconColor: "text-orange-600",
                borderColor: "border-amber-200",
                bgGradient: "bg-gradient-to-br from-amber-500 to-orange-600",
                hoverBg: "group-hover:bg-amber-50"
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 0.8)}
                className={`bg-white p-8 rounded-2xl shadow-xl border ${program.borderColor} hover:shadow-2xl transition-all duration-300 group ${program.hoverBg}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3 font-serif">{program.title}</h3>
                <p className="text-deep-gray mb-6 leading-relaxed">{program.description}</p>
                <Link href={program.link}>
                  <Button 
                    className={`text-white ${program.bgGradient} hover:opacity-90 flex items-center font-medium px-5 py-2 rounded-lg shadow-lg shadow-${program.iconColor}/20`}
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50 relative">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer(0.1, 0.2)}
            >
              <motion.span 
                variants={fadeIn('left', 'tween', 0.1, 1)}
                className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-3 border border-amber-200"
              >
                <span className="flex items-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> How to Apply</span>
              </motion.span>
              <motion.h2 
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="text-4xl font-bold text-charcoal mb-6 font-serif"
              >
                Admissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Process</span>
              </motion.h2>
              <motion.p 
                variants={fadeIn('left', 'tween', 0.3, 1)}
                className="text-lg text-deep-gray/80 mb-8 leading-relaxed"
              >
                Joining the Dildhani Education Group is a straightforward process. We welcome applications from motivated students looking to pursue quality education in a supportive environment.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Choose Your Program",
                    description: "Explore our offerings and select the program that aligns with your educational goals and career aspirations."
                  },
                  {
                    title: "Submit Your Application",
                    description: "Complete and submit the application form along with the required documents either online or at our campus."
                  },
                  {
                    title: "Entrance Assessment",
                    description: "Depending on the program, candidates may need to take an entrance test or participate in an interview."
                  },
                  {
                    title: "Admission Confirmation",
                    description: "Successful candidates will receive an admission offer letter with further instructions."
                  }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeIn('left', 'tween', 0.3 + i * 0.1, 1)}
                    className="flex gap-4"
                  >
                    <div className="relative flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-amber-400/20">
                        <span className="text-white font-semibold">{i+1}</span>
                      </div>
                      {i < 3 && <div className="absolute top-12 bottom-0 left-1/2 w-px bg-gradient-to-b from-amber-300 to-amber-100 -translate-x-1/2"></div>}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal font-serif">{step.title}</h3>
                      <p className="text-deep-gray/80 mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn('right', 'tween', 0.3, 1)}
              className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 relative backdrop-blur-sm"
            >
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-br-3xl opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-tl-3xl opacity-10"></div>

              <h3 className="text-2xl font-bold mb-8 font-serif relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Application Form</h3>
              <form className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="block text-deep-gray text-sm font-medium">First Name</label>
                    <input type="text" className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-deep-gray text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="block text-deep-gray text-sm font-medium">Email</label>
                  <input type="email" className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" />
                </div>
                
                <div className="space-y-1">
                  <label className="block text-deep-gray text-sm font-medium">Phone</label>
                  <input type="tel" className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" />
                </div>
                
                <div className="space-y-1">
                  <label className="block text-deep-gray text-sm font-medium">Program of Interest</label>
                  <select className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-select-arrow bg-no-repeat bg-right-0.5">
                    <option>Select a program</option>
                    <option>Diploma in Electrical Engineering</option>
                    <option>Diploma in Civil Engineering</option>
                    <option>Diploma in Mechanical Engineering</option>
                    <option>Defense Academy Training</option>
                    <option>Senior Secondary (PCM)</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label className="block text-deep-gray text-sm font-medium">Message (Optional)</label>
                  <textarea rows={3} className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"></textarea>
                </div>
                
                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium py-6 shadow-lg shadow-purple-500/30">
                  Submit Application
                </Button>
                
                <p className="text-center text-sm text-deep-gray/60">
                  By submitting, you agree to our <Link href="/privacy-policy" className="text-purple-600 hover:underline">privacy policy</Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-amber-300/30 to-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-indigo-500/5 rounded-full blur-3xl"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-950 rounded-3xl p-10 lg:p-16 text-white shadow-2xl border border-indigo-500/10 relative z-10"
            >
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-soft-light rounded-3xl"></div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-3 border border-teal-500/30 backdrop-blur-sm">
                    <span className="flex items-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Get In Touch</span>
                  </span>
                  <h2 className="text-3xl font-bold mb-6 font-serif">Have Questions?</h2>
                  <p className="text-indigo-100/80 mb-8 leading-relaxed">
                    Our admissions team is here to help you navigate the application process and answer any questions you may have about our programs and institution.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-teal-500/30">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-indigo-200/60 mb-1">Call Us</p>
                        <p className="text-lg font-medium">+91 82903 56671</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-blue-500/30">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-indigo-200/60 mb-1">Email</p>
                        <p className="text-lg font-medium">admissions@dildhanieducationgroup.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-fuchsia-500/30">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-indigo-200/60 mb-1">Resources</p>
                        <Link href="/brochure.pdf" className="text-lg font-medium text-teal-300 hover:underline inline-flex items-center group">
                          Download Admissions Brochure <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-3 border border-amber-500/30 backdrop-blur-sm">
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" /> Key Dates</span>
                  </span>
                  <h3 className="text-2xl font-bold mb-6 font-serif">Important Dates</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Application Deadline", date: "July 31, 2023" },
                      { label: "Entrance Exam", date: "August 15, 2023" },
                      { label: "Results Announcement", date: "August 30, 2023" },
                      { label: "Academic Session Begins", date: "September 15, 2023" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between pb-3 border-b border-indigo-500/20 group hover:border-indigo-400/40 transition-all duration-200">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mr-4 group-hover:bg-indigo-500/30 transition-all duration-200">
                            <Calendar className="h-5 w-5 text-amber-300" />
                          </div>
                          <span className="text-indigo-100/80">{item.label}</span>
                        </div>
                        <span className="text-amber-300 font-semibold">{item.date}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-4 rounded-xl border border-amber-500/20">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-300 shrink-0 mt-0.5 mr-3" />
                      <p className="text-indigo-100/80">
                        Early applicants may be eligible for scholarships and priority consideration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer(0.1, 0.2)}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeIn('up', 'tween', 0.1, 1)}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-3 border border-indigo-200"
            >
              <span className="flex items-center justify-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Common Questions</span>
            </motion.span>
            <motion.h2 
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="text-4xl font-bold text-charcoal mb-4 font-serif"
            >
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Questions</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-xl text-deep-gray/80 max-w-3xl mx-auto"
            >
              Find answers to common questions about our admissions process
            </motion.p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "What are the eligibility criteria for admission?",
                answer: "Eligibility varies by program. For polytechnic courses, students must have completed 10th standard with mathematics and science. For the Officer Academy, physical fitness requirements apply along with academic criteria."
              },
              {
                question: "Are scholarships available for students?",
                answer: "Yes, we offer merit-based and need-based scholarships. Outstanding students may qualify for up to 50% tuition waiver based on entrance exam performance and previous academic records."
              },
              {
                question: "What documents are required for application?",
                answer: "Required documents include completed application form, recent passport-size photographs, previous academic mark sheets/certificates, ID proof, address proof, and program-specific requirements."
              },
              {
                question: "Can international students apply?",
                answer: "Yes, we welcome international students. Additional documentation including passport, visa details, and education equivalency certificates will be required."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn('up', 'tween', 0.2 + i * 0.1, 0.8)}
                className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-200 hover:border-indigo-200"
              >
                <h3 className="text-xl font-semibold text-indigo-900 mb-3 font-serif">{faq.question}</h3>
                <p className="text-deep-gray/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="mt-12 text-center"
          >
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 shadow-lg shadow-indigo-500/20">
              Contact Admissions Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
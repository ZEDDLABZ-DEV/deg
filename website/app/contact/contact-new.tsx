"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, CheckCircle2, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { fadeIn, staggerContainer } from "@/lib/motion"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
      
      console.log(values)
      setIsSuccess(true)
      form.reset()
      
      toast.success("Message Sent Successfully", {
        description: "Thank you for contacting us. We&apos;ll respond shortly.",
      })
    } catch {
      toast.error("Something went wrong", {
        description: "Your message couldn&apos;t be sent. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <section className="relative py-28 bg-gradient-to-br from-purple-600 via-maroon to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
          <Image
            src="/images/about.jpg"
            alt="Contact Dildhani Education Group"
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
                <span className="flex items-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Get In Touch</span>
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight"
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-300">Our Team</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We&apos;d love to hear from you. Reach out to our team for any questions, inquiries, or feedback about our educational programs.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Scrolling Indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/50 to-white relative">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer(0.1, 0.2)}
              className="space-y-12"
            >
              <div>
                <motion.span 
                  variants={fadeIn('left', 'tween', 0.1, 1)}
                  className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-3 border border-purple-200"
                >
                  <span className="flex items-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Our Contacts</span>
                </motion.span>
                <motion.h2 
                  variants={fadeIn('left', 'tween', 0.2, 1)}
                  className="text-4xl font-bold text-charcoal mb-4 font-serif"
                >
                  Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Touch</span>
                </motion.h2>
                <motion.p 
                  variants={fadeIn('left', 'tween', 0.3, 1)}
                  className="text-xl text-deep-gray/80 leading-relaxed"
                >
                  Whether you&apos;re a prospective student, parent, or partner, we welcome your inquiries. Reach out through any of the following channels, and our team will be happy to assist you.
                </motion.p>
              </div>
              
              <div className="space-y-8">
                <motion.div 
                  variants={fadeIn('left', 'tween', 0.4, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-indigo-500/30">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Our Location</h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      Dildhani Institute Of Technical Education Sansthan<br />
                      Makrana, Rajasthan<br />
                      India
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn('left', 'tween', 0.5, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-blue-500/30">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Phone</h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      Main: <a href="tel:+918290356671" className="text-blue-600 hover:text-blue-700 transition-colors">+91 82903 56671</a><br />
                      Admissions: <a href="tel:+918290356672" className="text-blue-600 hover:text-blue-700 transition-colors">+91 82903 56672</a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn('left', 'tween', 0.6, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-teal-500/30">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Email</h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      General: <a href="mailto:info@dildhanieducationgroup.com" className="text-teal-600 hover:text-teal-700 transition-colors">info@dildhanieducationgroup.com</a><br />
                      Admissions: <a href="mailto:admissions@dildhanieducationgroup.com" className="text-teal-600 hover:text-teal-700 transition-colors">admissions@dildhanieducationgroup.com</a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn('left', 'tween', 0.7, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-amber-500/30">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">Office Hours</h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={fadeIn('left', 'tween', 0.8, 1)}>
                <h3 className="text-lg font-semibold text-charcoal mb-5 font-serif">Connect With Us</h3>
                <div className="flex space-x-5">
                  {[
                    { icon: Facebook, href: "https://facebook.com/DildhaniEducationGroup", label: "Facebook", colors: "from-blue-400 to-blue-600", shadow: "shadow-blue-500/30" },
                    { icon: Instagram, href: "https://instagram.com/DildhaniEducationGroup", label: "Instagram", colors: "from-pink-400 to-fuchsia-600", shadow: "shadow-pink-500/30" },
                    { icon: Twitter, href: "https://twitter.com/DildhaniEdu", label: "Twitter", colors: "from-cyan-400 to-blue-500", shadow: "shadow-blue-500/30" },
                    { icon: Linkedin, href: "https://linkedin.com/company/DildhaniEducationGroup", label: "LinkedIn", colors: "from-blue-500 to-indigo-600", shadow: "shadow-indigo-500/30" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`h-12 w-12 rounded-full bg-gradient-to-br ${social.colors} flex items-center justify-center ${social.shadow} text-white hover:shadow-lg transition-all duration-300`}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn('right', 'tween', 0.3, 1)}
              className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 relative backdrop-blur-sm"
            >
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-br-3xl opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-tl-3xl opacity-10"></div>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      delay: 0.2
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3 font-serif">Message Sent!</h3>
                  <p className="text-deep-gray/80 mb-8 max-w-md mx-auto">Thank you for reaching out. Our team will review your message and get back to you shortly.</p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white px-6 py-2.5 shadow-lg shadow-purple-500/30"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2 font-serif relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Send Us a Message</h3>
                  <p className="text-deep-gray/80 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-deep-gray text-sm font-medium">First Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your first name" 
                                  {...field} 
                                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-500 text-sm" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-deep-gray text-sm font-medium">Last Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your last name" 
                                  {...field} 
                                  className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-500 text-sm" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-gray text-sm font-medium">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Your email address" 
                                {...field} 
                                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-sm" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-gray text-sm font-medium">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="Your phone number" 
                                {...field} 
                                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-sm" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-gray text-sm font-medium">Subject</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 h-auto">
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                                <SelectItem value="programs">Program Information</SelectItem>
                                <SelectItem value="visit">Campus Visit</SelectItem>
                                <SelectItem value="career">Career Opportunities</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500 text-sm" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-deep-gray text-sm font-medium">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please type your message here..." 
                                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none" 
                                rows={4} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-sm" />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium py-6 shadow-lg shadow-purple-500/30 flex items-center justify-center group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Send Message <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-950 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-soft-light"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer(0.1, 0.2)}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeIn('up', 'tween', 0.1, 1)}
              className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-3 border border-teal-500/30 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center"><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Visit Us</span>
            </motion.span>
            <motion.h2 
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="text-4xl font-bold mb-4 font-serif"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Location</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-xl text-indigo-100/80 max-w-3xl mx-auto"
            >
              Visit our Dildhani Institute Of Technical Education Sansthan campus in Makrana, Rajasthan to experience our facilities and meet our team in person.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="rounded-2xl overflow-hidden h-[500px] shadow-2xl border-8 border-indigo-900/50"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.2841374994537!2d74.76362897544328!3d27.021186076582655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9cc6615a2777%3A0xefd410fd11ef1e14!2sDildhani%20Institute%20Of%20Technical%20Education%20Sansthan!5e0!3m2!1sen!2sin!4v1744288889415!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
            ></iframe>
          </motion.div>
          
          {/* Call to action section */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="max-w-4xl mx-auto mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 font-serif">Ready to Visit Us?</h3>
            <p className="text-indigo-100/80 mb-8">
              Schedule a campus tour to explore our facilities and meet with our faculty members.
            </p>
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full shadow-lg shadow-teal-500/30">
              Schedule a Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
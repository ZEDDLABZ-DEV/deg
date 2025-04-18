"use client";

import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
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
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/30 text-cyan-200 text-sm font-medium mb-3 border border-cyan-400/20 backdrop-blur-sm">
                <span className="flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Get In Touch
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight"
            >
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-300">
                Our Team
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We&apos;d love to hear from you. Reach out to our team for any
              questions, inquiries, or feedback about our educational programs.
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
                  variants={fadeIn("left", "tween", 0.1, 1)}
                  className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-3 border border-purple-200"
                >
                  <span className="flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Our Contacts
                  </span>
                </motion.span>
                <motion.h2
                  variants={fadeIn("left", "tween", 0.2, 1)}
                  className="text-4xl font-bold text-charcoal mb-4 font-serif"
                >
                  Get In{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Touch
                  </span>
                </motion.h2>
                <motion.p
                  variants={fadeIn("left", "tween", 0.3, 1)}
                  className="text-xl text-deep-gray/80 leading-relaxed"
                >
                  Whether you&apos;re a prospective student, parent, or partner,
                  we welcome your inquiries. Reach out through any of the
                  following channels, and our team will be happy to assist you.
                </motion.p>
              </div>

              <div className="space-y-8">
                <motion.div
                  variants={fadeIn("left", "tween", 0.4, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-indigo-500/30">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">
                      Our Location
                    </h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      Dildhani Education Group Campus
                      <br />
                      Makrana (pincode-341505), Rajasthan
                      <br />
                      India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", "tween", 0.5, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-blue-500/30">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">
                      Phone
                    </h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      Main:{" "}
                      <a
                        href="tel:+918290356671"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +91 82903 56671
                      </a>
                      <br />
                      Admissions:{" "}
                      <a
                        href="tel:+918290356672"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +91 82903 56672
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", "tween", 0.6, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-teal-500/30">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">
                      Email
                    </h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      General:{" "}
                      <a
                        href="mailto:info@dildhanieducationgroup.com"
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        info@dildhanieducationgroup.com
                      </a>
                      <br />
                      Admissions:{" "}
                      <a
                        href="mailto:admissions@dildhanieducationgroup.com"
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        admissions@dildhanieducationgroup.com
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", "tween", 0.7, 1)}
                  className="flex items-start group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 mr-4 shadow-lg shadow-amber-500/30">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal font-serif">
                      Office Hours
                    </h3>
                    <p className="text-deep-gray/80 mt-2 leading-relaxed">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
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
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-3 border border-teal-500/30 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Visit Us
              </span>
            </motion.span>
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold mb-4 font-serif"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Location
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-indigo-100/80 max-w-3xl mx-auto"
            >
              Visit our campus in Makrana (pincode-341505), Rajasthan to
              experience our facilities and meet our team in person.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="rounded-2xl overflow-hidden h-[500px] shadow-2xl border-8 border-indigo-900/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112993.21531407554!2d74.64632508777577!3d27.029617236254064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c3bd95ee0b59b%3A0x75d5106e8d30316f!2sMakrana%2C%20Rajasthan%20341505!5e0!3m2!1sen!2sin!4v1715146564177!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-lg shadow-indigo-500/10"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

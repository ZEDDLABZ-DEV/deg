"use client";

import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building,
  Calendar,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/30 text-cyan-200 text-sm font-medium mb-3 border border-cyan-400/20 backdrop-blur-sm">
                <span className="flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Start Your Journey
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-serif leading-tight"
            >
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-300">
                Educational
              </span>{" "}
              Community
            </motion.h1>

            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Take the first step toward a bright future with Dildhani Education
              Group&apos;s diverse and transformative educational programs.
            </motion.p>
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
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-600 text-sm font-medium mb-3 border border-fuchsia-200"
            >
              <span className="flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Our Programs
              </span>
            </motion.span>
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-charcoal mb-4 font-serif"
            >
              Educational{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Opportunities
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-deep-gray/80 max-w-3xl mx-auto"
            >
              Dildhani Education Group offers a range of educational paths to
              meet diverse student needs and aspirations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Polytechnic College",
                description:
                  "AICTE-approved diploma programs in Electrical, Civil, and Mechanical Engineering for aspiring engineers.",
                icon: Building,
                link: "/institutions/polytechnic",
                color: "from-blue-500/20 to-blue-600/20",
                iconColor: "text-blue-600",
                borderColor: "border-blue-200",
                bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
                hoverBg: "group-hover:bg-blue-50",
              },
              {
                title: "Officer Academy",
                description:
                  "Comprehensive defence training programs preparing students for successful careers in armed forces and security services.",
                icon: BookOpen,
                link: "/institutions/defence-academy",
                color: "from-teal-500/20 to-emerald-600/20",
                iconColor: "text-emerald-600",
                borderColor: "border-emerald-200",
                bgGradient: "bg-gradient-to-br from-teal-500 to-emerald-600",
                hoverBg: "group-hover:bg-emerald-50",
              },
              {
                title: "Adarsh Senior Secondary School",
                description:
                  "Specialized senior secondary education with focused approach to Physics, Chemistry, and Mathematics.",
                icon: Calendar,
                link: "/institutions/school",
                color: "from-amber-500/20 to-orange-600/20",
                iconColor: "text-orange-600",
                borderColor: "border-amber-200",
                bgGradient: "bg-gradient-to-br from-amber-500 to-orange-600",
                hoverBg: "group-hover:bg-amber-50",
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.8)}
                className={`bg-white p-8 rounded-2xl shadow-xl border ${program.borderColor} hover:shadow-2xl transition-all duration-300 group ${program.hoverBg}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
                >
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3 font-serif">
                  {program.title}
                </h3>
                <p className="text-deep-gray mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Link href={program.link}>
                  <Button
                    className={`text-white ${program.bgGradient} hover:opacity-90 flex items-center font-medium px-5 py-2 rounded-lg shadow-lg shadow-${program.iconColor}/20`}
                  >
                    Learn More{" "}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            ))}
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
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-3 border border-indigo-200"
            >
              <span className="flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Common Questions
              </span>
            </motion.span>
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-charcoal mb-4 font-serif"
            >
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Questions
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-deep-gray/80 max-w-3xl mx-auto"
            >
              Find answers to common questions about our admissions process
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What are the eligibility criteria for admission?",
                answer:
                  "Eligibility varies by program. For polytechnic courses, students must have completed 10th standard with mathematics and science. For the Officer Academy, physical fitness requirements apply along with academic criteria.",
              },
              {
                question: "Are scholarships available for students?",
                answer:
                  "Yes, we offer merit-based and need-based scholarships. Outstanding students may qualify for up to 50% tuition waiver based on entrance exam performance and previous academic records.",
              },
              {
                question: "What documents are required for application?",
                answer:
                  "Required documents include completed application form, recent passport-size photographs, previous academic mark sheets/certificates, ID proof, address proof, and program-specific requirements.",
              },
              {
                question: "Can international students apply?",
                answer:
                  "Yes, we welcome international students. Additional documentation including passport, visa details, and education equivalency certificates will be required.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("up", "tween", 0.2 + i * 0.1, 0.8)}
                className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-200 hover:border-indigo-200"
              >
                <h3 className="text-xl font-semibold text-indigo-900 mb-3 font-serif">
                  {faq.question}
                </h3>
                <p className="text-deep-gray/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

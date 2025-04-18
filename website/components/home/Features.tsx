"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Shield,
  Users
} from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const features = [
  {
    icon: GraduationCap,
    title: "Technical Excellence",
    description:
      "AICTE-approved polytechnic programs with industry-ready curriculum and practical training.",
    color: "from-blue-600 to-indigo-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50",
    borderHover: "group-hover:border-blue-200",
    highlight: "AICTE Approved",
  },
  {
    icon: Shield,
    title: "Defense Training",
    description:
      "Specialized coaching and physical training for students aiming for careers in defense services.",
    color: "from-purple-600 to-indigo-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50",
    borderHover: "group-hover:border-purple-200",
    highlight: "Specialized Training",
  },
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Board of Technical Education (Rajasthan) affiliated programs with focus on academic rigor.",
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50",
    borderHover: "group-hover:border-amber-200",
    highlight: "Government Affiliated",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Experienced educators and industry professionals dedicated to student success.",
    color: "from-rose-500 to-pink-500",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-rose-50 hover:to-pink-50",
    borderHover: "group-hover:border-rose-200",
    highlight: "Industry Experts",
  },
  {
    icon: Award,
    title: "Modern Facilities",
    description:
      "State-of-the-art infrastructure including labs, sports facilities, and residential accommodations.",
    color: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50",
    borderHover: "group-hover:border-emerald-200",
    highlight: "Tech-Enabled",
  },
  {
    icon: Globe,
    title: "Career Development",
    description:
      "Placement assistance, career counseling, and industry connections for all students.",
    color: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    hoverGradient:
      "hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50",
    borderHover: "group-hover:border-cyan-200",
    highlight: "96% Placement",
  },
];

export function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create parallax effects for background elements
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/50" />

      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-500/10 blur-3xl"
        style={{ y: backgroundY1 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 translate-y-1/3 -translate-x-1/3 rounded-full bg-gradient-to-br from-purple-400/10 to-indigo-500/10 blur-3xl"
        style={{ y: backgroundY2 }}
      />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-amber-400/5 to-orange-500/5 blur-3xl" />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 6 === 0
                ? "bg-blue-400"
                : i % 6 === 1
                ? "bg-purple-400"
                : i % 6 === 2
                ? "bg-amber-400"
                : i % 6 === 3
                ? "bg-rose-400"
                : i % 6 === 4
                ? "bg-emerald-400"
                : "bg-cyan-400"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
              boxShadow: `0 0 8px 2px ${
                i % 6 === 0
                  ? "rgba(59, 130, 246, 0.3)"
                  : i % 6 === 1
                  ? "rgba(139, 92, 246, 0.3)"
                  : i % 6 === 2
                  ? "rgba(251, 191, 36, 0.3)"
                  : i % 6 === 3
                  ? "rgba(244, 63, 94, 0.3)"
                  : i % 6 === 4
                  ? "rgba(16, 185, 129, 0.3)"
                  : "rgba(6, 182, 212, 0.3)"
              }`,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 30)],
              x: [
                0,
                (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 15),
              ],
              scale: [1, 1.2, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-[20%] w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          {/* Animated tagline */}
          <div className="inline-block mb-4 relative">
            <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white font-medium">
                <Award className="h-4 w-4 animate-pulse" />
                <span>Discover Our Excellence</span>
              </div>
            </div>
            {/* Subtle glowing effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-30 blur-sm"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 animate-gradient-x">
              Why Choose Our Institutions
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </h2>

          <p className="text-xl text-charcoal/90 max-w-3xl mx-auto mt-6">
            Since 2011, we&apos;ve been committed to providing exceptional
            educational experiences that prepare students for success in an
            ever-changing world.
          </p>
        </motion.div>

        {/* Enhanced grid with gradient borders and animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

              <div
                className={`relative bg-white rounded-lg p-8 shadow-lg h-full border border-gray-100 ${feature.borderHover} transition-all duration-300 ${feature.hoverGradient}`}
              >
                <div className="flex items-start space-x-5">
                  <div
                    className={`flex-shrink-0 ${feature.iconBg} rounded-lg p-3 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-charcoal font-serif group-hover:text-indigo-700 transition-colors">
                        {feature.title}
                      </h3>
                      <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 font-semibold">
                        {feature.highlight}
                      </div>
                    </div>

                    <p className="text-deep-gray">{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Learn More About Our Programs</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </Link>
        </motion.div>
      </div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </section>
  );
}

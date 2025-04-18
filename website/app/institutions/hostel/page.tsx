"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Coffee,
  Home,
  ShieldCheck,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HostelPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/images/more_images/83afd1_bac3206c269b406a97df5f78340a78b6~mv2.jpeg"
            alt="Kaptan Girls Hostel"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-indigo-900/85 to-indigo-950/90 mix-blend-multiply" />
        </motion.div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl" />

          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${
                i % 4 === 0
                  ? "bg-blue-400/70"
                  : i % 4 === 1
                  ? "bg-purple-400/70"
                  : i % 4 === 2
                  ? "bg-indigo-400/70"
                  : "bg-sky-400/70"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5,
              }}
              animate={{
                y: [0, -(15 + Math.random() * 20)],
                x: [
                  0,
                  (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 10),
                ],
                scale: [1, 1.1, 0],
                opacity: [0, 0.5, 0],
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

        {/* Centered Content */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          style={{ y: titleY, opacity: opacityTitle }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-5">
              <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-lg">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Link
                    href="/"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Home
                  </Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <Link
                    href="/institutions"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Institutions
                  </Link>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <span>Girls Hostel</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Kaptan
                <span className="relative ml-2">
                  <span className="relative z-10">Girls</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Hostel</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              A safe, comfortable and nurturing residential facility for female
              students
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="#amenities"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Amenities
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Facts */}
      <section className="py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-indigo-600">
                  {fact.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Hostel */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">
                About Our Hostel
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A Home Away From Home
              </h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/girls-hostel/1.jpg"
                  alt="Kaptan Girls Hostel"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                <div className="text-center">
                  <div className="text-3xl">24/7</div>
                  <div className="text-xs uppercase tracking-wider">
                    Security & Support
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Safe and Supportive Environment
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kaptan Girls Hostel, operated by the Dildhani Education Group,
                provides a secure, comfortable, and nurturing residential
                facility exclusively for female students pursuing education at
                our various institutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our hostel is designed to create a supportive environment where
                students can focus on their academic pursuits while enjoying the
                comfort of a well-maintained living space with all necessary
                amenities and security measures.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">
                      24/7 Security
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      CCTV surveillance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">
                      Dedicated Staff
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Round-the-clock support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">
                Hostel Amenities
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Modern Facilities
              </h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <amenity.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Book Your Accommodation Today
              </h2>
              <p className="text-blue-100 mb-8">
                Limited seats available. Secure your place in our comfortable
                and safe hostel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="px-8 py-3.5 bg-white text-indigo-700 font-medium rounded-md hover:shadow-lg transition-all duration-300"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-indigo-800/30 backdrop-blur-sm text-white font-medium rounded-md border border-white/10 hover:bg-indigo-800/50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const facts = [
  { value: "150+", label: "Room Capacity" },
  { value: "24/7", label: "Security" },
  { value: "3", label: "Meals Daily" },
  { value: "100%", label: "Student Satisfaction" },
];

const amenities = [
  {
    title: "Clean Accommodation",
    description:
      "Well-maintained, hygienic rooms with regular cleaning services.",
    icon: Home,
  },
  {
    title: "Nutritious Meals",
    description:
      "Three balanced, healthy meals prepared daily in our clean kitchen.",
    icon: Utensils,
  },
  {
    title: "Wi-Fi Connectivity",
    description: "High-speed internet access throughout the hostel premises.",
    icon: Wifi,
  },
  {
    title: "Study Areas",
    description:
      "Dedicated quiet spaces for focused academic work and group studies.",
    icon: BookOpen,
  },
  {
    title: "Recreation Room",
    description: "Common area with indoor games and entertainment facilities.",
    icon: Coffee,
  },
  {
    title: "24/7 Security",
    description:
      "Round-the-clock security with CCTV surveillance and controlled access.",
    icon: ShieldCheck,
  },
];

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  Clock,
  Flame,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function DefenceAcademyPage() {
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
            src="/images/institutions/kaptan-officer-academy.jpg"
            alt="Kaptan Officer Academy"
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
                  <span>Defence Academy</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Kaptan
                <span className="relative ml-2">
                  <span className="relative z-10">Officer</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Academy</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Transforming aspirants into dedicated officers for defence and
              civil services
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Programs
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

      {/* About the Academy */}
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
                About Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Excellence in Defence Training
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
                  src="/images/defence-academy/2nd_hero.jpg"
                  alt="Kaptan Officer Academy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                <div className="text-center">
                  <div className="text-3xl">95%</div>
                  <div className="text-xs uppercase tracking-wider">
                    Success Rate
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
                Building Leaders for Tomorrow
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kaptan Officer Academy, a premier institution under the Dildhani
                Education Group, is committed to preparing candidates for
                various defence and civil services examinations. Our
                comprehensive training programs are designed to nurture
                disciplined, dedicated, and skilled individuals ready to serve
                the nation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With experienced faculty comprising ex-defence personnel and
                civil service officers, we provide unparalleled guidance and
                mentorship to help our students achieve their goals.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">
                      Expert Mentors
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Ex-defence personnel
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium text-gray-900">
                      Focused Training
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Exam-oriented approach
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">
                Our Programs
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Preparation Courses
              </h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {program.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{program.duration}</span>
                    </div>
                    <Link
                      href="#contact"
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">
                Our Approach
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Comprehensive Training
              </h3>
              <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
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
                Ready to Serve the Nation?
              </h2>
              <p className="text-blue-100 mb-8">
                Join Kaptan Officer Academy and embark on a journey to become a
                defence officer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="px-8 py-3.5 bg-white text-indigo-700 font-medium rounded-md hover:shadow-lg transition-all duration-300"
                >
                  Enroll Now
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
const programs = [
  {
    title: "NDA Preparation",
    description:
      "Comprehensive training program for National Defence Academy entrance examination.",
    image: "/images/defence-academy/NDA.jpg",
    duration: "6-12 Months",
    tags: ["Written Exam", "SSB Interview", "Physical Training"],
  },
  {
    title: "CDS Preparation",
    description:
      "Specialized coaching for Combined Defence Services examination for joining Army, Navy, and Air Force.",
    image: "/images/defence-academy/CDS.webp",
    duration: "4-8 Months",
    tags: ["English", "Mathematics", "General Knowledge"],
  },
  {
    title: "SSC Preparation",
    description:
      "Focused coaching for Staff Selection Commission examinations for various government positions.",
    image: "/images/defence-academy/SSC.webp",
    duration: "6 Months",
    tags: ["Reasoning", "General Awareness", "Quantitative Aptitude"],
  },
];

const features = [
  {
    title: "Physical Training",
    description:
      "Rigorous physical conditioning to meet the fitness requirements of defence services.",
    icon: Flame,
  },
  {
    title: "Mock Tests",
    description:
      "Regular practice tests modeled on actual exams to assess preparation level.",
    icon: Target,
  },
  {
    title: "Personality Development",
    description:
      "Training to enhance communication skills, leadership qualities, and confidence.",
    icon: TrendingUp,
  },
  {
    title: "Interview Preparation",
    description:
      "Extensive coaching for SSB and other interview processes with mock sessions.",
    icon: Users,
  },
];

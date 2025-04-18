"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Brain,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  Medal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const programs = [
  {
    title: "Polytechnic Diploma Programs",
    description: "AICTE approved diploma courses in engineering and technology",
    icon: GraduationCap,
    courses: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Computer Science",
      "Electrical Engineering",
    ],
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/30",
  },
  {
    title: "Vocational Training",
    description: "Practical skills development programs for career readiness",
    icon: Medal,
    courses: [
      "Industrial Training",
      "Computer Applications",
      "Automotive Skills",
      "Electrical Wiring",
    ],
    color: "from-purple-500 to-indigo-600",
    shadowColor: "shadow-purple-500/30",
  },
  {
    title: "School Education",
    description: "Quality K-12 education with a focus on holistic development",
    icon: BookOpen,
    courses: ["Primary Education", "Secondary Education", "Senior Secondary"],
    color: "from-teal-500 to-emerald-600",
    shadowColor: "shadow-teal-500/30",
  },
  {
    title: "Preparatory Programs",
    description:
      "Specialized coaching for competitive exams and career advancement",
    icon: ClipboardList,
    courses: [
      "Defense Services",
      "Banking & SSC",
      "Engineering Entrance",
      "Civil Services",
    ],
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/30",
  },
];

export default function AcademicsPage() {
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
        className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/images/academics.jpg"
            alt="Dildhani Education Group - Academic Excellence"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-indigo-900/85 to-indigo-950/90 mix-blend-multiply" />
        </motion.div>

        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl" />
        </div>

        {/* Content */}
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
                  <span>Academics</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              <span className="inline-block relative">
                Academic
                <span className="relative ml-2">
                  <span className="relative z-10">Excellence</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-10 rounded"
                  />
                </span>
              </span>
              <span className="block mt-2">Shaping Future Leaders</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mt-6 leading-relaxed font-light">
              Comprehensive educational programs designed to inspire and prepare
              students for success.
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
                Explore Our Programs
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

      {/* Academic Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  Our Approach
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block tracking-tight">
                <span>Academic Philosophy</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Dildhani Education Group, we believe in a holistic approach
                  to education that balances academic rigor with practical
                  skills development. Our educational philosophy is built on the
                  foundation of preparing students not just for examinations,
                  but for life-long success.
                </p>
                <p>
                  We emphasize critical thinking, problem-solving, and
                  innovation across all our academic programs. Our curriculum is
                  designed to be comprehensive yet flexible, allowing students
                  to pursue their interests while building a strong foundation
                  in core subjects.
                </p>
                <p>
                  With smaller class sizes and personalized attention, we ensure
                  that each student receives the guidance they need to excel
                  academically and grow personally. Our faculty members are
                  dedicated to identifying and nurturing the unique potential of
                  every student.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Student-Teacher Ratio", value: "12:1" },
                  { label: "Avg. Class Size", value: "25" },
                  { label: "Academic Faculty", value: "120+" },
                  { label: "Pass Rate", value: "98%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  >
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-indigo-700">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="p-1 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl relative">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="aspect-w-4 aspect-h-3 relative h-[500px]">
                    <Image
                      src="/images/academics/1.png"
                      alt="Modern classroom at Dildhani Education Group"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <p className="text-xl font-bold">
                        Modern Learning Environments
                      </p>
                      <p className="text-blue-100">
                        Technology-integrated classrooms
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-blue-100/80 z-[-1]"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-indigo-100/80 z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-70"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                Academic Programs
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Our Educational Offerings
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to meet the diverse educational
              needs of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div
                  className={`p-6 bg-gradient-to-br ${program.color} text-white`}
                >
                  <div className="flex items-center">
                    <div
                      className={`h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4 ${program.shadowColor}`}
                    >
                      <program.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{program.title}</h3>
                  </div>
                  <p className="mt-2 text-white/90 text-sm">
                    {program.description}
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {program.courses.map((course) => (
                      <li key={course} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-indigo-500 shrink-0 mr-2" />
                        <span className="text-gray-700">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-70"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                Our Faculty
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                Academic Faculty
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our distinguished faculty brings decades of experience and
              expertise to create an enriching educational environment.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-indigo-600" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Dildhani Education Group, our faculty members are experts in
                their respective fields with extensive academic and industry
                experience. Our teachers are committed to delivering quality
                education using innovative teaching methodologies and providing
                personalized attention to each student.
              </p>
              <div className="mt-6 text-center">
                <Link
                  href="/Staff_List_Dildhani_Group_of_Institutes (1).pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-full hover:from-indigo-700 hover:to-indigo-800 transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  View Faculty List
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="inline-block mb-4">
                <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  Resources
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block tracking-tight">
                <span>Learning Infrastructure</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We provide comprehensive learning resources and modern
                  infrastructure to support academic excellence. Our campus
                  features state-of-the-art facilities that enhance the learning
                  experience and prepare students for future challenges.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Well-Equipped Libraries",
                    description:
                      "Extensive collection of books, journals, and digital resources across subjects",
                    icon: BookOpen,
                  },
                  {
                    title: "Advanced Laboratories",
                    description:
                      "Modern labs with the latest equipment for practical learning and research",
                    icon: Brain,
                  },
                  {
                    title: "Digital Learning Centers",
                    description:
                      "Computer labs with high-speed internet and specialized software applications",
                    icon: FileText,
                  },
                  {
                    title: "Smart Classrooms",
                    description:
                      "Technology-integrated learning spaces with audio-visual facilities",
                    icon: GraduationCap,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex bg-gray-50 p-4 rounded-lg border border-gray-100"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-6 md:p-8 rounded-2xl shadow-xl text-white h-full">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Modern Campus</h3>
                  <p className="text-blue-50">
                    Our infrastructure is designed to create an immersive
                    learning experience for students of all ages.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "State-of-the-art classrooms with interactive technology",
                    "Well-stocked libraries with research resources",
                    "Computer labs with latest hardware and software",
                    "Science laboratories with modern equipment",
                    "Sports facilities for physical development",
                    "Dedicated spaces for extracurricular activities",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-blue-50">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Facilities Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                Our Facilities
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="relative inline-block">
                State-of-the-Art School Facilities
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Our campuses are equipped with modern facilities to provide an optimal learning environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-12 h-80 w-full">
                  <Image
                    src="/images/adarshschool/junior_school.jpg"
                    alt="Junior School Building"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Junior School</h3>
                    <p className="text-gray-200">Nurturing early childhood development in a supportive environment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-12 h-80 w-full">
                  <Image
                    src="/images/adarshschool/middle_school.webp"
                    alt="Middle School Building"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Middle School</h3>
                    <p className="text-gray-200">Building critical thinking skills in a collaborative setting</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-12 h-80 w-full">
                  <Image
                    src="/images/adarshschool/high_school.jpg"
                    alt="High School Building"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">High School</h3>
                    <p className="text-gray-200">Preparing students for higher education and career readiness</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 relative overflow-hidden rounded-xl shadow-lg group"
          >
            <div className="aspect-w-21 aspect-h-9 h-96 w-full">
              <Image
                src="/images/adarshschool/2nd_hero.webp"
                alt="Adarsh School Campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent flex items-center">
              <div className="p-10 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Campus Excellence</h3>
                <p className="text-gray-200 mb-6">Our modern campus provides an inspiring environment for academic achievement and holistic development with comprehensive facilities that support various educational activities.</p>
                <Link
                  href="/institutions/school"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-medium rounded-full hover:bg-blue-50 transition-colors group-hover:bg-indigo-50"
                >
                  Explore Our School
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Begin Your Academic Journey?
              </h2>
              <p className="text-lg text-blue-100 mb-10">
                Take the first step towards educational excellence with Dildhani
                Education Group.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/admissions"
                  className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
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

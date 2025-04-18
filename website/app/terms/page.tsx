"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FileText, Scale, Clock, AlertCircle, CheckCircle, FileCheck, Users, MessageSquare } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="overflow-hidden">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
          <Image
            src="/images/more_images/83afd1_d8295c77a1c3423e881f3dd0c2c7a9da~mv2_1.jpeg"
            alt="Terms of Service"
            className="object-cover scale-105 filter brightness-50"
            fill
            priority
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <Scale className="h-8 w-8 text-blue-300 mr-2" />
              <span className="text-sm text-blue-300 uppercase tracking-wider font-semibold">Legal Agreement</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">
              Terms of Service
            </h1>
            
            <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              The terms and conditions governing your use of Dildhani Education Group services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-blue-50 p-6 rounded-xl mb-10 border-l-4 border-blue-500"
            >
              <p className="text-blue-900 font-medium">
                Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
              <p className="text-blue-700">
                Please read these Terms of Service ("Terms") carefully before using the website or services offered by Dildhani Education Group. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-2" />
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Dildhani Education Group website, enrolling in our educational programs, or utilizing any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                Educational Services
              </h2>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Enrollment and Admission:</strong> Enrollment in our educational programs is subject to meeting admission requirements, availability of seats, and payment of applicable fees. We reserve the right to accept or reject applications based on our admission criteria.</li>
                <li><strong>Academic Calendar:</strong> We follow the academic calendar published on our website or communicated to students. We reserve the right to modify the calendar due to unforeseen circumstances.</li>
                <li><strong>Curriculum:</strong> We strive to provide up-to-date and relevant curriculum; however, we reserve the right to modify course content, structure, or faculty to maintain educational quality.</li>
                <li><strong>Attendance:</strong> Students are expected to maintain the required attendance as specified in the program guidelines. Failure to meet attendance requirements may result in ineligibility for examinations or program completion.</li>
                <li><strong>Assessment and Evaluation:</strong> Students will be evaluated based on the assessment methods specified for each program. The decision of the institution regarding evaluation and results shall be final.</li>
              </ol>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                User Conduct
              </h2>
              <p>
                As a user of our services or a student at our institution, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and complete information during the registration or admission process</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Refrain from using our services for any illegal, harmful, or unauthorized purposes</li>
                <li>Not engage in any activity that disrupts or interferes with our services</li>
                <li>Respect the intellectual property rights of our institution and others</li>
                <li>Adhere to the code of conduct established by the institution</li>
                <li>Not engage in plagiarism, cheating, or any form of academic dishonesty</li>
                <li>Treat faculty, staff, and fellow students with respect and dignity</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <FileCheck className="w-6 h-6 text-blue-600 mr-2" />
                Fees and Payments
              </h2>
              <p>
                By enrolling in our programs, you agree to the following:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pay all applicable fees as specified in the fee structure for your program</li>
                <li>Adhere to the payment schedule established by the institution</li>
                <li>Late payments may incur additional charges as determined by the institution</li>
                <li>Fees once paid are non-refundable except as specified in our refund policy</li>
                <li>The institution reserves the right to revise the fee structure for subsequent academic sessions</li>
                <li>Non-payment of fees may result in suspension of services or termination of enrollment</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                Refund Policy
              </h2>
              <p>
                Our refund policy is as follows:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Registration and admission fees are non-refundable under any circumstances</li>
                <li>Tuition fee refunds are processed only in accordance with the refund schedule published by the institution</li>
                <li>Refund requests must be submitted in writing using the prescribed form</li>
                <li>The amount and eligibility for refund depends on the timing of withdrawal from the program</li>
                <li>Processing of refunds may take up to 30 working days from the date of approved request</li>
                <li>Refunds are made using the same mode of payment used for the initial transaction unless otherwise specified</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
                Communication
              </h2>
              <p>
                By using our services, you consent to receive communications from us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Email notifications regarding your account, enrollment, or academic status</li>
                <li>SMS alerts for important announcements or deadlines</li>
                <li>Administrative communications related to your program</li>
                <li>Educational materials and resources</li>
                <li>Feedback requests regarding our services</li>
              </ul>
              <p>
                You may opt out of non-essential communications by following the unsubscribe instructions provided in our communications or by contacting our administrative office.
              </p>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Dildhani Education Group shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Any indirect, incidental, special, or consequential damages arising from your use of our services</li>
                <li>Any loss of data, opportunity, profits, or revenue resulting from the use of our services</li>
                <li>Any failure or delay in providing services due to factors beyond our reasonable control</li>
                <li>The content of external websites linked from our platform</li>
                <li>Personal injuries or property damage resulting from your participation in any activities organized by the institution</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <Scale className="w-6 h-6 text-blue-600 mr-2" />
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Makrana, Rajasthan, India.
              </p>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mt-8 mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-2" />
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the revised Terms.
              </p>
            </motion.div>
          </div>
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Questions About Our Terms?</h2>
            <p className="mb-6">
              If you have any questions or concerns regarding these Terms of Service, please contact us at:
            </p>
            <div className="space-y-2 mb-6">
              <p><strong>Dildhani Education Group</strong></p>
              <p>Legal Department</p>
              <p>Makrana, Rajasthan, India</p>
              <p>Email: <a href="mailto:info.bite11@gmail.com" className="text-blue-600 hover:text-blue-800">info.bite11@gmail.com</a></p>
              <p>Phone: <a href="tel:+918290356671" className="text-blue-600 hover:text-blue-800">+91 8290356671</a></p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy-policy" 
                className="px-4 py-2 bg-white text-blue-700 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 
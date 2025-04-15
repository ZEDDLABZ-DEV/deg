"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Shield, Eye, Lock, FileText, RefreshCw, UserCheck, ShieldCheck, ShieldAlert } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-700 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
          <Image
            src="/images/more_images/83afd1_0cfc464d5171461faea0ecd7962405d7~mv2_1.jpeg"
            alt="Privacy Policy"
            className="object-cover scale-105 filter brightness-50"
            fill
            priority
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-purple-300 mr-2" />
              <span className="text-sm text-purple-300 uppercase tracking-wider font-semibold">Security & Privacy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              How we collect, use, and protect your personal information at Dildhani Education Group
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-indigo-50 p-6 rounded-xl mb-10 border-l-4 border-indigo-500"
            >
              <p className="text-indigo-900 font-medium">
                Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
              <p className="text-indigo-700">
                This Privacy Policy outlines how Dildhani Education Group ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website, use our services, or interact with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Eye className="w-6 h-6 text-indigo-600 mr-2" />
                Information We Collect
              </h2>
              <p>
                We collect various types of information to provide and improve our services to you. This may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address, date of birth, and government-issued identification details when you apply for admission or register for our services.</li>
                <li><strong>Educational Information:</strong> Academic records, transcripts, test scores, and educational history.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, pages visited, and time spent on our website.</li>
                <li><strong>Communications:</strong> Records of your correspondence with us, including emails, phone calls, and feedback forms.</li>
                <li><strong>Payment Information:</strong> Bank account details, credit card information, and transaction history for fee payments and other financial transactions.</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <FileText className="w-6 h-6 text-indigo-600 mr-2" />
                How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To process applications and enrollments</li>
                <li>To deliver educational services and support</li>
                <li>To communicate important announcements and updates</li>
                <li>To process payments and maintain financial records</li>
                <li>To analyze and improve our website and services</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send promotional material about our programs and events (with your consent)</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <Lock className="w-6 h-6 text-indigo-600 mr-2" />
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection and security practices</li>
                <li>Secure network infrastructure and firewalls</li>
              </ul>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <UserCheck className="w-6 h-6 text-indigo-600 mr-2" />
                Sharing Your Information
              </h2>
              <p>
                We may share your personal information with the following third parties:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Educational Authorities:</strong> Regulatory bodies, examination boards, and government education departments as required by law.</li>
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website, process payments, or provide other services.</li>
                <li><strong>Partner Institutions:</strong> Educational partners for collaborative programs or credit transfer purposes (with your consent).</li>
                <li><strong>Legal Authorities:</strong> Law enforcement agencies or courts in response to legal processes or obligations.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes without your explicit consent.
              </p>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <RefreshCw className="w-6 h-6 text-indigo-600 mr-2" />
                Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Academic records may be retained permanently for transcript and verification purposes.
              </p>
              
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <ShieldCheck className="w-6 h-6 text-indigo-600 mr-2" />
                Your Rights
              </h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details provided at the end of this policy.
              </p>

              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <ShieldAlert className="w-6 h-6 text-indigo-600 mr-2" />
                Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date.
              </p>
            </motion.div>
          </div>
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-indigo-50 rounded-xl p-8 border border-indigo-100"
          >
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="space-y-2 mb-6">
              <p><strong>Dildhani Education Group</strong></p>
              <p>Privacy Office</p>
              <p>Makrana, Rajasthan, India</p>
              <p>Email: <a href="mailto:privacy@dildhanieducationgroup.com" className="text-indigo-600 hover:text-indigo-800">privacy@dildhanieducationgroup.com</a></p>
              <p>Phone: <a href="tel:+918290356671" className="text-indigo-600 hover:text-indigo-800">+91 82903 56671</a></p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/terms" 
                className="px-4 py-2 bg-white text-indigo-700 border border-indigo-200 rounded-md hover:bg-indigo-50 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 
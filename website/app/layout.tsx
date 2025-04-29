import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dildhanieducationgroupmakrana.com'),
  title: "Dildhani Education Group - Premier Educational Institutions in India",
  description: "A premier group of educational institutions in India committed to excellence in education with a focus on holistic development and academic achievement.",
  keywords: "education, schools, colleges, Dildhani, India education, academic excellence, Makrana",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  applicationName: "Dildhani Education Group",
  authors: [{ name: "Dildhani Education Group" }],
  generator: "Next.js",
  openGraph: {
    title: "Dildhani Education Group - Premier Educational Institutions",
    description: "A premier group of educational institutions committed to excellence in education",
    url: "https://dildhanieducationgroupmakrana.com",
    siteName: "Dildhani Education Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dildhani Education Group Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dildhani Education Group - Premier Educational Institutions",
    description: "A premier group of educational institutions committed to excellence in education",
    images: ["/images/og-image.jpg"],
    creator: "@DildhaniEdu",
    site: "@DildhaniEdu",
  },
  alternates: {
    canonical: "https://dildhanieducationgroupmakrana.com",
    languages: {
      'en-US': 'https://dildhanieducationgroupmakrana.com/en-US',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dildhanieducationgroupmakrana.com" />
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Dildhani Education Group",
              "url": "https://dildhanieducationgroupmakrana.com",
              "logo": "https://dildhanieducationgroupmakrana.com/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/DildhaniEducationGroup",
                "https://twitter.com/DildhaniEdu",
                "https://www.instagram.com/dildhanigroup/"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Railway Bridge, Mangalana Road, Dildhani",
                "addressLocality": "Makrana",
                "addressRegion": "Rajasthan",
                "postalCode": "341505",
                "addressCountry": "India"
              },
              "telephone": "+918290356671",
              "email": "info.bite11@gmail.com",
              "description": "A premier group of educational institutions in India committed to excellence in education with a focus on holistic development and academic achievement."
            }
          `}
        </Script>
        {/* Image optimization: preconnect to domains */}
        <link rel="preconnect" href="https://dildhanieducationgroupmakrana.com" />
        <link rel="dns-prefetch" href="https://dildhanieducationgroupmakrana.com" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <Toaster richColors />
          <WhatsAppButton phoneNumber="918290356671" />
        </Providers>
      </body>
    </html>
  );
}

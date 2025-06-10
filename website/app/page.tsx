"use client"

import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { Schools } from "@/components/home/Schools"
import { Showcase } from "@/components/home/Showcase"
import { Testimonials } from "@/components/home/Testimonials"
import { Stats } from "@/components/home/Stats"
import { CTA } from "@/components/home/CTA"
import { Announcement } from "@/components/home/Announcement"
import { Infrastructure } from "@/components/home/Infrastructure"
import { AdmissionForm } from "@/components/home/AdmissionForm"
import { useEffect, useState } from "react"

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem("admissionFormDismissed")) {
      setShowModal(true)
    }
  }, [])

  const handleClose = () => {
    setShowModal(false)
    sessionStorage.setItem("admissionFormDismissed", "true")
  }

  return (
    <>
      <AdmissionForm open={showModal} onClose={handleClose} />
      <Hero />
      <Announcement />
      <Features />
      <Stats />
      <Schools />
      <Infrastructure />
      <Showcase />
      <Testimonials />
      <CTA />
    </>
  )
}

import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { Schools } from "@/components/home/Schools"
import { Showcase } from "@/components/home/Showcase"
import { Testimonials } from "@/components/home/Testimonials"
import { Stats } from "@/components/home/Stats"
import { CTA } from "@/components/home/CTA"
import { Announcement } from "@/components/home/Announcement"

export default function Home() {
  return (
    <>
      <Hero />
      <Announcement />
      <Features />
      <Stats />
      <Schools />
      <Showcase />
      <Testimonials />
      <CTA />
    </>
  )
}

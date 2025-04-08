import { Hero } from "./components/home/Hero"
import { Features } from "./components/home/Features"
import { Schools } from "./components/home/Schools"
import { Testimonials } from "./components/home/Testimonials"
import { CTA } from "./components/home/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Schools />
      <Testimonials />
      <CTA />
    </>
  )
}

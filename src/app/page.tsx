'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ChatBot from '@/components/ChatBot'
import ScrollProgress from '@/components/ScrollProgress'
import Marquee from '@/components/Marquee'

const ToothScene = dynamic(() => import('@/components/ToothScene'), {
  ssr: false,
})

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer for section reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('.section-reveal')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main ref={mainRef} className="relative">
      <ScrollProgress />
      <Navbar />
      <ToothScene />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
      <ChatBot />
    </main>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ChatBot from '@/components/ChatBot'
import ScrollProgress from '@/components/ScrollProgress'

const ToothScene = dynamic(() => import('@/components/ToothScene'), { ssr: false })

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative bg-white">
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

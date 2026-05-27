'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 600)
      contentRef.current.style.opacity = String(opacity)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <div ref={contentRef} className="text-center relative z-10 px-6 w-full max-w-site mx-auto">
        {/* Main brand text - EXACTLY like Six B: huge, Figtree 300, dark grey */}
        {/* "Den" + [space for 3D tooth] + "z" */}
        <h1
          className="font-figtree font-light leading-none tracking-tight select-none"
          style={{
            fontSize: 'clamp(80px, 12vw, 160px)',
            color: '#333c4c',
          }}
        >
          <span>Den</span>
          {/* Gap where 3D tooth sits - sized proportionally */}
          <span className="inline-block" style={{ width: 'clamp(60px, 9vw, 140px)' }}></span>
          <span className="text-[#8594ae]">z</span>
        </h1>

        {/* Subtitle - below the brand, matching Six B's descriptive subtitle */}
        <p
          className="font-inter mt-10 max-w-[540px] mx-auto leading-relaxed"
          style={{
            fontSize: '18px',
            lineHeight: '27px',
            color: '#606979',
            fontWeight: 400,
          }}
        >
          Our entire team will bring their benevolence and expertise so that your
          smile regains beauty and whiteness, bringing you well-being and happiness
          through a healthy mouth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="#contact" className="btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn-outline">
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

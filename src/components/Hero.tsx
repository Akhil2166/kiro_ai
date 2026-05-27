'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 600)
      const translateY = scrollY * 0.3
      textRef.current.style.opacity = String(opacity)
      textRef.current.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-[2]"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div ref={textRef} className="text-center relative z-10 px-6">
        {/* Small tagline above */}
        <p className="text-sm md:text-base font-medium text-accent mb-6 tracking-[0.3em] uppercase opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">
          Premium Dental Care
        </p>

        {/* Main title - Den(tooth)z like Six()B */}
        <h1 className="font-display text-[80px] md:text-[140px] lg:text-[180px] font-bold leading-[0.85] tracking-tight mb-8 opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
          <span className="text-white">Den</span>
          <span className="inline-block w-[80px] md:w-[140px] lg:w-[180px]"></span>
          <span className="text-accent">z</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto mb-10 font-light opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
          Where innovation meets compassion.<br />
          Your smile deserves the finest care.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
          <a
            href="#contact"
            className="magnetic-btn px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 text-base"
          >
            Book Your Visit
          </a>
          <a
            href="#services"
            className="magnetic-btn px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-base"
          >
            Our Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeInUp_0.8s_1s_forwards]">
          <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent animate-bounce-slow" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

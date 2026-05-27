'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Subtle parallax on mouse move for the entire hero
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 8
      const y = (clientY / innerHeight - 0.5) * 4
      const texts = heroRef.current.querySelectorAll('.parallax-text')
      texts.forEach((el) => {
        const htmlEl = el as HTMLElement
        htmlEl.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Radial glow behind tooth area */}
      <div className="tooth-glow" />

      {/* Main composition container */}
      <div className="relative z-10 w-full max-w-site mx-auto px-8 md:px-16">
        {/* Typography composition: DEN [tooth space] Z */}
        <div className="flex items-center justify-center select-none">
          {/* DEN - left aligned, ultra bold */}
          <span
            className="parallax-text font-display text-warm-black transition-transform duration-1500 ease-cinematic"
            style={{
              fontSize: 'clamp(90px, 13vw, 200px)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}
          >
            DEN
          </span>

          {/* Gap for 3D tooth — proportional to font size */}
          <span
            className="inline-block relative"
            style={{ width: 'clamp(70px, 10vw, 160px)' }}
          >
            {/* This space is where the 3D tooth canvas renders (fixed overlay) */}
          </span>

          {/* Z - right aligned, ultra bold */}
          <span
            className="parallax-text font-display text-warm-black transition-transform duration-1500 ease-cinematic"
            style={{
              fontSize: 'clamp(90px, 13vw, 200px)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}
          >
            Z
          </span>
        </div>

        {/* Subtitle - editorial luxury tone */}
        <p
          className="parallax-text font-body text-muted text-center mt-12 md:mt-16 max-w-[420px] mx-auto transition-transform duration-2000 ease-cinematic"
          style={{
            fontSize: '16px',
            lineHeight: '26px',
            letterSpacing: '0.02em',
          }}
        >
          Where precision meets artistry. Premium dental care
          crafted for those who demand excellence.
        </p>

        {/* Minimal CTA — understated, luxury */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="font-body text-[13px] tracking-[0.08em] uppercase text-muted border-b border-border pb-1 hover:text-warm-black hover:border-warm-black transition-all duration-700 ease-luxury"
          >
            Book a consultation
          </a>
        </div>
      </div>

      {/* Bottom caption - editorial detail */}
      <div className="absolute bottom-10 left-8 md:left-16">
        <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted/60">
          Luxury Dental Care
        </p>
      </div>

      <div className="absolute bottom-10 right-8 md:right-16">
        <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted/60">
          Bangalore, India
        </p>
      </div>
    </section>
  )
}

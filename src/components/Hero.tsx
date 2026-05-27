'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<{ el: HTMLElement; speed: number }[]>([])
  const [stickyOpacity, setStickyOpacity] = useState(1)

  useEffect(() => {
    if (!heroRef.current) return
    const layers: { el: HTMLElement; speed: number }[] = []
    heroRef.current.querySelectorAll('[data-parallax]').forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.parallax || '0')
      layers.push({ el: el as HTMLElement, speed })
    })
    layersRef.current = layers

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.02)
      currentY = lerp(currentY, mouseY, 0.02)

      layersRef.current.forEach(({ el, speed }) => {
        const x = currentX * speed * 12
        const y = currentY * speed * 8
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove)

    // Scroll-based opacity fade on sticky content
    const handleScroll = () => {
      if (!heroRef.current) return
      const sectionHeight = heroRef.current.offsetHeight
      const scrolled = window.scrollY
      const fadeStart = sectionHeight * 0.6
      const fadeEnd = sectionHeight * 0.9

      if (scrolled <= fadeStart) {
        setStickyOpacity(1)
      } else if (scrolled >= fadeEnd) {
        setStickyOpacity(0)
      } else {
        const progress = (scrolled - fadeStart) / (fadeEnd - fadeStart)
        setStickyOpacity(1 - progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[200vh] overflow-hidden hero-gradient"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ opacity: stickyOpacity, transition: 'opacity 0.3s ease-out' }}
      >
        <div className="tooth-glow" data-parallax="0.3" />

        <div className="relative z-10 w-full max-w-site mx-auto px-8 md:px-16">
          <div className="flex items-center justify-center select-none">
            <span
              data-parallax="1.2"
              className="font-display text-warm-black will-change-transform"
              style={{
                fontSize: 'clamp(90px, 13vw, 200px)',
                fontWeight: 800,
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
              }}
            >
              DEN
            </span>

            <span
              className="inline-block relative"
              style={{ width: 'clamp(70px, 10vw, 160px)' }}
            />

            <span
              data-parallax="0.8"
              className="font-display text-warm-black will-change-transform"
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

          <p
            data-parallax="0.5"
            className="font-body text-muted text-center mt-12 md:mt-16 max-w-[420px] mx-auto will-change-transform"
            style={{
              fontSize: '16px',
              lineHeight: '26px',
              letterSpacing: '0.02em',
            }}
          >
            Where precision meets artistry. Premium dental care
            crafted for those who demand excellence.
          </p>

          <div className="flex justify-center mt-12" data-parallax="0.3">
            <a
              href="#contact"
              className="font-body text-[13px] tracking-[0.08em] uppercase text-muted border-b border-border pb-1 hover:text-warm-black hover:border-warm-black transition-all duration-700"
            >
              Book a consultation
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-8 md:left-16" data-parallax="0.2">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted/60">
            Luxury Dental Care
          </p>
        </div>

        <div className="absolute bottom-10 right-8 md:right-16" data-parallax="0.2">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted/60">
            Bangalore, India
          </p>
        </div>
      </div>
    </section>
  )
}

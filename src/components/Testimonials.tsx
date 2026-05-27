'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: 'The attention to detail here is unlike anything I have experienced. Every visit feels considered, calm, and precise.',
    name: 'Priya Menon',
    location: 'Bangalore',
  },
  {
    quote: 'They transformed not just my smile, but my entire sense of confidence. The results are genuinely life-changing.',
    name: 'Arjun Kapoor',
    location: 'Mumbai',
  },
  {
    quote: 'From the moment you walk in, you sense the difference. This is dentistry elevated to an art form.',
    name: 'Lakshmi Rao',
    location: 'Chennai',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.2 }
    )

    sectionRef.current?.querySelectorAll('.reveal-el').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-[120px] md:py-[200px] px-8 md:px-16">
      <div className="max-w-site mx-auto">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Label */}
          <p className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] font-body text-[11px] tracking-[0.2em] uppercase text-muted/60 mb-[60px] md:mb-[80px]">
            Patient Stories
          </p>

          {/* Quote area */}
          <div className="relative min-h-[200px] md:min-h-[240px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  i === active
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <p
                  className="font-display text-warm-black text-center mb-10"
                  style={{
                    fontSize: 'clamp(22px, 3vw, 36px)',
                    fontWeight: 800,
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-body text-[14px] text-muted">
                  {t.name}
                </p>
                <p className="font-body text-[12px] text-muted/50 mt-1">
                  {t.location}
                </p>
              </div>
            ))}
          </div>

          {/* Dots — minimal */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[3px] rounded-full transition-all duration-700 ${
                  i === active ? 'bg-warm-black w-8' : 'bg-border w-3 hover:bg-muted/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal-el.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

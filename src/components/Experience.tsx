'use client'

import { useEffect, useRef } from 'react'

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )

    sectionRef.current?.querySelectorAll('.reveal-el').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-[120px] md:py-[200px] px-8 md:px-16 overflow-hidden">
      <div className="max-w-site mx-auto">
        {/* Header — asymmetric editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-[80px] md:mb-[140px]">
          <div className="lg:col-span-5">
            <p className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] font-body text-[11px] tracking-[0.2em] uppercase text-muted/60 mb-6">
              The Experience
            </p>
            <h2
              className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 font-display text-warm-black"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
              }}
            >
              A sanctuary
              <br />
              for your smile
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 font-body text-[16px] leading-[26px] text-muted max-w-[400px]">
              Every detail of our clinic is designed to calm, comfort, and inspire
              confidence. From the ambient lighting to the precision instruments —
              excellence is woven into every moment of your visit.
            </p>
          </div>
        </div>

        {/* Cinematic image composition — overlapping parallax images */}
        <div className="relative">
          {/* Main large image */}
          <div
            className="reveal-el opacity-0 translate-y-10 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 relative overflow-hidden rounded-[20px]"
            style={{ aspectRatio: '16/9' }}
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=675&fit=crop"
              alt="Modern dental clinic interior"
              className="w-full h-full object-cover"
            />
            {/* Warm overlay for atmospheric depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/10 to-transparent" />
          </div>

          {/* Floating smaller image — overlapping, offset */}
          <div
            className="reveal-el opacity-0 translate-y-10 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 absolute -bottom-[60px] md:-bottom-[80px] right-[5%] md:right-[8%] w-[45%] md:w-[35%] overflow-hidden rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=625&fit=crop"
              alt="Dental precision work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom stats — minimal, editorial */}
        <div className="grid grid-cols-3 gap-8 mt-[120px] md:mt-[160px] max-w-[700px]">
          {[
            { value: '15+', label: 'Years of practice' },
            { value: '10,000+', label: 'Smiles transformed' },
            { value: '99.2%', label: 'Patient satisfaction' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
              style={{ transitionDelay: `${700 + i * 150}ms` }}
            >
              <p
                className="font-display text-warm-black mb-2"
                style={{
                  fontSize: 'clamp(28px, 3vw, 42px)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p className="font-body text-[12px] tracking-[0.04em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
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

'use client'

import { useEffect, useRef } from 'react'

const cases = [
  {
    title: 'Complete Smile Restoration',
    patient: 'Rahul K., Mumbai',
    treatment: 'Full ceramic veneers + whitening',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
  },
  {
    title: 'Invisible Alignment',
    patient: 'Meera N., Bangalore',
    treatment: 'Invisalign clear aligners — 14 months',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
  },
  {
    title: 'Implant Precision',
    patient: 'Aditya S., Delhi',
    treatment: 'Single titanium implant + ceramic crown',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop',
  },
]

export default function Transformations() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    sectionRef.current?.querySelectorAll('.reveal-el').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-[120px] md:py-[180px] px-8 md:px-16">
      <div className="max-w-site mx-auto">
        {/* Header */}
        <div className="mb-[80px] md:mb-[120px] max-w-[600px]">
          <p className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] font-body text-[11px] tracking-[0.2em] uppercase text-muted/60 mb-6">
            Transformations
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
            Stories written
            <br />
            in confidence
          </h2>
        </div>

        {/* Cases — cinematic cards with image mask reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`reveal-el opacity-0 translate-y-10 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer`}
              style={{ transitionDelay: `${200 + i * 180}ms` }}
            >
              {/* Image with mask reveal effect */}
              <div className="relative overflow-hidden rounded-[16px] mb-6" style={{ aspectRatio: '3/2' }}>
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                {/* Warm atmospheric overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1a16]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Text */}
              <h3
                className="font-display text-warm-black mb-2 group-hover:text-muted transition-colors duration-500"
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                {c.title}
              </h3>
              <p className="font-body text-[13px] text-muted mb-1">
                {c.treatment}
              </p>
              <p className="font-body text-[12px] text-muted/50">
                {c.patient}
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

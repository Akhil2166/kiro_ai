'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Implantology',
    description: 'Precision-engineered titanium implants placed with surgical exactness. Permanent, natural results.',
  },
  {
    number: '02',
    title: 'Smile Design',
    description: 'Bespoke cosmetic treatment plans crafted to enhance your unique facial aesthetics.',
  },
  {
    number: '03',
    title: 'Orthodontics',
    description: 'Invisible alignment systems that transform your smile without compromising your lifestyle.',
  },
  {
    number: '04',
    title: 'Whitening',
    description: 'Clinical-grade illumination treatments for a naturally radiant, confident smile.',
  },
  {
    number: '05',
    title: 'Restorative',
    description: 'Advanced ceramic restorations that replicate the translucency of natural enamel.',
  },
  {
    number: '06',
    title: 'Preventive Care',
    description: 'Proactive diagnostics and maintenance to preserve your oral health for decades.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    sectionRef.current?.querySelectorAll('.service-item').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-[120px] md:py-[180px] px-8 md:px-16">
      <div className="max-w-site mx-auto">
        {/* Section header */}
        <div className="mb-[80px] md:mb-[120px]">
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted/60 mb-6">
            Our Expertise
          </p>
          <h2
            className="font-display text-warm-black"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
            }}
          >
            Crafted for
            <br />
            excellence
          </h2>
        </div>

        {/* Services grid — editorial asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-[60px] md:gap-y-[80px]">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-item opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number */}
              <span className="font-body text-[12px] tracking-[0.1em] text-muted/40 block mb-4">
                {service.number}
              </span>
              {/* Title */}
              <h3
                className="font-display text-warm-black mb-3"
                style={{
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {service.title}
              </h3>
              {/* Description */}
              <p className="font-body text-[15px] leading-[24px] text-muted max-w-[380px]">
                {service.description}
              </p>
              {/* Subtle divider */}
              <div className="mt-8 h-[1px] bg-border w-full" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-item.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

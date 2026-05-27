'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement with titanium implants for natural-looking results that last a lifetime.',
    icon: 'M12 2C8 2 6 5 6 8c0 2 1 3 1 5s-1 4 0 6c1.5 2.5 3 3 5 3s3.5-.5 5-3c1-2 0-4 0-6s1-3 1-5c0-3-2-6-6-6z',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile in just one visit.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  {
    title: 'Root Canal',
    description: 'Pain-free root canal therapy using advanced rotary instruments and digital imaging.',
    icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  },
  {
    title: 'Orthodontics',
    description: 'Invisible aligners and modern braces for perfectly aligned teeth at all ages.',
    icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22V15',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, and smile makeovers designed to enhance your natural beauty.',
    icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
  },
  {
    title: 'Pediatric Care',
    description: 'Gentle, caring dental services for children in a fun and comfortable environment.',
    icon: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M8.5 3a4 4 0 100 8 4 4 0 000-8z M20 8v6 M23 11h-6',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.section-reveal')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-section px-10 max-w-content mx-auto">
      {/* Header */}
      <div className="text-center mb-16 section-reveal">
        <p className="font-body text-small text-primary mb-4 tracking-wide uppercase">
          Our Services
        </p>
        <h2 className="font-heading text-display text-dark-heading mb-6">
          Complete dental care
        </h2>
        <p className="font-body text-body text-text max-w-xl mx-auto">
          From preventive check-ups to advanced surgeries, we offer comprehensive
          dental solutions tailored to your unique needs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="section-reveal card group"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="w-14 h-14 rounded-button bg-border flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={service.icon} />
              </svg>
            </div>
            <h3 className="font-heading text-h2 text-dark-heading mb-3 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="font-body text-small text-text leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

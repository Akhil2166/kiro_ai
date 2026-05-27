'use client'

import { useEffect, useRef } from 'react'

const services = [
  { title: 'Dental Implants', desc: 'Permanent tooth replacement with premium titanium implants for natural, lasting results.' },
  { title: 'Teeth Whitening', desc: 'Professional whitening for a brighter, more confident smile in just one visit.' },
  { title: 'Root Canal', desc: 'Pain-free therapy using advanced rotary instruments and digital imaging.' },
  { title: 'Orthodontics', desc: 'Invisible aligners and modern braces for perfectly aligned teeth at all ages.' },
  { title: 'Cosmetic Dentistry', desc: 'Veneers, bonding, and smile makeovers to enhance your natural beauty.' },
  { title: 'Pediatric Care', desc: 'Gentle, caring dental services for children in a fun environment.' },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="py-20 md:py-[80px] px-10 max-w-site mx-auto">
      {/* Header */}
      <div className="text-center mb-16 reveal">
        <p className="font-inter text-[14px] text-muted mb-4 tracking-wide uppercase">Our Services</p>
        <h2 className="font-figtree font-light text-[54px] leading-[54px] text-heading mb-6">
          Complete dental care
        </h2>
        <p className="font-inter text-[18px] leading-[27px] text-body max-w-[540px] mx-auto">
          From preventive check-ups to advanced surgeries, comprehensive solutions tailored to your needs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="reveal card-sixb group" style={{ transitionDelay: `${i * 80}ms` }}>
            <h3 className="font-figtree text-[20px] leading-[30px] font-normal text-heading mb-3 group-hover:text-primary transition-colors duration-200">
              {s.title}
            </h3>
            <p className="font-inter text-[14px] leading-[21px] text-body">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

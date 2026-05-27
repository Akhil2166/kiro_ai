'use client'

import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Rahul Kapoor',
    location: 'Mumbai',
    text: 'Denz transformed my smile completely. The team was incredibly professional and made me feel comfortable throughout the entire implant procedure.',
  },
  {
    name: 'Meera Nair',
    location: 'Bangalore',
    text: 'I was terrified of dentists until I visited Denz. Dr. Priya made my orthodontic journey a breeze. My Invisalign results are beyond amazing.',
  },
  {
    name: 'Aditya Singh',
    location: 'Delhi',
    text: 'The AI diagnostics at Denz caught an issue that two other clinics missed. Their technology combined with genuine care is unmatched.',
  },
  {
    name: 'Lakshmi Venkatesh',
    location: 'Chennai',
    text: 'My kids actually look forward to dental visits now. Dr. Ananya has a magical way with children. The environment is so welcoming and modern.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-[80px] px-10 max-w-site mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="font-inter text-[14px] text-primary mb-4 tracking-wide uppercase">Testimonials</p>
        <h2 className="font-figtree font-light text-[54px] leading-[54px] text-heading">
          What our patients say
        </h2>
      </div>

      <div className="reveal max-w-3xl mx-auto relative min-h-[180px]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-600 ${
              i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <p className="font-inter text-[18px] leading-[27px] text-body italic mb-8">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-figtree text-[20px] text-heading">{t.name}</p>
            <p className="font-inter text-[14px] text-muted mt-1">{t.location}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'bg-primary w-6' : 'bg-border w-2 hover:bg-muted'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Rahul Kapoor',
    location: 'Mumbai',
    text: 'Denz transformed my smile completely! The team was incredibly professional and made me feel comfortable throughout the entire implant procedure. Highly recommended!',
    rating: 5,
    treatment: 'Dental Implants',
  },
  {
    name: 'Meera Nair',
    location: 'Bangalore',
    text: 'I was terrified of dentists until I visited Denz. Dr. Priya and her team made my orthodontic journey a breeze. My Invisalign results are beyond amazing!',
    rating: 5,
    treatment: 'Invisalign',
  },
  {
    name: 'Aditya Singh',
    location: 'Delhi',
    text: 'The AI-powered diagnostics at Denz caught an issue that two other clinics missed. Their technology combined with genuine care is unmatched. Five stars!',
    rating: 5,
    treatment: 'Preventive Care',
  },
  {
    name: 'Lakshmi Venkatesh',
    location: 'Chennai',
    text: 'My kids actually look forward to their dental visits now! Dr. Ananya has a magical way with children. The clinic environment is so welcoming and modern.',
    rating: 5,
    treatment: 'Pediatric Dentistry',
  },
  {
    name: 'Sanjay Gupta',
    location: 'Pune',
    text: 'Got my smile makeover done at Denz and I cannot stop smiling! The veneers look so natural. Dr. Rajesh is truly an artist. Worth every penny!',
    rating: 5,
    treatment: 'Cosmetic Dentistry',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative z-[2] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div ref={sectionRef} className="section-reveal relative max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[300px]">
            {/* Quote icon */}
            <div className="absolute top-6 left-8 text-accent/20 text-7xl font-display">&ldquo;</div>

            {/* Active testimonial */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 absolute inset-0 p-8 md:p-12 flex flex-col justify-center ${
                  index === activeIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c8f169">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-white font-semibold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-white/40 text-sm">{testimonial.location} &bull; {testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-accent w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

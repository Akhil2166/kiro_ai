'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 md:py-[80px] px-10 max-w-site mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="reveal">
          <div className="rounded-card overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=750&fit=crop"
              alt="Modern dental clinic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="reveal">
          <p className="font-inter text-[14px] text-primary mb-4 tracking-wide uppercase">
            About Us
          </p>
          <h2 className="font-figtree font-light text-[54px] leading-[54px] text-heading mb-8">
            Professionals who listen
          </h2>
          <p className="font-inter text-[18px] leading-[27px] text-body mb-6">
            At Denz, our entire team works with benevolence and expertise to ensure
            your smile regains its beauty and whiteness. We bring you well-being and
            happiness through a healthy mouth, in accordance with the highest standards
            of modern dentistry.
          </p>
          <p className="font-inter text-[18px] leading-[27px] text-body mb-10">
            Our clinic combines cutting-edge AI diagnostics with compassionate care.
            Every treatment plan is personalized, every visit is comfortable, and every
            smile we create tells a story of renewed confidence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="font-figtree font-light text-[40px] leading-[40px] text-heading">15+</p>
              <p className="font-inter text-[14px] text-muted mt-2">Years</p>
            </div>
            <div>
              <p className="font-figtree font-light text-[40px] leading-[40px] text-heading">10k+</p>
              <p className="font-inter text-[14px] text-muted mt-2">Patients</p>
            </div>
            <div>
              <p className="font-figtree font-light text-[40px] leading-[40px] text-heading">99%</p>
              <p className="font-inter text-[14px] text-muted mt-2">Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

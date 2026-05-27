'use client'

import { useEffect, useRef } from 'react'

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.15 }
    )

    sectionRef.current?.querySelectorAll('.reveal-el').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative">
      {/* Luxury CTA band */}
      <div className="py-[120px] md:py-[180px] px-8 md:px-16 text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] font-body text-[11px] tracking-[0.2em] uppercase text-muted/60 mb-8">
            Begin Your Journey
          </p>
          <h2
            className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 font-display text-warm-black mb-8"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Your smile deserves
            <br />
            nothing less
          </h2>
          <p className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 font-body text-[16px] leading-[26px] text-muted mb-12 max-w-[440px] mx-auto">
            Schedule a private consultation with our team. No pressure,
            no rush — just honest conversation about your possibilities.
          </p>
          <a
            href="tel:+918045678900"
            className="reveal-el opacity-0 translate-y-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 inline-block font-body text-[13px] tracking-[0.06em] text-warm-black border border-border rounded-btn px-10 py-4 hover:bg-warm-black hover:text-bg transition-colors duration-500"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Minimal footer */}
      <footer className="border-t border-border py-12 px-8 md:px-16">
        <div className="max-w-site mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <p className="font-display text-[18px] font-extrabold text-warm-black tracking-tight">
            DENZ
          </p>

          {/* Links */}
          <div className="flex items-center gap-8">
            {['About', 'Services', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-[12px] tracking-[0.04em] text-muted hover:text-warm-black transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+918045678900"
              className="font-body text-[12px] text-muted hover:text-warm-black transition-colors duration-300"
            >
              +91 80 4567 8900
            </a>
            <a
              href="mailto:hello@denz.in"
              className="font-body text-[12px] text-muted hover:text-warm-black transition-colors duration-300"
            >
              hello@denz.in
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="max-w-site mx-auto mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] text-muted/50">
            &copy; 2024 Denz Dental. Bangalore, India.
          </p>
          <p className="font-body text-[11px] text-muted/50">
            42, MG Road, Indiranagar, Karnataka 560038
          </p>
        </div>
      </footer>

      <style jsx>{`
        .reveal-el.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

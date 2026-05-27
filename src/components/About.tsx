'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '25+', label: 'Expert Dentists' },
    { number: '99%', label: 'Success Rate' },
  ]

  return (
    <section id="about" className="relative z-[2] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="section-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div>
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              About Denz
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              A new era of
              <span className="gradient-text"> dental excellence</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              At Denz, we believe everyone deserves a confident smile. Our state-of-the-art 
              clinic combines cutting-edge technology with a warm, welcoming environment. 
              We&apos;re not just treating teeth &mdash; we&apos;re transforming lives through 
              personalized dental care that puts your comfort first.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Founded by a team of India&apos;s finest dental professionals, Denz represents 
              the future of dentistry &mdash; where AI-powered diagnostics meet compassionate 
              care, and where every patient leaves with a brighter smile and renewed confidence.
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all duration-300"
            >
              Meet Our Team
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-transparent to-accent/20" />
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=750&fit=crop"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 max-w-[200px]">
              <p className="text-accent text-3xl font-bold font-display">15+</p>
              <p className="text-white/70 text-sm mt-1">Years of trusted dental care</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="section-reveal mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl glass hover:border-accent/20 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold font-display gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

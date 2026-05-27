'use client'

import { useEffect, useRef } from 'react'

const team = [
  {
    name: 'Dr. Arjun Mehta',
    role: 'Chief Dental Surgeon',
    specialty: 'Implantology & Oral Surgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
    experience: '20+ years',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Orthodontist',
    specialty: 'Invisalign & Braces',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop',
    experience: '12+ years',
  },
  {
    name: 'Dr. Rajesh Krishnan',
    role: 'Cosmetic Dentist',
    specialty: 'Smile Design & Veneers',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=500&fit=crop',
    experience: '15+ years',
  },
  {
    name: 'Dr. Ananya Desai',
    role: 'Pediatric Dentist',
    specialty: 'Children\'s Dental Care',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=500&fit=crop',
    experience: '10+ years',
  },
  {
    name: 'Dr. Vikram Patel',
    role: 'Endodontist',
    specialty: 'Root Canal & Microsurgery',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1609207014767-2e7f5d8d9bcf?w=400&h=500&fit=crop',
    experience: '14+ years',
  },
  {
    name: 'Dr. Sneha Iyer',
    role: 'Prosthodontist',
    specialty: 'Crowns, Bridges & Dentures',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=500&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=500&fit=crop',
    experience: '11+ years',
  },
]

export default function Team() {
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
    <section id="team" ref={sectionRef} className="relative z-[2] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Experts
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            India&apos;s finest dental professionals, dedicated to giving you the 
            perfect smile with care and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="section-reveal team-card group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Default Image */}
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="default-image w-full h-full object-cover"
                />
                {/* Hover Image - zoomed out view */}
                <div className="overlay-image">
                  <img
                    src={member.hoverImage}
                    alt={`${member.name} at work`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-accent text-xs font-medium tracking-wider uppercase mb-1">
                    {member.experience}
                  </p>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-sm">{member.role}</p>
                  <p className="text-white/40 text-xs mt-1">{member.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

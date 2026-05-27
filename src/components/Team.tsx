'use client'

import { useEffect, useRef } from 'react'

const team = [
  {
    name: 'Dr. Arjun Mehta',
    role: 'Chief Dental Surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=520&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=520&fit=crop',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Orthodontist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=520&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=520&fit=crop',
  },
  {
    name: 'Dr. Rajesh Krishnan',
    role: 'Cosmetic Dentist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=520&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=520&fit=crop',
  },
  {
    name: 'Dr. Ananya Desai',
    role: 'Pediatric Dentist',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=520&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=520&fit=crop',
  },
  {
    name: 'Dr. Vikram Patel',
    role: 'Endodontist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=520&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1609207014767-2e7f5d8d9bcf?w=400&h=520&fit=crop',
  },
  {
    name: 'Dr. Sneha Iyer',
    role: 'Prosthodontist',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=520&fit=crop&crop=face',
    hoverImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=520&fit=crop',
  },
]

export default function Team() {
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
    <section id="team" ref={ref} className="py-20 md:py-[80px] px-10 max-w-site mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="font-inter text-[14px] text-primary mb-4 tracking-wide uppercase">Our Team</p>
        <h2 className="font-figtree font-light text-[54px] leading-[54px] text-heading mb-6">
          Experts who care
        </h2>
        <p className="font-inter text-[18px] leading-[27px] text-body max-w-[540px] mx-auto">
          India&apos;s finest dental professionals dedicated to your perfect smile.
        </p>
      </div>

      {/* Grid - hover shows zoomed out image (Six B effect) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((m, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="team-card aspect-[3/4] cursor-pointer">
              <img src={m.image} alt={m.name} className="default-img w-full h-full object-cover" />
              <div className="hover-img">
                <img src={m.hoverImage} alt={`${m.name} at work`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-4">
              <p className="font-figtree text-[20px] leading-[30px] text-heading">{m.name}</p>
              <p className="font-inter text-[14px] text-primary mt-1">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

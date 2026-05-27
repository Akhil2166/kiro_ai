'use client'

export default function Marquee() {
  const items = [
    'Implants',
    'Orthodontics',
    'Cosmetic Dentistry',
    'Root Canal',
    'Teeth Whitening',
    'Dental Surgery',
    'Pediatric Care',
    'Preventive Care',
  ]

  return (
    <section className="relative z-[2] py-8 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-lg md:text-2xl font-display text-white/20 hover:text-accent transition-colors duration-300 cursor-default"
          >
            {item} <span className="text-accent/40 mx-4">&#x2022;</span>
          </span>
        ))}
      </div>
    </section>
  )
}

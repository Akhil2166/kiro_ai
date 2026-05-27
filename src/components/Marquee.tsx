'use client'

export default function Marquee() {
  const items = [
    'Implants',
    'Orthodontics',
    'Cosmetic Dentistry',
    'Root Canal',
    'Whitening',
    'Oral Surgery',
    'Pediatric Care',
    'Preventive Care',
  ]

  return (
    <section className="py-8 border-y border-border overflow-hidden bg-white">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-10 font-figtree text-[28px] md:text-[36px] font-light text-border select-none"
          >
            {item}
            <span className="text-primary/40 mx-6">/</span>
          </span>
        ))}
      </div>
    </section>
  )
}

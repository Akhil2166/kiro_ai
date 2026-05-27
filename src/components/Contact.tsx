'use client'

import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-20 md:py-[80px] px-10 max-w-site mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="font-inter text-[14px] text-primary mb-4 tracking-wide uppercase">Contact</p>
        <h2 className="font-figtree font-light text-[54px] leading-[54px] text-heading mb-6">Find us</h2>
        <p className="font-inter text-[18px] leading-[27px] text-body max-w-[540px] mx-auto">
          Visit our modern clinic in the heart of Bangalore, or reach out to book your appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
        {/* Map */}
        <div className="rounded-card overflow-hidden h-[400px] border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Denz Dental Location"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <p className="font-figtree text-[20px] leading-[30px] text-heading mb-2">Address</p>
            <p className="font-inter text-[18px] leading-[27px] text-body">
              42, MG Road, Indiranagar<br />Bangalore, Karnataka 560038<br />India
            </p>
          </div>
          <div>
            <p className="font-figtree text-[20px] leading-[30px] text-heading mb-2">Hours</p>
            <p className="font-inter text-[18px] leading-[27px] text-body">
              Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 2:00 PM
            </p>
          </div>
          <div>
            <p className="font-figtree text-[20px] leading-[30px] text-heading mb-2">Contact</p>
            <p className="font-inter text-[18px] leading-[27px] text-body">
              Phone: +91 80 4567 8900<br />Email: hello@denz.in
            </p>
          </div>
          <a href="tel:+918045678900" className="btn-primary w-fit">Book Appointment</a>
        </div>
      </div>
    </section>
  )
}

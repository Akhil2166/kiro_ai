'use client'

export default function Footer() {
  return (
    <footer className="bg-surface py-16 px-10">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="font-figtree font-light text-[22px] text-heading mb-4">
              Den<span className="text-primary">z</span>
            </p>
            <p className="font-inter text-[14px] leading-[21px] text-body">
              Premium dental care combining technology and compassion for your perfect smile.
            </p>
          </div>
          <div>
            <p className="font-figtree text-[16px] text-heading mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              {['About', 'Services', 'Team', 'Contact'].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="font-inter text-[14px] text-body hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-figtree text-[16px] text-heading mb-4">Services</p>
            <div className="flex flex-col gap-3">
              {['Dental Implants', 'Whitening', 'Orthodontics', 'Cosmetic'].map((s) => (
                <span key={s} className="font-inter text-[14px] text-body">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-figtree text-[16px] text-heading mb-4">Contact</p>
            <div className="flex flex-col gap-3 font-inter text-[14px] text-body">
              <p>+91 80 4567 8900</p>
              <p>hello@denz.in</p>
              <p>42, MG Road, Indiranagar<br />Bangalore 560038</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[12px] text-muted">&copy; 2024 Denz Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-[12px] text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-inter text-[12px] text-muted hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

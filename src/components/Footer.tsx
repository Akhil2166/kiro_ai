'use client'

export default function Footer() {
  return (
    <footer className="bg-border/50 py-16 px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-heading text-[28px] font-light text-dark-heading">
              Den<span className="text-primary">z</span>
            </a>
            <p className="font-body text-small text-text mt-4 leading-relaxed">
              Premium dental care combining technology and compassion for your perfect smile.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-heading text-h2 text-dark-heading mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              <a href="#about" className="font-body text-small text-text hover:text-primary transition-colors">About</a>
              <a href="#services" className="font-body text-small text-text hover:text-primary transition-colors">Services</a>
              <a href="#team" className="font-body text-small text-text hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="font-body text-small text-text hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading text-h2 text-dark-heading mb-4">Services</p>
            <div className="flex flex-col gap-3">
              <span className="font-body text-small text-text">Dental Implants</span>
              <span className="font-body text-small text-text">Teeth Whitening</span>
              <span className="font-body text-small text-text">Orthodontics</span>
              <span className="font-body text-small text-text">Cosmetic Dentistry</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading text-h2 text-dark-heading mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <p className="font-body text-small text-text">+91 80 4567 8900</p>
              <p className="font-body text-small text-text">hello@denz.in</p>
              <p className="font-body text-small text-text">42, MG Road, Indiranagar<br/>Bangalore 560038</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[12px] text-bg-secondary">
            &copy; 2024 Denz Dental. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-[12px] text-bg-secondary hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-[12px] text-bg-secondary hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

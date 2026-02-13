import Link from 'next/link'
import { Leaf, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-market-green text-white">
      {/* Wave Divider */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path
            d="M0,60 L0,20 Q360,60 720,20 Q1080,-20 1440,20 L1440,60 Z"
            fill="#2D6A4F"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <span className="font-heading text-xl font-bold">Market on 41st</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Bringing fresh, local produce and artisan goods to our community every Saturday morning. Because good food brings good people together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/events', label: 'Upcoming Events' },
                { href: '/vendors', label: 'Our Vendors' },
                { href: '/produce-box', label: 'Produce Box' },
                { href: '/vendor-portal', label: 'Vendor Portal' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-harvest-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-harvest-gold" />
                <span>Corner of 41st & Elm Street<br />Portland, OR 97215</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-harvest-gold" />
                <span>hello@marketon41st.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-harvest-gold" />
                <span>(555) 041-MARKET</span>
              </li>
            </ul>
          </div>

          {/* Market Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Market Hours</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-medium text-white">Every Saturday</p>
              <p>9:00 AM - 2:00 PM</p>
              <p className="text-xs mt-3">Rain or shine! We&apos;re here<br />April through October.</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Market on 41st. Made with love in the community.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

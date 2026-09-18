import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Share2, Sparkles, Flame, Bed } from 'lucide-react';

const serviceLinks = [
  { label: 'Sublimation Printing', slug: 'sublimation-printing' },
  { label: 'Sportswear & Jersey Printing', slug: 'sportswear-printing' },
  { label: 'T-Shirt & Apparel Printing', slug: 'tshirt-printing' },
  { label: 'Rotary Calender Heat Transfer', slug: 'sublimation-printing' },
  { label: 'Bedsheet & Home Textiles (Coming Soon)', slug: 'sublimation-printing' },
  { label: 'Mugs & Hard Substrates', slug: 'mug-printing' },
  { label: 'Custom Corporate Gifts', slug: 'custom-gifts' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/80 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="h-12 w-12 rounded-xl bg-black/40 p-1.5 border border-primary/40 flex items-center justify-center shadow-lg group-hover:border-primary transition-all">
                <img
                  src="/logo.svg"
                  alt="SRT Sublimation Printing Sialkot Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="text-2xl font-black text-white tracking-wider"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  SRT
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Sublimation Printing
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/70 mb-5">
              Premier industrial sublimation printing & continuous rotary heat transfer facility in Sialkot, Pakistan. Trusted by sportswear exporters, international apparel brands, and textile manufacturers.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Share2, href: '#', label: 'Facebook' },
                { icon: MessageCircle, href: 'https://wa.me/923236602316?text=Hello%20SRT%20Sublimation%2C%20I%20would%20like%20to%20inquire%20about%20printing%20services.', label: 'WhatsApp (03236602316)' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href + (label || '')}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/80"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Factory & Team', to: '/about' },
                { label: 'Printing Services', to: '/services' },
                { label: 'Product Catalog', to: '/products' },
                { label: 'Client Portfolio', to: '/portfolio' },
                { label: 'Industries We Serve', to: '/industries' },
                { label: 'Request a Quote', to: '/quote' },
                { label: 'Contact & Location', to: '/contact' },
                { label: 'Sublimation FAQs', to: '/faq' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/65 hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span className="text-primary/40 group-hover:text-primary transition-colors">›</span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Services & Machinery</span>
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(s => (
                <li key={s.label}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-white/65 hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <span className="text-primary/40 group-hover:text-primary transition-colors">›</span>
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Factory Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Sialkot Factory Hub</span>
            </h3>
            <ul className="space-y-3.5">
              {[
                { icon: MapPin, text: 'Industrial Area, Sialkot, Punjab, Pakistan' },
                { icon: Phone, text: '+92 323 6602316 / 03236602316 (Direct Desk)' },
                { icon: Mail, text: 'info@srtprinting.com' },
                { icon: Clock, text: 'Mon–Sat: 8:30am – 7:30pm PKT' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-xs sm:text-sm text-white/70">
                  <Icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-primary/20">
              <p className="text-xs text-primary font-bold flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Expansion Notice</span>
              </p>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Industrial 3.2m roll-to-roll machinery for luxury bedsheets & home textiles commissioning soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 SRT Sublimation Printing Sialkot. All rights reserved.</p>
          <p className="text-center sm:text-right">
            High-Definition Digital Sublimation, Sportswear Manufacturing & Rotary Heat Transfer
          </p>
        </div>
      </div>
    </footer>
  );
}

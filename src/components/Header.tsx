import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Printer, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

const serviceLinks = [
  { label: 'Sublimation Printing', slug: 'sublimation-printing' },
  { label: 'Sportswear & Jerseys', slug: 'sportswear-printing' },
  { label: 'Bedsheets & Textiles (Soon)', slug: 'bedsheet-textile-printing' },
  { label: 'T-Shirt & Apparel', slug: 'tshirt-printing' },
  { label: 'Ceramic Mugs', slug: 'mug-printing' },
  { label: 'Custom Gifts', slug: 'custom-gifts' },
  { label: 'Promotional Items', slug: 'promotional-printing' },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'Products', to: '/products' },
  { label: 'Sample Book', to: '/catalog', badge: 'PDF' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const baseLinkClass =
    'text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-lg inline-flex items-center gap-1';
  const activeLinkClass = 'text-primary font-semibold bg-primary/10';
  const inactiveLinkClass =
    'text-foreground/80 hover:text-foreground hover:bg-muted/80';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-md py-0'
          : 'bg-card/90 backdrop-blur-md border-b border-border/80 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group select-none">
            <div className="h-11 w-11 rounded-xl bg-[var(--navy)] p-1 border border-primary/40 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-primary transition-all duration-300">
              <img
                src="/logo.svg"
                alt="SRT Sublimation Printing Sialkot Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-xl font-black tracking-wider text-foreground group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                SRT
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Sublimation Printing
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(link =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`${baseLinkClass} ${inactiveLinkClass} ${
                      servicesOpen ? 'bg-muted/80 text-foreground' : ''
                    }`}
                    onClick={() => setServicesOpen(o => !o)}
                    aria-expanded={servicesOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180 text-primary' : 'text-foreground/60'
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1.5 w-60 rounded-2xl bg-card/98 backdrop-blur-xl border border-border shadow-2xl p-2 transition-all duration-200 origin-top transform ${
                      servicesOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/10 rounded-xl mb-1 transition-colors"
                    >
                      <span>All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="h-px bg-border my-1" />
                    {serviceLinks.map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-2 text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg hover:translate-x-1 transition-all duration-150"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Animated Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl border border-border/80 text-foreground/80 hover:text-foreground hover:bg-muted/80 active:scale-90 transition-all duration-200 shadow-xs"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-800 hover:-rotate-45 transition-transform duration-300" />
              )}
            </button>

            <Link
              to="/quote"
              className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border/80 text-foreground/80 hover:text-foreground hover:bg-muted/80 active:scale-90 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-800" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="p-2 rounded-xl border border-border/80 text-foreground/80 hover:text-foreground hover:bg-muted/80 active:scale-90 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border px-4 py-4 space-y-1.5 shadow-2xl animate-fade-down">
          {navLinks.map(link => (
            <div key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/30">
                    {link.badge}
                  </span>
                )}
              </NavLink>
              {link.dropdown && (
                <div className="ml-3 pl-3 border-l-2 border-border/80 my-1 space-y-1">
                  {serviceLinks.map(s => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-1.5 text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3">
            <Link
              to="/quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95 transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

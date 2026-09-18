import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary font-semibold">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[var(--navy)] py-24 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-float"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('${service.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/90 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]} />
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-6 mb-4 max-w-2xl animate-fade-up" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {service.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">{service.shortDesc}</p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-sm group"
          >
            <span>Request a Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection animation="fade-up">
                <div className="overflow-hidden rounded-3xl mb-8 bg-muted shadow-lg">
                  <img src={service.image} alt={service.title} className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{service.description}</p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>What We Offer</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border text-sm font-medium text-foreground/85 hover:border-primary/40 hover:translate-x-1 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>Suitable Applications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {service.applications.map(app => (
                    <div key={app} className="bg-card border border-border rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-foreground/80 hover:border-primary/40 hover:text-primary transition-all text-center">
                      {app}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>Service FAQs</h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-primary/40 shadow-sm' : 'border-border hover:border-primary/30'}`}>
                      <button
                        className="w-full flex items-center justify-between px-6 py-4.5 text-left group"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className={`font-semibold text-sm transition-colors ${openFaq === i ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                      </button>
                      <div className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/80 pt-3">{faq.a}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <AnimatedSection animation="slide-right">
                <div className="bg-card border border-border rounded-3xl p-7 shadow-xs space-y-4">
                  <h3 className="font-bold text-foreground text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>Request a Quote</h3>
                  <p className="text-sm text-muted-foreground">Ready to get started on your {service.title} project? Send your specifications for a custom estimate.</p>
                  <Link to="/quote" className="block w-full text-center px-5 py-3.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all">
                    Get a Free Quote
                  </Link>
                  <Link to="/contact" className="block w-full text-center px-5 py-3.5 bg-secondary text-foreground rounded-xl font-semibold text-sm hover:bg-secondary/80 hover:scale-[1.02] active:scale-95 transition-all">
                    Talk to a Specialist
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={100}>
                <div className="bg-card border border-border rounded-3xl p-7 shadow-xs">
                  <h3 className="font-bold text-foreground text-lg mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Other Services</h3>
                  <ul className="space-y-2.5">
                    {services.filter(s => s.slug !== slug).map(s => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-muted font-medium hover:translate-x-1 transition-all">
                          {s.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

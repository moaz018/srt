import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Shirt, Trophy, Coffee, Gift, Megaphone, Sparkles, Bed } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { services } from '../data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Shirt,
  Trophy,
  Coffee,
  Gift,
  Megaphone,
  Bed,
};

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[var(--navy)] py-24 relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-float"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 animate-fade-down">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Tailored Solutions</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Our Printing Services
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            Advanced digital sublimation and multi-process printing solutions tailored for sports clubs, brands, schools, events, and corporate gifting.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Layers;
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection
                  key={service.slug}
                  animation={isEven ? 'slide-left' : 'slide-right'}
                  delay={50}
                >
                  <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
                    <div className={`${!isEven ? 'lg:order-2' : ''} h-72 sm:h-80 lg:h-full min-h-[300px] overflow-hidden bg-muted`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className={`${!isEven ? 'lg:order-1' : ''} p-8 sm:p-10 flex flex-col justify-center`}>
                      <div className="w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h2
                        className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2.5 mb-8">
                        {service.features.slice(0, 3).map(f => (
                          <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-foreground/85">
                            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-badge-pulse" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm hover:gap-3 transition-all duration-200 active:scale-95"
                        >
                          <span>Explore Details & Specs</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

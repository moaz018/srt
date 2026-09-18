import { Link } from 'react-router-dom';
import {
  Building2,
  Trophy,
  GraduationCap,
  Calendar,
  UtensilsCrossed,
  Sparkles,
  Megaphone,
  Heart,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { industries } from '../data/industries';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Trophy,
  GraduationCap,
  Calendar,
  UtensilsCrossed,
  Sparkles,
  Megaphone,
  Heart,
};

export default function Industries() {
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
            <Building2 className="w-3.5 h-3.5 text-primary" />
            <span>Sectors & Client Types</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Industries We Serve
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            Custom printing and sublimation solutions tailored to meet the exacting standards of businesses, sports clubs, institutions, and events.
          </p>
        </div>
      </section>

      {/* Industries Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Building2;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection
                key={industry.title}
                animation={isEven ? 'slide-left' : 'slide-right'}
                delay={50}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-sm hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''} overflow-hidden rounded-2xl bg-muted h-72 sm:h-80`}>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {industry.title}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {industry.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>Inquire For This Industry</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

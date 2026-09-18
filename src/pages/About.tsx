import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import FactoryInfrastructure from '../components/FactoryInfrastructure';

const capabilities = [
  'Full-panel sublimation printing for edge-to-edge designs',
  'Direct-to-garment (DTG) printing with rich saturation',
  'Screen printing for high-volume commercial runs',
  'Hard substrate printing (ceramic mugs, plaques, phone cases)',
  'Complete custom graphic design and prepress support',
  'Bulk corporate orders and individual single-item fulfillment',
];

const approach = [
  {
    title: 'Design Review',
    desc: 'We assess your artwork and advise on optimal printing methodology and substrate for your goals.',
  },
  {
    title: 'Sample Approval',
    desc: 'For new clients and large runs, we provide a digital or physical sample approval step before full production.',
  },
  {
    title: 'Production',
    desc: 'Your order enters production using precision calibrated digital sublimation machinery.',
  },
  {
    title: 'Quality Inspection',
    desc: 'Every finished order is individually inspected for color fidelity and build quality before dispatch.',
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-[var(--navy)] py-28 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-float"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=600&fit=crop&auto=format')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/90 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 animate-fade-down">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>About SRT Printing</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-5 max-w-2xl animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Precision Printing, <span className="text-primary">Creative Results</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            SRT is a professional sublimation and custom digital printing company dedicated to delivering pristine results for sports clubs, brands, schools, and individuals.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <SectionHeading label="Who We Are" title="Custom Printing Built Around Your Vision" />
              <p className="text-muted-foreground leading-relaxed mt-6 mb-4 text-base">
                SRT provides professional sublimation digital printing and custom merchandise printing services for a broad spectrum of clients — from high-energy sports clubs and corporate entities to individuals seeking exceptional personalized gifts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                We focus on delivering consistent quality with transparent communication at every stage. Our workshop encompasses design prepress, precision printing, and heat press finishing across apparel, drinkware, promotional items, and custom accessories.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 hover:scale-105 active:scale-95 transition-all py-2"
              >
                <span>Explore Our Full Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format"
                  alt="Sublimation printing process in operation"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="mb-14">
            <SectionHeading
              label="Our Approach"
              title="How We Deliver Excellence"
              subtitle="A streamlined 4-step workflow designed to make custom manufacturing smooth and reliable."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, i) => (
              <AnimatedSection key={step.title} animation="fade-up" delay={i * 80}>
                <div className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full">
                  <div
                    className="text-4xl font-black text-primary/30 group-hover:text-primary transition-colors mb-4"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    className="font-bold text-foreground mb-2.5 text-lg"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=700&h=500&fit=crop&auto=format"
                  alt="Custom printing samples"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <SectionHeading
                label="Capabilities"
                title="What We Can Produce"
                subtitle="A versatile array of printing techniques and substrates managed by experienced professionals."
              />
              <ul className="mt-8 space-y-3.5">
                {capabilities.map((cap, i) => (
                  <li
                    key={cap}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-card border border-border/80 hover:border-primary/40 hover:translate-x-1.5 transition-all text-sm font-medium text-foreground"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industrial Machinery & Teams */}
      <FactoryInfrastructure />

      {/* Industries */}
      <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-down" className="mb-14 text-center">
            <SectionHeading label="Who We Serve" title="Industries We Work With" center light />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              'Fashion & Apparel Brands',
              'Sports Teams & Clubs',
              'Schools & Academies',
              'Corporate Enterprises',
              'Festivals & Events',
              'Marketing Agencies',
              'Restaurants & Hospitality',
              'Personal & Gift Orders',
            ].map((ind, i) => (
              <AnimatedSection key={ind} animation="scale" delay={i * 40}>
                <div className="bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-primary/50 rounded-xl px-5 py-4 text-center text-sm font-semibold text-white/80 hover:text-white transition-all hover:scale-105 shadow-xs">
                  {ind}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start a Project?"
        subtitle="Share your requirements and we will guide you to the right printing solution."
      />
    </main>
  );
}

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';

const faqs = [
  {
    q: 'Why does higher polyester percentage produce superior sublimation results?',
    a: 'Sublimation is a thermo-molecular bonding process. At 200°C (392°F), disperse dye molecules vaporize and bond exclusively with synthetic polymer chains. On 100% polyester, 100% of the ink bonds permanently into the fiber, producing maximum vibrancy, razor-sharp detail, and zero wash fade. Blends (like 65/35 poly-cotton) yield a softer vintage/heathered look because cotton fibers cannot hold the dye, while pure cotton requires alternative printing methods like DTF or screen printing.',
  },
  {
    q: 'What specialized machines and operator teams do you have in Sialkot?',
    a: 'Our facility operates dedicated production units: an in-house prepress design studio for Pantone color profiling and 3D mockups, multi-head Japanese wide-format digital sublimation plotters (Epson & Mimaki piezo printheads) handled by certified printer operators, and heavy-duty continuous oil-heated rotary drum calenders & pneumatic flatbeds managed by specialized heat transfer technicians.',
  },
  {
    q: 'Are you launching wide-format bedsheet and home textile printing?',
    a: 'Yes! We are currently expanding our production lines with ultra-wide 3.2-meter (126") continuous roll-to-roll rotary calenders specifically engineered for seamless, edge-to-edge printing of King and Queen bedsheets, duvet covers, pillowcases, curtains, and luxury home textiles with high daily linear capacity.',
  },
  {
    q: 'What is the difference between rotary drum calender and flatbed heat transfer?',
    a: 'Continuous rotary drum calenders use an oil-heated steel cylinder to transfer sublimation prints onto continuous rolls of unstitched fabric with uniform tension and zero ghosting. Flatbed pneumatic heat presses apply vertical pressure to pre-cut fabric panels (such as jersey fronts, sleeves, and collars) or hard substrates like mousepads and ceramic tiles.',
  },
  {
    q: 'Can you print fluorescent neon colors for sportswear?',
    a: 'Yes. Our digital plotters support dedicated fluorescent ink channels (Neon Yellow, Neon Pink, Neon Green, Neon Orange) that produce high-visibility safety and high-impact esports/athletic colors that standard CMYK printers cannot achieve.',
  },
  {
    q: 'Can I provide my own design or do you provide artwork assistance?',
    a: 'Both! You can send print-ready vector files (AI, EPS, SVG, or 300 DPI PDF/PNG), or our prepress graphic design studio can assist with layout, vector redrawing, squad name/number rosters, and Pantone PMS color calibration.',
  },
  {
    q: 'Do you accept bulk export orders for sportswear brands and clubs?',
    a: 'Yes. Situated in Sialkot — the global hub for athletic apparel — we produce export-grade garments for international brands, sports academies, clubs, and distributors with full quality inspection, custom labeling, and export packaging.',
  },
  {
    q: 'How long does printing and production take?',
    a: 'Sampling and strike-offs typically take 2–3 business days. Bulk production timelines depend on quantity and finishing specifications, ranging from 5–10 business days. Expedited rush production is available upon request.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="pt-16">
      {/* Header Banner */}
      <section className="bg-[var(--navy)] py-24 relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-float"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>Got Questions?</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            Everything you need to know about our sublimation printing processes, file specifications, and ordering.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 40}>
                <div
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 shadow-xs ${
                    open === i
                      ? 'border-primary/50 shadow-md ring-1 ring-primary/20'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span
                      className={`font-semibold text-sm sm:text-base pr-4 transition-colors ${
                        open === i ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        open === i
                          ? 'bg-primary text-white rotate-180'
                          : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/80 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Still Have Questions?" subtitle="Get in touch with our printing specialists and we will be happy to help." />
    </main>
  );
}

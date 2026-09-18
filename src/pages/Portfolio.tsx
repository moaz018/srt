import { useState } from 'react';
import { X, Sparkles, Eye } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { portfolioItems, portfolioCategories } from '../data/portfolio';
import type { PortfolioItem } from '../data/portfolio';

export default function Portfolio() {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered =
    category === 'All'
      ? portfolioItems
      : portfolioItems.filter(p => p.category === category);

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
            <span>Showcase Gallery</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Our Work Portfolio
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            A showcase of custom digital sublimation and specialty printing projects produced for our valued clients.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {portfolioCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                  category === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105'
                    : 'bg-card border border-border text-foreground/75 hover:text-foreground hover:border-primary/40 hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
            {filtered.map(item => (
              <div
                key={item.id}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-muted cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelected(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-5 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-primary font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {item.category}
                  </span>
                  <p
                    className="text-white font-bold text-sm sm:text-base leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {item.title}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-white/80 mt-2 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card border border-border rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl animate-scale relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 active:scale-95 transition-all shadow-md"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7">
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-2.5 py-1 rounded-full bg-primary/10 inline-block mb-3">
                {selected.category}
              </span>
              <h3
                className="text-2xl font-bold text-foreground mb-3"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {selected.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </main>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Package } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { products, productCategories } from '../data/products';

export default function Products() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = products.filter(p => {
    const matchCat = category === 'All' || p.category === category;
    const matchQ =
      query === '' ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

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
            <Package className="w-3.5 h-3.5 text-primary" />
            <span>Product Catalog</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Custom Printed Products
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            Explore our customizable substrates — from high-performance sportswear and apparel to personalized mugs, awards, and promotional gifts.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-5 mb-12 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products by name or keyword..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/60 shadow-xs"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {productCategories.map(cat => (
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
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground bg-card border border-border rounded-3xl p-8">
              <p className="text-base font-semibold text-foreground mb-1">No products match your search.</p>
              <p className="text-sm text-muted-foreground mb-4">Try clearing filters or search terms.</p>
              <button
                onClick={() => {
                  setCategory('All');
                  setQuery('');
                }}
                className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <AnimatedSection
                  key={product.slug}
                  animation="fade-up"
                  delay={i * 50}
                >
                  <Link
                    to={`/products/${product.slug}`}
                    className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border border-border/80">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3
                        className="font-bold text-foreground mt-1 mb-1.5 text-base group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                        {product.shortDesc}
                      </p>
                      <span className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                        <span>View Details</span>
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

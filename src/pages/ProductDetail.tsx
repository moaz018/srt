import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Minus, Plus, Sparkles, Check } from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [qty, setQty] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);

  const product = products.find(p => p.slug === slug);
  const related = products.filter(p => p.slug !== slug && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary font-semibold">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: product.name }]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-8 items-start">
            {/* Image */}
            <AnimatedSection animation="slide-left">
              <div className="aspect-square overflow-hidden bg-card border border-border rounded-3xl shadow-lg relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary border border-border/80 shadow-xs">
                  {product.category}
                </div>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection animation="slide-right">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary px-2.5 py-1 rounded-full bg-primary/10 inline-block mb-3">
                  {product.category}
                </span>
                <h1
                  className="text-3xl sm:text-5xl font-black text-foreground mb-4 leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">{product.description}</p>

                {/* Options */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">
                    Available Material / Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {product.options.map((opt, i) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedOption(i)}
                        className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 active:scale-95 flex items-center gap-1.5 ${
                          selectedOption === i
                            ? 'border-primary bg-primary text-white shadow-md shadow-primary/20 scale-105'
                            : 'border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-foreground'
                        }`}
                      >
                        {selectedOption === i && <Check className="w-3.5 h-3.5" />}
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Qty */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">
                    Estimated Quantity
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 active:scale-90 transition-all"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4 text-foreground" />
                    </button>
                    <span className="text-foreground font-bold w-12 text-center text-lg">{qty}</span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 active:scale-90 transition-all"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/quote"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-sm group"
                  >
                    <span>Request a Quote for {qty} items</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 hover:scale-[1.02] active:scale-95 transition-all text-sm"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="p-6 bg-card border border-border rounded-2xl shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Printing Process & Finishing</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{product.printingInfo}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-24">
              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Related Products
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {related.map(p => (
                    <Link
                      key={p.slug}
                      to={`/products/${p.slug}`}
                      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {p.name}
                        </h3>
                        <span className="text-xs text-primary font-semibold mt-1 inline-block">View Details →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Shirt,
  Trophy,
  Coffee,
  Gift,
  Megaphone,
  Zap,
  Palette,
  Package,
  Headphones,
  Sparkles,
  Bed,
  MessageCircle,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import FabricGuide from '../components/FabricGuide';
import FactoryInfrastructure from '../components/FactoryInfrastructure';
import { services } from '../data/services';
import { products } from '../data/products';
import { getSiteConfig } from '../data/siteConfig';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Shirt,
  Trophy,
  Coffee,
  Gift,
  Megaphone,
  Bed,
};

const trustItems = [
  'Custom Designs & Support',
  'High-Definition Printing',
  'Bulk & Small Batch Orders',
  'Fast Turnaround Production',
];

const whyItems = [
  {
    icon: Palette,
    title: 'Quality Printing',
    desc: 'Sharp colors, detailed designs, and professional finishing on every single order.',
  },
  {
    icon: Zap,
    title: 'Custom Solutions',
    desc: 'Printing tailored precisely to your requirements, substrates, size, and medium.',
  },
  {
    icon: Package,
    title: 'Flexible Orders',
    desc: 'Equally equipped for individual, small-batch, and large high-volume corporate requirements.',
  },
  {
    icon: Headphones,
    title: 'Professional Service',
    desc: 'Clear, transparent communication from design review right through to final dispatch.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Share Your Design',
    desc: 'Send your artwork or tell us your concept — our team advises on format and resolution.',
  },
  {
    num: '02',
    title: 'Choose Your Medium',
    desc: 'Select from premium apparel, mugs, corporate gifts, jerseys, or promotional items.',
  },
  {
    num: '03',
    title: 'Printing & Production',
    desc: 'Your design is calibrated and printed using advanced digital sublimation equipment.',
  },
  {
    num: '04',
    title: 'Quality Inspection & Delivery',
    desc: 'Every item passes thorough quality inspection before careful packaging and delivery.',
  },
];

const industries = [
  'Fashion & Apparel',
  'Sports Teams & Clubs',
  'Schools & Universities',
  'Corporate Businesses',
  'Events & Conferences',
  'Marketing & Promotions',
  'Restaurants & Cafés',
  'Personal & Custom Gifts',
];

export default function Home() {
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    const handleConfigChange = () => setSiteConfig(getSiteConfig());
    window.addEventListener('srt_config_updated', handleConfigChange);
    return () => window.removeEventListener('srt_config_updated', handleConfigChange);
  }, []);

  const whatsappPhone = siteConfig.whatsappNumber || '923236602316';
  const whatsappDisplay = siteConfig.whatsappDisplay || '03236602316';

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--navy)] pt-20">
        {/* Animated background glows */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed pointer-events-none"
          aria-hidden="true"
        />

        {/* Real Industrial Sublimation Video Background Loop with Fallback */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop&auto=format"
            className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-1000"
          >
            <source src="https://cdn.coverr.co/videos/coverr-dyeing-textiles-5683/1080p.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-a-machine-42867-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy)]/90 to-[#03170f]/95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Animated pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-primary/30 backdrop-blur-md mb-6 animate-fade-down shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-badge-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Sialkot's Premier Sublimation & Heat Transfer Factory
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary ml-1" />
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] text-white mb-6 animate-fade-up"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Export-Grade <span className="text-gold-gradient">Sublimation</span> Printing & Apparel Manufacturing
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed max-w-2xl animate-fade-up [animation-delay:200ms]">
              Precision molecular dye sublimation on polyester performance fabrics. Powered by dedicated teams of prepress graphic designers, industrial digital printer operators, and continuous rotary heat calender engineers.
            </p>

            {/* Pakistani Fabric & Machine Quick Substrates Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8 animate-fade-up [animation-delay:280ms]">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Substrates:</span>
              {[
                'Machi Kandi (Sports Mesh)',
                'Dhanak (Poly-Slub)',
                'Swiss Lawn (Voile)',
                'Microfibre (Bedsheets)',
                'Poly-Interlock',
                'Continuous Calender (205°C)',
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-lg bg-white/10 text-white/90 text-xs font-semibold border border-white/15 backdrop-blur-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14 animate-fade-up [animation-delay:350ms]">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] active:scale-95 transition-all text-sm group"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Sample Book & PDF Catalogue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${whatsappPhone}?text=Hello%20SRT%20Sublimation%2C%20I%20would%20like%20to%20inquire%20about%20printing%20services%20and%20rates.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20ba59] hover:shadow-xl hover:shadow-emerald-600/30 hover:scale-[1.03] active:scale-95 transition-all text-sm group shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {whatsappDisplay}</span>
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all text-sm border border-white/15 backdrop-blur-sm"
              >
                Request a Quote
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/10 animate-fade-up [animation-delay:500ms]">
              {trustItems.map(item => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="mb-14">
            <SectionHeading
              label="What We Do"
              title="Industrial Printing Services"
              subtitle="Export-grade sublimation and digital printing solutions engineered for global sportswear brands, businesses, and textile manufacturers."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Layers;
              return (
                <AnimatedSection
                  key={service.slug}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex flex-col h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3
                      className="font-bold text-foreground mb-3 text-xl group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {service.shortDesc}
                    </p>
                    <span className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Polyester & Sublimation Science Guide */}
      <FabricGuide />

      {/* Industrial Machinery & Factory Infrastructure */}
      <FactoryInfrastructure />

      {/* Why Choose SRT */}
      <section className="py-24 bg-secondary/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <SectionHeading
                label="Why Choose SRT"
                title="Printing That Makes Your Ideas Stand Out"
                subtitle="We combine technical precision with creative support to deliver results that represent your brand exactly as intended."
              />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group p-4 rounded-xl bg-card/60 border border-border/70 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h4
                        className="font-bold text-foreground mb-1.5 text-base"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format"
                  alt="Professional sublimation printing equipment in operation"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Animated Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-primary text-white rounded-2xl p-6 shadow-2xl animate-float border border-white/20 backdrop-blur-md">
                <p className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  100%
                </p>
                <p className="text-xs sm:text-sm font-semibold opacity-90">Custom Quality Guarantee</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeading
              label="Our Products"
              title="Featured Products"
              subtitle="Explore high-definition custom printed merchandise and apparel."
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 hover:scale-105 active:scale-95 transition-all py-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product, i) => (
              <AnimatedSection
                key={product.slug}
                animation="fade-up"
                delay={i * 60}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border border-border/80">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-foreground mb-1.5 text-base group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {product.shortDesc}
                    </p>
                    <span className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-down" className="mb-16 text-center">
            <SectionHeading
              label="Our Process"
              title="How It Works"
              subtitle="From initial concept to finished product — transparent, rapid, and professional."
              center
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div
              className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <AnimatedSection
                key={step.num}
                animation="fade-up"
                delay={i * 100}
              >
                <div className="group relative bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-primary/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 h-full">
                  <div
                    className="text-4xl font-black text-primary/40 group-hover:text-primary transition-colors mb-4"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {step.num}
                  </div>
                  <h3
                    className="font-bold text-white mb-2.5 text-lg"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="mb-14 text-center">
            <SectionHeading
              label="Who We Serve"
              title="Industries We Work With"
              subtitle="Tailored digital printing solutions across diverse commercial, sporting, and creative sectors."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind} animation="scale" delay={i * 40}>
                <Link
                  to="/industries"
                  className="block bg-card border border-border rounded-xl p-5 text-center text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-[1.03] active:scale-95 transition-all shadow-xs"
                >
                  {ind}
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 hover:scale-105 transition-all"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-secondary/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeading
              label="Our Work"
              title="Recent Projects"
              subtitle="A showcase of real printing work delivered for our happy clients."
            />
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 hover:scale-105 transition-all py-2"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=500&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=400&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&auto=format',
            ].map((src, i) => (
              <AnimatedSection
                key={i}
                animation="fade-up"
                delay={i * 70}
                className={i === 0 || i === 2 ? 'row-span-2' : ''}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-muted h-full shadow-md">
                  <img
                    src={src}
                    alt={`Portfolio item ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ minHeight: i === 0 || i === 2 ? '300px' : '170px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-5">
                    <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white font-semibold text-xs border border-white/30 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      View Project
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Props {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Have a Printing Project in Mind?',
  subtitle = 'Tell us what you need and our team will help you find the right printing solution with fast turnaround.',
}: Props) {
  return (
    <section className="relative bg-[var(--navy)] py-24 overflow-hidden">
      {/* Background glow effects */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/85 text-xs font-bold uppercase tracking-wider mb-5 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Fast Turnaround & Guaranteed Quality</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {title}
          </h2>

          <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] active:scale-95 transition-all text-sm group"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all text-sm border border-white/15 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Our Team</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

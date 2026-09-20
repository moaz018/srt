import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { getSiteConfig } from '../data/siteConfig';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    const handleConfigChange = () => setSiteConfig(getSiteConfig());
    window.addEventListener('srt_config_updated', handleConfigChange);
    return () => window.removeEventListener('srt_config_updated', handleConfigChange);
  }, []);

  const whatsappPhone = siteConfig.whatsappNumber || '923236602316';
  const whatsappDisplay = siteConfig.whatsappDisplay || '03236602316';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-[var(--navy)] py-24 relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-float"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block animate-fade-down">
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Contact Us
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            Have a project, inquiry, or custom requirement? Our digital printing specialists are here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Send a Message
                </h2>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center bg-card border border-border rounded-3xl p-8 shadow-md animate-scale">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 animate-badge-pulse">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out. We will review your message and reply promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-muted text-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-8 sm:p-10 rounded-3xl shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'e.g. John Doe' },
                        { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'name@company.com' },
                        { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+92 300 1234567' },
                        { name: 'subject', label: 'Subject', type: 'text', required: false, placeholder: 'Inquiry about bulk order' },
                      ].map(f => (
                        <div key={f.name}>
                          <label className="block text-xs font-bold text-foreground/80 mb-2 uppercase tracking-wide">
                            {f.label}{f.required && <span className="text-primary ml-1">*</span>}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            required={f.required}
                            placeholder={f.placeholder}
                            value={(form as any)[f.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-2 uppercase tracking-wide">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your requirements, timeline, quantities, or designs..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-sm group"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Info Sidebar */}
            <aside className="space-y-6">
              <AnimatedSection animation="slide-right">
                <div className="bg-card border border-border rounded-3xl p-7 shadow-xs space-y-6">
                  <h3 className="font-bold text-foreground text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Contact Information
                  </h3>
                  <ul className="space-y-5">
                    {[
                      { icon: Phone, label: `${siteConfig.phone || '+92 323 6602316'} / ${siteConfig.whatsappDisplay || '03236602316'}` },
                      { icon: Mail, label: siteConfig.email || 'info@srtprinting.com' },
                      { icon: MapPin, label: siteConfig.factoryAddress || 'Industrial Area, Sialkot, Punjab, Pakistan' },
                      { icon: Clock, label: siteConfig.businessHours || 'Mon–Sat: 8:30am – 7:30pm PKT' },
                    ].map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-start gap-3.5 text-sm text-muted-foreground group">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="mt-1 font-medium">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={150}>
                <a
                  href={`https://wa.me/${whatsappPhone}?text=Hello%20SRT%20Sublimation%2C%20I%20would%20like%20to%20inquire%20about%20printing%20services%20and%20rates.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl px-6 py-4 font-bold text-sm hover:bg-[#20ba59] hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-95 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp ({whatsappDisplay})</span>
                </a>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState, useEffect } from 'react';
import { CheckCircle2, Upload, Sparkles, Send, FileText, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { getSiteConfig } from '../data/siteConfig';

const serviceOptions = [
  'Polyester Sublimation Printing',
  'Sportswear & Team Jersey Manufacturing',
  'MMA Rashguards & Compression Wear',
  'Wide-Format Bedsheets & Home Textiles (Coming Soon)',
  'T-Shirt & Apparel Printing',
  'Ceramic Mugs & Hard Substrates',
  'Custom Gifts & Accessories',
  'Corporate Promotional Merchandise',
  'Bulk Continuous Roll-to-Roll Calender Yardage',
  'Other Custom Manufacturing',
];

const steps = [
  'We receive and review your artwork / specification.',
  'Our team checks print viability and advises on the optimal substrate.',
  'We send transparent pricing, mockup details, and turnaround estimates.',
];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    const handleConfigChange = () => setSiteConfig(getSiteConfig());
    window.addEventListener('srt_config_updated', handleConfigChange);
    return () => window.removeEventListener('srt_config_updated', handleConfigChange);
  }, []);

  const whatsappPhone = siteConfig.whatsappNumber || '923236602316';
  const whatsappDisplay = siteConfig.whatsappDisplay || '03236602316';

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    product: '',
    quantity: '',
    deadline: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 animate-fade-down">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Fast Estimate & Expert Advice</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4 animate-fade-up"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Request a Custom Quote
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up [animation-delay:150ms]">
            Tell us about your printing project and receive tailored pricing with production details promptly.
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
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center bg-card border border-border rounded-3xl p-8 shadow-md animate-scale">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 animate-badge-pulse">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Quote Request Received!
                    </h2>
                    <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed mb-8">
                      Thank you for submitting your details. Our production team will review your requirements and get back to you with pricing options.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFileName(null);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-muted text-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-card border border-border p-8 sm:p-10 rounded-3xl shadow-sm"
                  >
                    {[
                      { name: 'name', label: 'Full Name', required: true, type: 'text', placeholder: 'John Doe' },
                      { name: 'company', label: 'Company / Team Name', required: false, type: 'text', placeholder: 'Acme Sports Ltd' },
                      { name: 'email', label: 'Email Address', required: true, type: 'email', placeholder: 'john@example.com' },
                      { name: 'phone', label: 'Phone / WhatsApp', required: false, type: 'tel', placeholder: '+92 300 0000000' },
                      { name: 'product', label: 'Product / Item Type', required: false, type: 'text', placeholder: 'e.g. Football Jerseys, Ceramic Mugs' },
                      { name: 'quantity', label: 'Estimated Quantity', required: false, type: 'number', placeholder: 'e.g. 50' },
                      { name: 'deadline', label: 'Target Deadline', required: false, type: 'date', placeholder: '' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-xs font-bold text-foreground/80 mb-2 uppercase tracking-wide">
                          {field.label}
                          {field.required && <span className="text-primary ml-1">*</span>}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={(form as any)[field.name]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-2 uppercase tracking-wide">
                        Service Required <span className="text-primary">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select a service category</option>
                        {serviceOptions.map(s => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-foreground/80 mb-2 uppercase tracking-wide">
                        Artwork & Specifications
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your design, sizing, colors, fabric preferences, or special finishing..."
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-foreground/80 mb-2 uppercase tracking-wide">
                        Upload Artwork / Logo (Optional)
                      </label>
                      <label className="border-2 border-dashed border-border rounded-2xl px-6 py-8 flex flex-col items-center justify-center gap-2.5 text-muted-foreground text-sm cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".png,.jpg,.jpeg,.pdf,.ai,.svg"
                        />
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          {fileName ? <FileText className="w-5 h-5 text-primary" /> : <Upload className="w-5 h-5" />}
                        </div>
                        <span className="font-semibold text-foreground text-xs sm:text-sm">
                          {fileName ? `Selected: ${fileName}` : 'Click to select or drag & drop design file'}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          AI, EPS, SVG, PNG, JPG, PDF up to 25MB
                        </span>
                      </label>
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-sm group"
                      >
                        <span>Submit Quote Request</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside>
              <AnimatedSection animation="slide-right">
                <div className="bg-card border border-border rounded-3xl p-7 sticky top-24 shadow-xs space-y-6">
                  <h3 className="font-bold text-foreground text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    What Happens Next?
                  </h3>
                  <ol className="space-y-5">
                    {steps.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          0{i + 1}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      ⏱️ Quotes are usually processed within a few business hours (Mon–Sat: 8:30am–7:30pm PKT).
                    </p>
                  </div>

                  {/* Direct WhatsApp Option */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${whatsappPhone}?text=Hello%20SRT%20Sublimation%2C%20I%20want%20an%20instant%20production%20quote%20for%20my%20order.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Instant WhatsApp Quote ({whatsappDisplay})</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

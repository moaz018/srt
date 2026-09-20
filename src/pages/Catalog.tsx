import { useState } from 'react';
import {
  Download,
  FileText,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Eye,
  CheckCircle2,
  Maximize2,
  X,
  Share2,
  Tag,
  Grid
} from 'lucide-react';
import { CATALOG_DESIGNS, CATALOG_PDF_URL, CatalogDesign } from '../data/catalog';
import AnimatedSection from '../components/AnimatedSection';

const WHATSAPP_PHONE = '923236602316';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDesign, setSelectedDesign] = useState<CatalogDesign | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Collections (9 Designs)' },
    { id: '3D Sculpted Baroque & Gold Relief', label: '3D Baroque & Gold Relief' },
    { id: '3D Romantic & Velvet', label: 'Romantic & Velvet Textures' },
    { id: '3D Jewel & Crystal', label: 'Jewel & Crystal Botanicals' },
    { id: '3D Kids & Whimsical', label: 'Kids & Whimsical Bedding' },
  ];

  const filteredDesigns =
    selectedCategory === 'all'
      ? CATALOG_DESIGNS
      : CATALOG_DESIGNS.filter(d => d.collection === selectedCategory);

  const handleWhatsAppInquiry = (design: CatalogDesign) => {
    const text = `Hello Sabiha Ramzan Textile (SRT)!\n\nI would like to inquire about production & rates for:\n• Design Code: *${design.id}*\n• Title: ${design.title}\n• Collection: ${design.collection}\n• Repeat Size: ${design.size}\n• Recommended Substrate: ${design.fabric}\n\nPlease share price per meter/yard, sample swatch, and MOQ.`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGeneralWhatsApp = () => {
    const text = `Hello Sabiha Ramzan Textile (SRT)!\n\nI reviewed your 3D Royal Collection Sample Book (PDF Catalogue) on your website. I would like to inquire about custom fabric sampling and bulk sublimation printing.`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyDesignCode = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card via-card/80 to-background border-b border-border/70 py-12 md:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official 3D Royal Swatch Catalogue & PDF Book</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Sabiha Ramzan Textile Pvt Ltd.
            </h1>
            <p className="text-lg md:text-xl font-medium text-primary mb-3">
              3D Royal Collection &bull; 12 x 12 in &bull; Home Textile Sample Book
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="italic font-serif text-foreground/80">"Designed for Elegant Living"</span> — High-definition sublimation textile designs crafted for bedsheets, luxury duvet sets, and apparel with exact design reference numbers and downloadable print-ready PDF book.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={CATALOG_PDF_URL}
                download="SRT-Sample-Book-3D-Royal-Collection.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF Sample Book</span>
              </a>

              <a
                href={CATALOG_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-muted/80 hover:border-primary/50 transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-primary" />
                <span>Open PDF in Browser</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </a>

              <button
                onClick={handleGeneralWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Factory Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Collection Filter Tabs */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border/80 hover:bg-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Grid className="w-4 h-4 text-primary" />
            <span>{filteredDesigns.length} Designs</span>
          </div>
        </div>

        {/* Hanger Swatches Grid (Matching the luxury physical sample card layout) */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="group relative flex flex-col bg-card rounded-2xl border border-border/80 shadow-md hover:shadow-2xl hover:border-primary/60 transition-all duration-300 overflow-hidden"
              >
                {/* Luxury Hanger Tab at top (Matching the sample book card cutout format) */}
                <div className="relative bg-gradient-to-b from-muted to-muted/60 border-b border-border/80 px-4 py-2.5 flex items-center justify-between select-none">
                  {/* Metallic hanger hole cutout */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-border/90 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  </div>

                  {/* Card Brand Header */}
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-black tracking-wider text-primary font-serif">SRT</span>
                    <span className="text-[7.5px] uppercase tracking-wider text-muted-foreground font-medium">Sabiha Ramzan Textile</span>
                  </div>

                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-bold text-foreground">3D Royal Collection</span>
                    <span className="text-[8px] text-muted-foreground font-mono">12 x 12 in</span>
                  </div>
                </div>

                {/* Swatch Image Area */}
                <div
                  className="relative aspect-square overflow-hidden bg-neutral-950/20 cursor-pointer"
                  onClick={() => setSelectedDesign(design)}
                >
                  <img
                    src={design.image}
                    alt={`${design.title} - ${design.id}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Design Number Badge - Bottom Left (Authentic Sample Card Badge) */}
                  <div className="absolute bottom-2.5 left-2.5 z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 dark:bg-card/95 backdrop-blur-md border border-[#D4AF37] shadow-lg">
                      <span className="text-xs font-black tracking-wider text-neutral-900 dark:text-neutral-100 font-mono">
                        {design.id}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyDesignCode(design.id);
                        }}
                        title="Copy Code"
                        className="text-neutral-500 hover:text-primary transition-colors"
                      >
                        {copiedId === design.id ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <Share2 className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="px-3.5 py-2 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      Inspect Design
                    </span>
                  </div>
                </div>

                {/* Swatch Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
                      <span className="font-medium text-primary">{design.categoryLabel}</span>
                      <span className="font-mono text-[10px]">{design.size}</span>
                    </div>
                    <h3 className="font-bold text-sm text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {design.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {design.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDesign(design)}
                      className="flex-1 py-2 px-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => handleWhatsAppInquiry(design)}
                      className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-sm transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Catalogue Showcase & Download Section */}
        <AnimatedSection className="mt-16">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: PDF Info */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Official Factory Swatch Book</span>
                </div>

                <h2
                  className="text-2xl sm:text-3xl font-black text-foreground mb-3 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Download the Complete 3D Royal Sample Book (PDF)
                </h2>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Download the complete multi-page sample book featuring all 9 sculpted 3D textile designs in full resolution, formatted in luxury 4x2 hanger card spreads with exact design codes (`SRT-3DR-001` through `SRT-3DR-009`), fabric specifications, and rotary sublimation calender specs.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-background/80 border border-border">
                    <span className="block text-[11px] text-muted-foreground uppercase font-medium">Standard Repeat</span>
                    <span className="font-bold text-foreground text-sm">12 x 12 in (Seamless)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-background/80 border border-border">
                    <span className="block text-[11px] text-muted-foreground uppercase font-medium">Design Count</span>
                    <span className="font-bold text-foreground text-sm">9 Exclusive Designs</span>
                  </div>
                  <div className="p-3 rounded-xl bg-background/80 border border-border">
                    <span className="block text-[11px] text-muted-foreground uppercase font-medium">Layout Style</span>
                    <span className="font-bold text-foreground text-sm">Luxury Hanger Swatches</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={CATALOG_PDF_URL}
                    download="SRT-Sample-Book-3D-Royal-Collection.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF File</span>
                  </a>

                  <a
                    href={CATALOG_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-muted transition-all"
                  >
                    <Eye className="w-4 h-4 text-primary" />
                    <span>View in New Tab</span>
                  </a>
                </div>
              </div>

              {/* Right Column: PDF Preview Mockup using real design #1 */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-neutral-900 shadow-2xl">
                    <img
                      src="/catalog/design-srt-3dr-001.jpg"
                      alt="3D Royal Collection Sample Book Cover Preview"
                      className="w-full h-auto aspect-4/3 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card/95 border-t border-border flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground">SRT-Sample-Book-3D-Royal-Collection.pdf</span>
                        <span className="text-[10px] text-muted-foreground">High-Resolution Multi-Page PDF</span>
                      </div>
                      <a
                        href={CATALOG_PDF_URL}
                        download
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* High Resolution Lightbox Modal */}
      {selectedDesign && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="relative bg-card rounded-3xl border border-border max-w-4xl w-full overflow-hidden shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedDesign(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="relative bg-neutral-950 flex items-center justify-center p-4 min-h-[350px]">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="max-h-[500px] w-auto object-contain rounded-xl shadow-lg"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#D4AF37] text-white font-mono font-black text-sm shadow-xl">
                    {selectedDesign.id}
                  </span>
                </div>
              </div>

              {/* Details side */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-primary/10">
                      {selectedDesign.collection}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{selectedDesign.size}</span>
                  </div>

                  <h2
                    className="text-2xl font-bold text-foreground mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {selectedDesign.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {selectedDesign.description}
                  </p>

                  <div className="space-y-2.5 text-xs text-foreground mb-6">
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Product Category:</span>
                      <span className="font-semibold">{selectedDesign.categoryLabel}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Recommended Fabric:</span>
                      <span className="font-semibold">{selectedDesign.fabric}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Pattern Repeat:</span>
                      <span className="font-semibold">{selectedDesign.size}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Printing Method:</span>
                      <span className="font-semibold">Sublimation Heat Transfer (Continuous Roll)</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedDesign.tags.map(t => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <button
                    onClick={() => handleWhatsAppInquiry(selectedDesign)}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire Design {selectedDesign.id} on WhatsApp</span>
                  </button>

                  <a
                    href={selectedDesign.image}
                    download={`${selectedDesign.id}.jpg`}
                    className="w-full py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download High-Res Swatch</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

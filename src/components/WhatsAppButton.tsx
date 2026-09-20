import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, PhoneCall } from 'lucide-react';

const WHATSAPP_NUMBER = '923236602316';
const DISPLAY_PHONE = '03236602316';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Show auto tooltip prompt once after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || 'Hello SRT Sublimation, I would like to inquire about printing services, rates, and roll-to-roll fabric printing.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Interactive Popover */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-80 sm:w-96 rounded-2xl bg-card border border-primary/30 shadow-2xl shadow-black/40 overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white border border-white/30">
                  <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="SRT Logo" className="w-6 h-6 object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">SRT Sublimation Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Sialkot Factory</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-muted/40 space-y-3 text-xs sm:text-sm">
            <div className="bg-card p-3 rounded-xl border border-border shadow-sm text-foreground/90 leading-relaxed">
              <p className="font-semibold text-primary mb-1 flex items-center gap-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Production Inquiries</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Salam! Welcome to SRT Sublimation Printing Sialkot. How can we help your order today?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                Quick Inquiries:
              </p>
              {[
                'Quote for Machi Kandi Jersey Printing',
                'Dhanak & Swiss Lawn Printing rates',
                'Microfibre Bedsheet Roll-to-Roll enquiry',
                'Sample sampling & custom mockups',
              ].map((text) => (
                <button
                  key={text}
                  onClick={() => openWhatsApp(text)}
                  className="w-full text-left p-2 rounded-lg bg-card hover:bg-primary/10 hover:border-primary/40 border border-border text-xs text-foreground font-medium transition-all flex items-center justify-between group"
                >
                  <span>{text}</span>
                  <Send className="w-3 h-3 text-primary group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Direct WhatsApp:</span>
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="font-bold text-primary hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>{DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-card border-t border-border">
            <button
              onClick={() => openWhatsApp()}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Pulsing Tooltip Prompt (before user opens) */}
      {!isOpen && hasPrompted && (
        <div className="pointer-events-auto mb-2 flex items-center gap-2 bg-card/95 backdrop-blur-md text-foreground px-3.5 py-2 rounded-full border border-primary/30 shadow-xl animate-fade-left">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="text-xs font-semibold">Chat with Factory on WhatsApp</span>
          <button
            onClick={() => setHasPrompted(false)}
            className="text-muted-foreground hover:text-foreground ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-emerald-900/50 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Open WhatsApp conversation with SRT Sublimation (03236602316)"
        title={`WhatsApp: ${DISPLAY_PHONE}`}
      >
        {/* Animated Ripple Waves */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-20 blur-sm group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10 drop-shadow-md" />

        {/* Online Status Badge */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center z-20 shadow">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
        </span>
      </button>
    </div>
  );
}

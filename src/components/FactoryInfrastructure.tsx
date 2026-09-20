import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  Flame,
  Palette,
  CheckCircle,
  Bed,
  ArrowRight,
  Sparkles,
  Cpu,
  Zap,
  Clock,
  ShieldCheck,
  Maximize2,
  Sliders,
  RotateCw,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { getSiteConfig } from '../data/siteConfig';

const machines = [
  {
    name: 'Rotary Drum Continuous Calender (Roll-to-Roll)',
    category: 'Continuous Heat Transfer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    specs: {
      drumDiameter: '420mm Heated Oil Jacket',
      width: '1800mm (Upgrading to 3200mm)',
      temperature: '200°C – 215°C (±1°C Precision)',
      speed: '250 – 400 linear meters/hour',
    },
    desc: 'Equipped with continuous feeding shafts for printed sublimation paper, raw polyester rolls, and protective tissue paper. The oil-heated drum guarantees consistent molecular bonding across the entire roll without edge shading.',
    highlights: ['Zero Ghosting Feed', 'Pneumatic Belt Tensioning', 'Roll-to-Piece & Roll-to-Roll Modes'],
  },
  {
    name: 'Multi-Station Industrial Dye Sublimation Plotters',
    category: 'High-Speed Digital Printing',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    specs: {
      printheads: 'Staggered Dual/Quad MicroPiezo Heads',
      resolution: 'Up to 1440 × 1440 DPI',
      colorChannels: 'CMYK + Fluorescent Neon (Pink & Yellow)',
      inkCapacity: 'Bulk 2-Liter Degassed Ink Tanks',
    },
    desc: 'High-output Japanese digital printing engines designed for continuous 24/7 industrial runs. Staggered heads deliver rich gradient transitions and microscopic detail for sports numbers, sponsor crests, and intricate Pakistani lawn borders.',
    highlights: ['Micro-Drop Piezo Precision', 'Anti-Clog Auto Head Cleaning', 'Variable Dot Technology'],
  },
  {
    name: 'Large-Format Pneumatic Twin-Tray Flatbed Heat Press',
    category: 'Panel & Cut-Piece Transfer',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
    specs: {
      platenSize: '100cm × 120cm Dual Shuttle Trays',
      pressureSystem: 'Heavy-Duty Pneumatic 8-Bar Cylinder',
      cyclingTime: 'Dual Bed Shuttle (Continuous Operation)',
      digitalControl: 'Microprocessor PID Heat Controller',
    },
    desc: 'Designed for precision panel pressing: front and back jersey panels, sleeves, shorts, flags, and hard promotional blanks. While one tray is under 200°C heat, the operator sets up the next panel on the secondary tray for zero downtime.',
    highlights: ['Dual Shuttle Trays', 'Uniform Hydraulic Pressure', 'Laser Positioning Guides'],
  },
  {
    name: 'Prepress RIP Station & Spectrophotometer Lab',
    category: 'Color Management & Design',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
    specs: {
      software: 'ErgoSoft & Wasatch RIP Workstations',
      colorProfiling: 'X-Rite i1Pro Spectrophotometer',
      monitors: '100% Adobe RGB Color-Calibrated Displays',
      matching: 'Pantone Formula Guide PMS Matching',
    },
    desc: 'Our senior prepress design engineers create custom ICC color profiles for each fabric blend (Machi Kandi, Dhanak, Swiss Lawn, Microfibre). Ensures that your on-screen design renders with 100% color accuracy on the final finished fabric.',
    highlights: ['Custom Fabric ICC Profiles', 'Pantone PMS Verification', '3D Athletic Mockups'],
  },
];

const teams = [
  {
    icon: Palette,
    title: 'Prepress & Graphic Design Studio',
    desc: 'Our in-house design team handles vectorization, Pantone PMS matching, ICC color profiling, seamless repeat patterns, and 3D digital apparel mockups prior to print.',
    specs: ['Vector Retracing', 'Pantone Color Calibration', '3D Apparel Mockups', 'Repeat Pattern Engineering'],
  },
  {
    icon: Printer,
    title: 'Industrial Digital Printer Operators',
    desc: 'Certified printer operators commanding multi-station Japanese wide-format digital sublimation plotters equipped with micro-piezo heads and high-density CMYK & fluorescent neon inks.',
    specs: ['Epson & Mimaki Piezo Heads', 'High-Density Italian Inks', 'Fluorescent Neon Channels', 'Up to 1440 DPI Precision'],
  },
  {
    icon: Flame,
    title: 'Heat Transfer & Calender Engineers',
    desc: 'Master technicians managing continuous oil-heated rotary drum calenders and pneumatic flatbed heat presses, controlling pressure, dwell time, and exact 205°C vaporization heat.',
    specs: ['Rotary Drum Calenders', 'Pneumatic Twin-Tray Flatbeds', 'Zero Ghosting Technology', 'Deep Molecular Fusion'],
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance & Export Packing',
    desc: 'Every completed production run undergoes light-box color fidelity inspection, stretch testing, thread trimming, and international export-grade poly packaging.',
    specs: ['D65 Standard Lightbox Check', 'Wash Fastness Verification', 'Defect-Zero Tolerance', 'Global Export Packing'],
  },
];

export default function FactoryInfrastructure() {
  const [activeMachineIndex, setActiveMachineIndex] = useState(0);
  const [siteConfig, setSiteConfig] = useState(getSiteConfig());

  useEffect(() => {
    const handleConfigChange = () => setSiteConfig(getSiteConfig());
    window.addEventListener('srt_config_updated', handleConfigChange);
    return () => window.removeEventListener('srt_config_updated', handleConfigChange);
  }, []);

  const whatsappPhone = siteConfig.whatsappNumber || '923236602316';
  const activeMachine = machines[activeMachineIndex];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="machinery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/25 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Infrastructure & Machine Fleet</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-black text-foreground tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Real Sublimation Machinery & <span className="text-gold-gradient">Roll-to-Roll Calenders</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            SRT owns and operates genuine industrial-grade Japanese plotters and rotary calender oil drums in Sialkot, Pakistan. Here is an inside look at our machinery specifications and continuous roll production capabilities.
          </p>
        </AnimatedSection>

        {/* Real Machines Interactive Showcase */}
        <AnimatedSection animation="fade-up" delay={50} className="mb-20">
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
            {/* Machine tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-border/70 scrollbar-thin">
              {machines.map((m, idx) => (
                <button
                  key={m.name}
                  onClick={() => setActiveMachineIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 active:scale-95 ${
                    activeMachineIndex === idx
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {m.name.split(' ')[0]} {m.name.split(' ')[1]}
                </button>
              ))}
            </div>

            {/* Active Machine Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image & Badges */}
              <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden border border-border shadow-lg group">
                <img
                  src={activeMachine.image}
                  alt={`${activeMachine.name} running in factory`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-primary font-bold text-xs border border-primary/30">
                    {activeMachine.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-base sm:text-lg font-black leading-tight">
                    {activeMachine.name}
                  </h4>
                </div>
              </div>

              {/* Specs & Description */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-2">
                    {activeMachine.category}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-black text-foreground"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {activeMachine.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {activeMachine.desc}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                  {Object.entries(activeMachine.specs).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-[11px] text-muted-foreground uppercase font-semibold capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-foreground">{val}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeMachine.highlights.map(h => (
                    <span
                      key={h}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/25 flex items-center gap-1.5"
                    >
                      <Zap className="w-3 h-3 text-primary" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 4 Specialized Divisions Grid */}
        <AnimatedSection animation="fade-up" className="mb-8">
          <h3
            className="text-2xl sm:text-3xl font-black text-foreground mb-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Specialized Production Teams on Factory Floor
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Every step is handled by dedicated master technicians who specialize exclusively in their department.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teams.map((team, i) => {
            const Icon = team.icon;
            return (
              <AnimatedSection key={team.title} animation="fade-up" delay={i * 80}>
                <div className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {team.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {team.desc}
                  </p>
                  <div className="pt-4 border-t border-border/80">
                    <div className="grid grid-cols-2 gap-2">
                      {team.specs.map(spec => (
                        <div key={spec} className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* COMING SOON EXPANSION BANNER: BEDSHEETS & HOME TEXTILES */}
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="relative bg-[var(--navy)] rounded-3xl p-8 sm:p-12 overflow-hidden border border-primary/30 shadow-2xl">
            {/* Background glowing gradient */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-black uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Expansion Alert • Commissioning Soon</span>
                </div>

                <h3
                  className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  New 3.2-Meter Machinery Arriving for{' '}
                  <span className="text-gold-gradient">Bedsheets & Home Textiles</span>
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
                  We are actively commissioning ultra-wide continuous roll-to-roll calenders and 3.2m industrial plotters specifically engineered for <strong>Double, King & Queen bedsheets, duvet covers, brushed microfibre bedding, curtains, and luxury home drapery</strong>.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  {[
                    '3.2m / 126" Seamless Width',
                    'Microfibre & Poly-Sateen Ready',
                    'Continuous Roll-to-Roll Output',
                    'Hypoallergenic Eco-Inks',
                    'Hotel-Grade Wash-Proof Quality',
                  ].map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-white/10 text-white/90 text-xs font-semibold border border-white/15 backdrop-blur-sm"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all text-sm group text-center"
                >
                  <span>Pre-Book Bedsheet Capacity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${whatsappPhone}?text=Hello%20SRT%20Sublimation%2C%20I%20am%20interested%20in%20the%20upcoming%203.2m%20bedsheet%20and%20home%20textiles%20roll-to-roll%20machinery.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20ba59] active:scale-95 transition-all text-sm border border-white/15 text-center shadow-md"
                >
                  <span>WhatsApp Bedsheet Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

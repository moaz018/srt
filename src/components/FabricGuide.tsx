import { useState } from 'react';
import { Layers, CheckCircle2, Flame, Sparkles, ShieldCheck, Cpu, ArrowRight, Gauge, Thermometer, Wind } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export interface PakistaniFabric {
  id: string;
  name: string;
  urduName: string;
  subtitle: string;
  polyPercentage: number;
  gsm: string;
  weaveType: string;
  handFeel: string;
  vibrancy: number;
  breathability: number;
  durability: number;
  tempCelsius: string;
  transferTime: string;
  image: string;
  badge: string;
  badgeColor: string;
  bestFor: string[];
  sublimationScience: string;
  sialkotNote: string;
}

export const pakistaniFabrics: PakistaniFabric[] = [
  {
    id: 'machi-kandi',
    name: 'Machi Kandi (Fish Scale Mesh)',
    urduName: 'مچھی کانڈی فیبرک',
    subtitle: 'Honeycomb Birdseye Eyelet Knit Polyester',
    polyPercentage: 100,
    gsm: '145 – 160 GSM',
    weaveType: 'Warp-knit Jacquard Eyelet (Fish Scale Micro-Pores)',
    handFeel: 'Ultra-light, textured, cooling moisture-wicking',
    vibrancy: 100,
    breathability: 100,
    durability: 98,
    tempCelsius: '200°C – 205°C',
    transferTime: '30 – 35 Seconds',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
    badge: '#1 Sialkot Sportswear Export',
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    bestFor: [
      'Pro Soccer & Football Club Kits',
      'Pakistan National & League Cricket Jerseys',
      'Marathon & Running Breathable Singlets',
      'Basketball Uniforms & Gym Training Vests',
      'School & College Sports Day Uniforms',
    ],
    sublimationScience:
      'The micro-hexagonal pores (known in Sialkot as Machi Kandi due to their fish-scale shape) allow gaseous disperse dye to embed deeply into both the outer face and the inner pore walls. At 200°C, dye molecules chemically lock into the 100% poly filaments, guaranteeing that colors never choke ventilation holes or wash out after 200+ match washings.',
    sialkotNote:
      'The undisputed king of Sialkot sports manufacturing. Our rotary calenders apply calibrated tension so the micro-pores maintain uniform shape without distorted numbers or logos.',
  },
  {
    id: 'dhanak',
    name: 'Dhanak (Sublimation Poly-Dhanak)',
    urduName: 'دھنک فیبرک (سبلیمیشن)',
    subtitle: 'Textured Winter Slub Ribbed Fabric',
    polyPercentage: 90,
    gsm: '230 – 270 GSM',
    weaveType: 'Textured Slub Weave with Horizontal Ribbing',
    handFeel: 'Warm, substantial, soft wool-like textured drape',
    vibrancy: 95,
    breathability: 75,
    durability: 96,
    tempCelsius: '195°C – 200°C',
    transferTime: '35 – 40 Seconds',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    badge: 'Winter Apparel Essential',
    badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    bestFor: [
      'Winter 3-Piece Ladies Digital Printed Suits',
      'Ethnic Designer Shawls & Chaddars',
      'Men’s Cultural Formal Waistcoats & Kurta Overlays',
      'Winter Fashion Kurtis & Long Tunics',
      'Cozy Winter Scarves & Stoles',
    ],
    sublimationScience:
      'Engineered with high-poly textured slub yarn, Sublimation Dhanak absorbs deep, saturated tones—especially royal maroon, bottle green, jet black, and golden mustard. The dye bonds into the thick slub ribs without stiffening the warm hand-feel or causing surface piling.',
    sialkotNote:
      'We use controlled low-crush pneumatic calender pressing so the signature raised slub texture of Dhanak remains fluffy and tactile after heat transfer.',
  },
  {
    id: 'swiss-lawn',
    name: 'Swiss Lawn (Poly-Swiss Voile)',
    urduName: 'سوئس لان (پولی بلینڈ)',
    subtitle: 'Featherlight Breathable Summer Voile',
    polyPercentage: 85,
    gsm: '75 – 95 GSM',
    weaveType: 'Fine Plain Voile Weave (Micro-Filament)',
    handFeel: 'Breezy, silky, semi-sheer, zero-weight touch',
    vibrancy: 92,
    breathability: 96,
    durability: 90,
    tempCelsius: '190°C – 195°C',
    transferTime: '25 – 30 Seconds',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&auto=format&fit=crop&q=80',
    badge: 'Summer Designer Staple',
    badgeColor: 'bg-sky-500/10 text-sky-500 border-sky-500/30',
    bestFor: [
      'Pakistani Luxury Summer Lawn Kurtis',
      'Semi-Sheer Digital Printed Dupattas',
      'Designer Tunics & Kaftans',
      'Boutique Summer Scarves & Resortwear',
      'Women’s Flowing Eastern Pret Lines',
    ],
    sublimationScience:
      'Traditional cotton lawn cannot hold sublimation dyes. SRT’s Poly-Swiss Lawn is spun from micro-denier poly filaments that perfectly replicate the breezy coolness of Swiss cotton while accepting 1440 DPI digital sublimation with absolutely zero ink feel ("zero hand-feel").',
    sialkotNote:
      'Printed with high-precision fine line registration for intricate Pakistani floral jaals, baroque borders, and pastel watercolor gradients.',
  },
  {
    id: 'microfibre',
    name: 'Microfibre (Peach-Poly Bedding & Apparel)',
    urduName: 'مائیکرو فائبر (بیڈ شیٹ فیبرک)',
    subtitle: 'Ultra-Dense Brushed Peach Skin Fabric',
    polyPercentage: 100,
    gsm: '110 – 135 GSM',
    weaveType: 'Ultra-Dense Micro Plain Weave with Brushed Finish',
    handFeel: 'Velvety smooth, soft peach fuzz, luxurious skin contact',
    vibrancy: 100,
    breathability: 88,
    durability: 100,
    tempCelsius: '205°C',
    transferTime: '30 Seconds',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=80',
    badge: '3.2m Wide Bedsheet Ready',
    badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/30',
    bestFor: [
      'Export-Quality King & Queen Bedsheet Sets',
      'Duvet Covers, Comforter Shells & Pillow Shams',
      'Boardshorts & Water-Repellent Beachwear',
      'MMA Fight Shorts & Sublimated Rashguard Panels',
      'Luxury Hospitality Bedding & Hotel Linen',
    ],
    sublimationScience:
      'Because microfibre yarns are 100 times finer than a human hair, the surface acts like high-gloss photo paper. Sublimation gas creates razor-sharp edge definition with photographic gradients. The colors never wash out or pill even after 300+ commercial laundry cycles.',
    sialkotNote:
      'The flagship substrate for our upcoming 3.2-meter wide roll-to-roll continuous calender line, purpose-built for seamless double-bedsheet manufacturing.',
  },
  {
    id: 'poly-interlock',
    name: 'Poly Interlock (Pro Teamwear)',
    urduName: 'پولی انٹرلاک فیبرک',
    subtitle: 'Double-Knit Smooth Face Athletic Polyester',
    polyPercentage: 100,
    gsm: '160 – 190 GSM',
    weaveType: 'Double-knit Interlock (Zero eyelets, ultra-smooth face)',
    handFeel: 'Silky smooth, high opacity, drape-resistant',
    vibrancy: 100,
    breathability: 90,
    durability: 99,
    tempCelsius: '200°C',
    transferTime: '35 Seconds',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
    badge: 'Pro Club Kit Standard',
    badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
    bestFor: [
      'Official Team Match Kits (Home & Away)',
      'Sublimated Athletic Track Jackets',
      'High-Resolution Graphic Banners & Flags',
      'Motorbike Racing Under-Suits',
    ],
    sublimationScience:
      'Without eyelet holes, Interlock provides an uninterrupted surface for solid ink laydown. Deep pantone matches and fine typography render with pristine vector sharpness.',
    sialkotNote:
      'Heavily utilized for European and American brand OEM manufacturing in Sialkot.',
  },
  {
    id: 'poly-lycra',
    name: 'Poly-Spandex / Lycra (4-Way Stretch)',
    urduName: 'لائیکرا / اسپینڈیکس',
    subtitle: '88% Poly / 12% Elastane High-Compression Weave',
    polyPercentage: 88,
    gsm: '220 – 260 GSM',
    weaveType: 'High-Gauge Circular Knit with Elastane Core',
    handFeel: 'Second-skin compression, ultra-resilient rebound',
    vibrancy: 96,
    breathability: 85,
    durability: 97,
    tempCelsius: '195°C',
    transferTime: '28 – 32 Seconds',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    badge: 'Combat & Compression Grade',
    badgeColor: 'bg-rose-500/10 text-rose-500 border-rose-500/30',
    bestFor: [
      'BJJ & MMA Sublimated Rashguards',
      'Compression Spats & Gym Leggings',
      'Professional Cycling Kits & Speedsuits',
      'Wrestling Singlets & Athletic Swimwear',
    ],
    sublimationScience:
      'Specially treated so disperse ink penetrates deeply into the relaxed poly matrix. When stretched to 200% on athlete muscles, the graphics do not reveal white fabric grin-through.',
    sialkotNote:
      'Tested with industrial stretch-recovery gauges to ensure zero graphic shear or peeling under grappling friction.',
  },
];

export default function FabricGuide() {
  const [selectedFabricId, setSelectedFabricId] = useState(pakistaniFabrics[0].id);
  const activeFabric =
    pakistaniFabrics.find(f => f.id === selectedFabricId) || pakistaniFabrics[0];

  return (
    <section className="py-24 bg-card border-y border-border/80 relative overflow-hidden" id="fabric-guide">
      {/* Glow effects */}
      <div
        className="absolute top-1/3 right-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/25 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Pakistani Textile Science & Sialkot Varieties</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-black text-foreground tracking-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Sublimation Fabric Catalog: <span className="text-gold-gradient">Machi Kandi, Dhanak & Beyond</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Sublimation is molecular chemistry: higher polyester percentage produces richer colors and indestructible durability. Discover how Sialkot's most famous sportswear and Pakistani fashion fabrics behave under industrial rotary heat transfer.
          </p>
        </AnimatedSection>

        {/* Fabric Filter Tabs */}
        <AnimatedSection animation="fade-up" delay={50} className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-2 bg-muted/60 rounded-2xl border border-border">
            {pakistaniFabrics.map((fabric) => {
              const isSelected = fabric.id === selectedFabricId;
              return (
                <button
                  key={fabric.id}
                  onClick={() => setSelectedFabricId(fabric.id)}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-xl transition-all duration-200 active:scale-95 text-center ${
                    isSelected
                      ? 'bg-card text-foreground shadow-lg border border-primary/40 font-bold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/40'
                  }`}
                >
                  <span className="text-xs font-bold truncate max-w-full">{fabric.name.split(' ')[0]} {fabric.name.split(' ')[1] || ''}</span>
                  <span className="text-[10px] text-primary/80 font-mono mt-0.5">{fabric.polyPercentage}% Poly</span>
                  <span className="text-[10px] text-muted-foreground/75 mt-0.5">{fabric.urduName}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Detailed Fabric Spotlight Card */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="bg-background border border-border rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Image & Badges */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border shadow-md group">
                  <img
                    src={activeFabric.image}
                    alt={`${activeFabric.name} sublimation fabric sample`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Overlay tags */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md ${activeFabric.badgeColor}`}>
                      {activeFabric.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-primary mb-0.5">{activeFabric.urduName}</p>
                    <p className="text-sm font-black leading-snug">{activeFabric.name}</p>
                    <p className="text-[11px] text-white/70">{activeFabric.subtitle}</p>
                  </div>
                </div>

                {/* Quick Parameter Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] mb-1">
                      <Gauge className="w-3.5 h-3.5 text-primary" />
                      <span>Fabric Weight</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">{activeFabric.gsm}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] mb-1">
                      <Thermometer className="w-3.5 h-3.5 text-primary" />
                      <span>Calender Heat</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">{activeFabric.tempCelsius}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] mb-1">
                      <Wind className="w-3.5 h-3.5 text-primary" />
                      <span>Weave Structure</span>
                    </div>
                    <p className="text-[11px] font-semibold text-foreground line-clamp-1">{activeFabric.weaveType}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] mb-1">
                      <Cpu className="w-3.5 h-3.5 text-primary" />
                      <span>Transfer Dwell</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">{activeFabric.transferTime}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Technical Analysis */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {activeFabric.polyPercentage}% Polyester Base
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {activeFabric.handFeel}
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-black text-foreground"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {activeFabric.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {activeFabric.sublimationScience}
                </p>

                {/* Sialkot Expert Factory Note */}
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/25 space-y-1">
                  <p className="text-xs font-bold text-primary flex items-center gap-1.5 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Sialkot Production Reality</span>
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                    {activeFabric.sialkotNote}
                  </p>
                </div>

                {/* Performance Gauges */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-foreground mb-1">
                      <span>Color Vibrancy & Ink Saturation</span>
                      <span className="text-primary">{activeFabric.vibrancy}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold-gradient rounded-full transition-all duration-700"
                        style={{ width: `${activeFabric.vibrancy}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-foreground mb-1">
                      <span>Breathability & Porosity</span>
                      <span className="text-primary">{activeFabric.breathability}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold-gradient rounded-full transition-all duration-700"
                        style={{ width: `${activeFabric.breathability}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-foreground mb-1">
                      <span>Wash-Fastness & Rub Resistance</span>
                      <span className="text-primary">{activeFabric.durability}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold-gradient rounded-full transition-all duration-700"
                        style={{ width: `${activeFabric.durability}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Recommended Uses */}
                <div className="pt-2 border-t border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Recommended Production Applications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeFabric.bestFor.map(item => (
                      <div key={item} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

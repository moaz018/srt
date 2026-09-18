export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  icon: string;
  applications: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'sublimation-printing',
    title: 'Industrial Sublimation Printing',
    shortDesc: 'Vibrant, high-definition dye infusion on 100% polyester & poly-blend performance fabrics.',
    description: 'Operating advanced Japanese digital sublimation plotters and heavy-duty rotary drum calenders in Sialkot, Pakistan. Sublimation vaporizes high-density dye directly into synthetic polyester polymer chains under 205°C heat and calibrated pressure. The color becomes an indelible part of the fabric yarn, guaranteeing zero hand-feel, total breathability, and unbeatable colorfastness.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    icon: 'Layers',
    applications: [
      'Export sportswear & athletic jerseys',
      'Continuous roll-to-roll fabric yardage',
      'Cut-panel apparel pieces',
      'Flags, banners & exhibition backdrops',
      'Poly-spandex compression wear',
      'Custom microfiber accessories',
    ],
    features: [
      'Optimized for 100% polyester (maximum color brilliance & depth)',
      'Compatible with 88/12 & 90/10 Poly-Spandex 4-way stretch fabrics',
      'Zero cracking, fading, or peeling under hundreds of washes',
      'Fluorescent neon spot colors (Hi-Vis Yellow, Pink, Orange)',
      'Rotary drum continuous roll-to-roll & twin-tray flatbed presses',
      'Prepress vectorization & Pantone PMS spot-matching support',
    ],
    faqs: [
      {
        q: 'Why is polyester base fabric necessary for sublimation?',
        a: 'Sublimation inks convert from solid to gas at 200°C. Only synthetic polyester polymer chains expand to bond and trap this gas permanently. The higher the polyester percentage (ideally 85% to 100%), the more vibrant, crisp, and permanent the finished print will be.',
      },
      {
        q: 'What machinery do your operators utilize?',
        a: 'Our factory operates multi-head wide-format plotters equipped with micro-piezo heads, running genuine Italian high-density inks, paired with continuous oil-heated rotary drum calenders and pneumatic flatbeds.',
      },
      {
        q: 'Can you handle both roll-to-roll and cut-panel sublimation?',
        a: 'Yes. We run continuous roll-to-roll calender transfer for unstitched yardage as well as high-precision flatbed transfer for laser-cut garment panels.',
      },
    ],
  },
  {
    slug: 'sportswear-printing',
    title: 'Sportswear & Team Jersey Manufacturing',
    shortDesc: 'Export-grade team uniforms, soccer kits, martial arts fightwear, and custom jerseys.',
    description: 'Sialkot is the global epicenter of athletic apparel. SRT produces custom sublimated sportswear engineered for high-performance durability. Full-panel edge-to-edge sublimation, individualized player names, squad numbers, and sponsor emblems in a single integrated production workflow.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=500&fit=crop&auto=format',
    icon: 'Trophy',
    applications: [
      'Football (Soccer) Club Kits & Goalie Jerseys',
      'Cricket Sublimated Uniforms & Trousers',
      'Basketball Uniforms & Shooting Shirts',
      'Esports Team Jerseys & Hoodies',
      'MMA Rashguards & BJJ Compression Wear',
      'Running, Marathon & Cycling Tops',
    ],
    features: [
      'Breathable, moisture-wicking DryFit polyester & eyelet fabrics',
      'Individual player names & squad numbers at zero extra setup fee',
      'Sublimated collars, side-mesh ventilation panels, and sleeves',
      'Anti-bacterial & quick-dry yarn coatings available',
      'Pre-production 3D mockups & physical strike-off approvals',
    ],
    faqs: [
      {
        q: 'Can every jersey have a unique player name and number?',
        a: 'Yes, our prepress team formats individual squad rosters so each player receives their custom name, number, and size seamlessly within the master print marker.',
      },
      {
        q: 'What is your minimum order quantity (MOQ)?',
        a: 'We support small club squads (from 10–15 pieces) up to high-volume commercial export runs of 5,000+ units with tiered factory pricing.',
      },
    ],
  },
  {
    slug: 'bedsheet-textile-printing',
    title: 'Wide-Format Bedsheet & Home Textiles (Coming Soon)',
    shortDesc: 'Ultra-wide 3.2m continuous roll-to-roll sublimation for luxury bedding, duvet sets, and drapery.',
    description: 'Exciting expansion alert: SRT is installing wide-width 3.2-meter (126") industrial continuous roll-to-roll rotary calender and oversized plotting lines in Sialkot. Engineered specifically for high-capacity production of King and Queen bedsheet sets, duvet covers, pillowcases, curtains, and home furnishing textiles with edge-to-edge seamless artwork.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=500&fit=crop&auto=format',
    icon: 'Bed',
    applications: [
      'King, Queen & Single Fitted/Flat Bedsheets',
      'Duvet Covers, Quilts & Comforter Tops',
      'Pillowcases & Cushion Covers',
      'Full-Length Blackout & Sheer Window Curtains',
      'Hotel & Healthcare Institutional Linens',
      'Oversized Wall Tapestries & Throw Blankets',
    ],
    features: [
      'Ultra-wide 3.2m (126 inch) seamless continuous print width',
      'Ideal for brushed microfiber, peach-skin poly, and satin polyesters',
      'Odorless, skin-safe, hypoallergenic disperse dye chemistries',
      'Zero color fading despite weekly hot-water laundry washing',
      'High daily linear-meter production capacity for domestic & export distribution',
    ],
    faqs: [
      {
        q: 'When will the new wide-format bedsheet machinery be operational?',
        a: 'Machinery commissioning and trial runs are actively underway. We are currently accepting advance inquiries, sample trials, and bulk contract reservations.',
      },
      {
        q: 'Can you print continuous repeating patterns as well as placement graphics?',
        a: 'Yes. Our continuous rotary calenders handle both infinite seamless repeat textile patterns (florals, geometric, abstract) and exact placement graphics for fitted sheets and duvet panels.',
      },
    ],
  },
  {
    slug: 'tshirt-printing',
    title: 'Custom T-Shirt & Apparel Printing',
    shortDesc: 'All-over print tees, graphic apparel, and promotional shirts with zero hand-feel.',
    description: 'From 100% poly all-over sublimated fashion tees to blended vintage garments and hybrid printing, our apparel division delivers clean, ultra-vibrant graphics with soft fabric touch and reinforced stitching.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=500&fit=crop&auto=format',
    icon: 'Shirt',
    applications: [
      'All-Over Print (AOP) Graphic T-Shirts',
      'Corporate Event Merchandise',
      'Brand Merchandising & Streetwear',
      'University & School Society Tees',
      'Touring & Concert Apparel',
    ],
    features: [
      'All-over edge-to-edge print capabilities',
      'Soft-hand feel — no rubbery or plasticky ink layers',
      'Pre-shrunk poly and poly-cotton blends',
      'Custom woven neck tags and branded polybagging',
    ],
    faqs: [
      {
        q: 'What resolution should my t-shirt artwork be?',
        a: 'We recommend 300 DPI at actual print scale, or native vector artwork (AI, EPS, SVG, or high-res PDF) with all fonts converted to curves/outlines.',
      },
    ],
  },
  {
    slug: 'mug-printing',
    title: 'Ceramic Mugs & Hard Substrate Printing',
    shortDesc: 'Wrap-around full-color sublimation on polymer-coated mugs, plaques, and awards.',
    description: 'Sublimation printing on specialized polymer-coated ceramic mugs, travel tumblers, aluminum sheets, and hard substrates. Delivers crisp photographic clarity, vivid color saturation, and durable everyday resistance.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=500&fit=crop&auto=format',
    icon: 'Coffee',
    applications: [
      'Corporate Branded Coffee Mugs',
      'Personalized Photo Mugs & Souvenirs',
      'Aluminium Wall Plaques & Photo Panels',
      'Café, Restaurant & Office Drinkware',
    ],
    features: [
      '360-degree wrap-around edge-to-edge printing',
      'High-gloss ceramic polymer coating',
      'Scratch-resistant & dishwasher safe',
      'Single sample orders up to bulk 10,000+ unit crates',
    ],
    faqs: [
      {
        q: 'Are your sublimation mugs dishwasher safe?',
        a: 'Yes, our premium grade ceramic mugs feature hard-coat polymer layers tested for frequent commercial dishwasher washing.',
      },
    ],
  },
  {
    slug: 'custom-gifts',
    title: 'Custom Gift & Premium Item Printing',
    shortDesc: 'Personalized cushions, tote bags, mousepads, flags, and corporate gifts.',
    description: 'High-margin personalized merchandise tailored for corporate client appreciation, holiday campaigns, and bespoke personalized gift lines. Finished with precision heat transfer and clean edge stitching.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=500&fit=crop&auto=format',
    icon: 'Gift',
    applications: [
      'Sublimated Throw Pillows & Cushions',
      'High-Density Gaming Mousepads & Desk Mats',
      'Polyester Canvas Tote Bags',
      'Keyrings, Lanyards & ID Badges',
    ],
    features: [
      'Rich photographic dynamic range and subtle gradient rendering',
      'Heavyweight stitch-edged gaming mousepads with non-slip rubber base',
      'Washable poly-linen cushion covers with concealed zippers',
    ],
    faqs: [
      {
        q: 'Can you produce custom-sized gaming mousepads?',
        a: 'Yes, we manufacture standard, extended, and XXL full-desk gaming mats with micro-weave poly tops and anti-fray stitched edges.',
      },
    ],
  },
  {
    slug: 'promotional-printing',
    title: 'Corporate Promotional & Event Printing',
    shortDesc: 'High-volume branded promotional materials for expos, activations, and staff onboarding.',
    description: 'Comprehensive corporate branding solutions designed to keep your company identity prominent at trade shows, conferences, exhibitions, and client meetings.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop&auto=format',
    icon: 'Megaphone',
    applications: [
      'Trade Show Booth Backdrops & Table Skirts',
      'Custom Branded Lanyards & Ribbons',
      'Staff Uniform Packages',
      'Corporate Gift Bundles & Executive Boxes',
    ],
    features: [
      'Pantone PMS spot color verification',
      'Wrinkle-resistant polyester stretch fabrics for easy travel',
      'Bulk export volume pricing discounts',
    ],
    faqs: [
      {
        q: 'Can you match strict corporate Pantone brand standards?',
        a: 'Yes. Our prepress studio performs spectrophotometer delta-E checks and custom color swatch test prints on production fabric before full execution.',
      },
    ],
  },
];

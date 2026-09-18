export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  image: string;
  options: string[];
  printingInfo: string;
}

export const products: Product[] = [
  {
    slug: 'sports-jerseys',
    name: 'Custom Sublimated Sports Jerseys',
    category: 'Sportswear',
    shortDesc: 'Full-panel sublimation jerseys for football, cricket, basketball, and esports.',
    description: 'Engineered with 100% micro-polyester interlock or eyelet DryFit fabric. Features permanent molecular sublimation dye infusion with individual player squad numbers, sponsor logos, and custom typography.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&auto=format',
    options: ['Football / Soccer Kits', 'Cricket Full Sublimation', 'Basketball Reversible', 'Esports Pro Jerseys', 'Hockey Kits'],
    printingInfo: '100% Polyester Sublimation. Unlimited spot colors, individual player names & numbers included at zero setup fee.',
  },
  {
    slug: 'luxury-bedsheet-sets',
    name: 'Seamless Printed Bedsheet & Duvet Sets (Coming Soon)',
    category: 'Home Textiles',
    shortDesc: 'Continuous 3.2m roll-to-roll sublimation for King, Queen & Single bedding sets with pillowcases.',
    description: 'Upcoming wide-format continuous rotary calender line producing edge-to-edge sublimated bedsheets, duvet covers, and matching pillowcases. Printed on brushed microfiber and peach-skin polyester with zero odor and 100% wash fastness.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=400&fit=crop&auto=format',
    options: ['King Size Set (108"x108")', 'Queen Size Set (90"x100")', 'Single / Twin Bedding', 'Matching Pillowcase Pairs', 'Duvet Covers with Zippers'],
    printingInfo: 'Continuous 3.2m roll-to-roll sublimation on brushed poly microfiber. Skin-safe, hypoallergenic, machine washable.',
  },
  {
    slug: 'mma-rashguards',
    name: 'MMA Rashguards & Compression Wear',
    category: 'Sportswear',
    shortDesc: '88/12 Poly-Spandex 4-way stretch fightwear with flatlock reinforced stitching.',
    description: 'Engineered for combat athletes, BJJ practitioners, and high-intensity fitness. Sublimation graphics will never crack, peel, or peel away regardless of extreme fabric elongation during grappling.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=400&fit=crop&auto=format',
    options: ['Long Sleeve Rashguard', 'Short Sleeve Rashguard', 'Compression Spats / Leggings', 'Grappling Shorts'],
    printingInfo: '88% Polyester / 12% Spandex 240 GSM. 4-way stretch sublimation with 6-thread flatlock ergonomic stitching.',
  },
  {
    slug: 'custom-tshirts',
    name: 'All-Over Print & Custom T-Shirts',
    category: 'Apparel',
    shortDesc: 'Premium polyester and poly-blend tees with full-color custom printing.',
    description: 'Available in crew neck, athletic cut, and oversized streetwear fits. Suitable for full-panel sublimation on performance polyester or hybrid DTF on poly-cotton blanks.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop&auto=format',
    options: ['All-Over Sublimation Poly', 'Poly-Cotton Blend', 'Oversized Streetwear Fit', 'Athletic Gym Cut'],
    printingInfo: 'Full-panel sublimation on 100% poly; soft-hand touch with zero ink heaviness.',
  },
  {
    slug: 'custom-mugs',
    name: 'Polymer-Coated Custom Mugs',
    category: 'Drinkware',
    shortDesc: '360° wrap-around high-gloss photographic mug printing.',
    description: 'Grade-A ceramic mugs coated with a specialized high-density polymer glaze. Sublimation dye penetrates the glaze, delivering high-gloss photographic artwork that resists commercial dishwashers.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&auto=format',
    options: ['11oz Gloss White', '15oz Jumbo Mug', 'Inner Color Accent', 'Travel Stainless Steel Tumbler', 'Magic Heat-Reveal Mug'],
    printingInfo: 'Sublimation on polymer-glazed ceramic. Scratch-resistant and commercial dishwasher safe.',
  },
  {
    slug: 'hoodies',
    name: 'Custom Team & Brand Hoodies',
    category: 'Apparel',
    shortDesc: 'Heavyweight poly-fleece and blended hoodies with bold sublimated panels.',
    description: 'Warm, durable hoodies featuring all-over sublimated outer shells or custom placement graphics, fleece lining, and reinforced kangaroo pockets.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=400&fit=crop&auto=format',
    options: ['Sublimated Poly Fleece Pullover', 'Zip-Up Athletic Jacket', 'Drop-Shoulder Streetwear Hoodie'],
    printingInfo: '300-340 GSM heavy poly-fleece. Edge-to-edge sublimation with soft brushed interior.',
  },
  {
    slug: 'cushions',
    name: 'Sublimated Throw Pillows & Cushions',
    category: 'Home Textiles',
    shortDesc: 'Full-color decorative cushions and pillows for home decor and gifting.',
    description: 'Double-sided sublimation printed on soft velvet-feel or poly-linen fabric with concealed zip enclosure and high-resilience polyfill inserts.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format',
    options: ['40x40 cm Square', '45x45 cm Square', '50x50 cm Large', 'Rectangular Lumbar Pillow'],
    printingInfo: 'Full-bleed sublimation on poly-linen or poly-velvet with concealed invisible zipper.',
  },
  {
    slug: 'tote-bags',
    name: 'Custom Poly-Canvas Tote Bags',
    category: 'Bags',
    shortDesc: 'Durable polyester canvas shopping and exhibition totes.',
    description: 'Heavyweight woven poly-canvas tote bags engineered for vibrant full-bleed photo sublimation with reinforced cross-stitched web handles.',
    image: 'https://images.unsplash.com/photo-1597633611632-77e69e26fb27?w=600&h=400&fit=crop&auto=format',
    options: ['Standard 38x42 cm', 'Gusseted Heavy-Duty Tote', 'Long Shoulder Strap', 'Reinforced Cotton Handles'],
    printingInfo: 'Sublimation on woven poly-canvas. Washable, reusable, fade-free.',
  },
  {
    slug: 'promotional-products',
    name: 'Gaming Mousepads & Desk Mats',
    category: 'Promotional',
    shortDesc: 'High-density micro-weave fabric mousepads with anti-fray stitched borders.',
    description: 'Full-color sublimated gaming surfaces with micro-textured low-friction cloth top and 3mm/4mm non-slip natural rubber base. Used by esports organizations and corporate workspaces.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&auto=format',
    options: ['Standard Desk Pad (900x400 mm)', 'Medium Mousepad (320x270 mm)', 'Square XL Mat (450x450 mm)'],
    printingInfo: 'Sublimation on high-density micro-weave poly with precision perimeter anti-fray edge stitching.',
  },
];

export const productCategories = [
  'All',
  'Sportswear',
  'Home Textiles',
  'Apparel',
  'Drinkware',
  'Bags',
  'Promotional',
];

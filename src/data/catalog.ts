export interface CatalogDesign {
  id: string;
  title: string;
  collection: '3D Sculpted Baroque & Gold Relief' | '3D Romantic & Velvet' | '3D Jewel & Crystal' | '3D Kids & Whimsical';
  category: 'bedsheets' | 'apparel' | 'curtains' | 'cushions';
  categoryLabel: string;
  size: string;
  fabric: string;
  image: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const CATALOG_PDF_URL = `${base}catalog/SRT-Sample-Book-3D-Royal-Collection.pdf`;

export const CATALOG_DESIGNS: CatalogDesign[] = [
  {
    id: 'SRT-3DR-001',
    title: 'Royal Golden Feather & White Magnolia Blossom',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    categoryLabel: 'Luxury Bedding & Duvet Sets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Poly-Sateen (120-150 GSM)',
    image: `${base}catalog/design-srt-3dr-001.jpg`,
    tags: ['3D Relief', 'Gold Leaf', 'Magnolia', 'Luxury Bedding', 'Royal Gold'],
    description: 'High-definition 3D embossed botanical art featuring gilded feather fronds and sculpted porcelain-white magnolia blooms against a lustrous marble background.',
    featured: true,
  },
  {
    id: 'SRT-3DR-002',
    title: 'Golden Tree of Life with Sculpted Pearl Flowers',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    categoryLabel: 'Master Bedroom & Wall Hangings',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Poly-Sateen',
    image: `${base}catalog/design-srt-3dr-002.jpg`,
    tags: ['Tree of Life', 'Pearl Embellished', 'Gold Trunk', 'Home Textile'],
    description: 'Majestic gilded Tree of Life with sprawling branches laden with dimensional pearl florals and crystalline butterflies. Crafted for high-end home textile collections.',
    featured: true,
  },
  {
    id: 'SRT-3DR-003',
    title: 'Baroque Porcelain Blue Rose & Vintage Gilded Clocks',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    categoryLabel: 'Luxury Bedding & Cushions',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Swiss Voile',
    image: `${base}catalog/design-srt-3dr-003.jpg`,
    tags: ['Cobalt Blue', 'Vintage Clock', 'Gilded Frame', 'Porcelain Rose'],
    description: 'Regal cobalt-blue sculptural roses entwined with vintage Victorian filigree clock dials and ornate golden scrollwork in photorealistic depth.',
    featured: true,
  },
  {
    id: 'SRT-3DR-004',
    title: 'Faceted 3D Gold Heart in Carved Baroque Marbled Frame',
    collection: '3D Sculpted Baroque & Gold Relief',
    category: 'bedsheets',
    categoryLabel: 'Bridal Bedding & Decorative Throws',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Dhanak',
    image: `${base}catalog/design-srt-3dr-004.jpg`,
    tags: ['Faceted Heart', 'Zebra Marble', 'Baroque Frame', 'Royal Gold'],
    description: 'Polished geometric 3D golden heart centerpiece surrounded by sculpted architectural acanthus filigree over dark striated marble textures.',
    featured: true,
  },
  {
    id: 'SRT-3DR-005',
    title: 'Quilted Rose Velvet Love with Carved Filigree Border',
    collection: '3D Romantic & Velvet',
    category: 'apparel',
    categoryLabel: 'Bridal Shawls, Throws & Cushions',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Dhanak & Brushed Poly-Fleece',
    image: `${base}catalog/design-srt-3dr-005.jpg`,
    tags: ['Quilted Velvet', 'Love Monogram', 'Pink Rose', 'Baroque Filigree'],
    description: 'Tufted micro-velvet quilted heart panels flanked by carved baroque scrolls, blush rose posies, and embossed typographic crests.',
    featured: true,
  },
  {
    id: 'SRT-3DR-006',
    title: 'Mint Green Satin Ribbon & Dimensional Floral Heart Bouquet',
    collection: '3D Romantic & Velvet',
    category: 'bedsheets',
    categoryLabel: 'Spring Duvets & Bridal Sets',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin & Swiss Lawn',
    image: `${base}catalog/design-srt-3dr-006.jpg`,
    tags: ['Mint Satin', 'Silk Ribbon', 'Pastel Pom-Poms', 'Bridal Bedding'],
    description: 'Fresh mint-green satin ribbon folds forming an intricate heart wreath adorned with sculpted blush roses, baby\'s breath, and iridescent pearls.',
    featured: true,
  },
  {
    id: 'SRT-3DR-007',
    title: 'Sapphire Crystal Floral Vine with Prismatic Gem Hearts',
    collection: '3D Jewel & Crystal',
    category: 'apparel',
    categoryLabel: 'Apparel, Shawls & Fashion Voile',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Swiss Lawn & Poly-Interlock',
    image: `${base}catalog/design-srt-3dr-007.jpg`,
    tags: ['Sapphire Blue', 'Crystal Hearts', 'Prismatic Gems', 'Summer Lawn'],
    description: 'Faceted deep-sapphire blue crystalline heart buds hanging from sculpted white enamel vines with floating jewel dew drops.',
    featured: true,
  },
  {
    id: 'SRT-3DR-008',
    title: 'Pink Braided Yarn Rose Typography with Quilted Black Hearts',
    collection: '3D Romantic & Velvet',
    category: 'apparel',
    categoryLabel: 'Fashion Apparel & Loungewear',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Poly-Interlock & Dhanak',
    image: `${base}catalog/design-srt-3dr-008.jpg`,
    tags: ['Braided Yarn', 'Quilted Hearts', 'Matte Pink', 'Fashion Apparel'],
    description: 'Hand-braided 3D textile cords shaping delicate rose typography, set against deep charcoal diamond-quilted panels with raised stitchwork.',
    featured: false,
  },
  {
    id: 'SRT-3DR-009',
    title: 'Fluffy Pastel Cloud Rainbows & Pearl Starscape',
    collection: '3D Kids & Whimsical',
    category: 'bedsheets',
    categoryLabel: 'Kids Bedroom Sets & Nursery',
    size: '12 x 12 in (Seamless Repeat)',
    fabric: 'Microfibre Peach Skin (Bedsheets)',
    image: `${base}catalog/design-srt-3dr-009.jpg`,
    tags: ['Rainbow Arch', 'Fluffy Clouds', 'Kids Bedroom', 'Pastel Dreams'],
    description: 'Dreamy dimensional sculpted cloud puff arches in candy pastels, sprinkled with glistening golden starbursts and pearl beads.',
    featured: false,
  },
];

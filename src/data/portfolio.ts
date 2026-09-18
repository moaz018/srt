export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Cricket Team Kit', category: 'Sports', image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=700&fit=crop&auto=format', description: 'Full sublimation kit for a regional cricket club.' },
  { id: 2, title: 'Corporate Polo Shirts', category: 'Corporate', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=500&fit=crop&auto=format', description: 'Branded embroidered polos for an IT company.' },
  { id: 3, title: 'Event Merchandise', category: 'Promotional', image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&h=600&fit=crop&auto=format', description: 'Custom tees and totes for a cultural festival.' },
  { id: 4, title: 'Photo Gift Set', category: 'Gifts', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=500&fit=crop&auto=format', description: 'Personalized cushion, mug, and keyring gift set.' },
  { id: 5, title: 'Football Jerseys', category: 'Sports', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=700&fit=crop&auto=format', description: 'Custom sublimated kits for a local football club.' },
  { id: 6, title: 'School Hoodies', category: 'Apparel', image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=500&fit=crop&auto=format', description: 'Graduation hoodies for a university faculty.' },
  { id: 7, title: 'Brand Tote Bags', category: 'Promotional', image: 'https://images.unsplash.com/photo-1597633611632-77e69e26fb27?w=600&h=600&fit=crop&auto=format', description: 'Eco totes for a retail brand launch.' },
  { id: 8, title: 'Custom Mug Set', category: 'Corporate', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=500&fit=crop&auto=format', description: 'Branded mugs as part of a client welcome kit.' },
  { id: 9, title: 'Esports Team Kit', category: 'Sports', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=700&fit=crop&auto=format', description: 'Full-sublimation jerseys for a competitive esports team.' },
  { id: 10, title: 'Wedding Favors', category: 'Gifts', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=500&fit=crop&auto=format', description: 'Personalized mugs and keyrings for a wedding.' },
  { id: 11, title: 'Trade Show Pack', category: 'Promotional', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop&auto=format', description: 'Full promotional set for a tech expo booth.' },
  { id: 12, title: 'Custom Caps', category: 'Apparel', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=500&fit=crop&auto=format', description: 'Embroidered snapbacks for a streetwear brand.' },
];

export const portfolioCategories = ['All', 'Apparel', 'Sports', 'Corporate', 'Promotional', 'Gifts', 'Custom'];

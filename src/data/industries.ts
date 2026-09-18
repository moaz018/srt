export interface Industry {
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
}

export const industries: Industry[] = [
  {
    title: 'Corporate & Business',
    description: 'Custom branded apparel, promotional items, and employee kits that project a cohesive professional identity.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format',
    items: ['Branded polo shirts', 'Staff uniforms', 'Client gift sets', 'Promotional giveaways'],
  },
  {
    title: 'Sports Teams & Clubs',
    description: 'High-performance custom kits, jerseys, and team merchandise for clubs at every level.',
    icon: 'Trophy',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&auto=format',
    items: ['Match jerseys', 'Training kits', 'Team bags', 'Supporter merchandise'],
  },
  {
    title: 'Schools & Universities',
    description: 'Custom uniforms, faculty hoodies, event merchandise, and society kits for educational institutions.',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format',
    items: ['Graduation hoodies', 'Sports kits', 'Society tees', 'Event merchandise'],
  },
  {
    title: 'Events & Festivals',
    description: 'Custom merchandise that makes events memorable — for organizers, staff, and attendees alike.',
    icon: 'Calendar',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&h=400&fit=crop&auto=format',
    items: ['Staff uniforms', 'Attendee merchandise', 'Branded totes', 'Custom gifts'],
  },
  {
    title: 'Restaurants & Cafés',
    description: 'Branded staff uniforms, custom mugs, and promotional materials for food and hospitality businesses.',
    icon: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format',
    items: ['Staff aprons & tees', 'Branded mugs', 'Tote bags', 'Promotional prints'],
  },
  {
    title: 'Fashion & Apparel Brands',
    description: 'Custom-printed collections for emerging and established fashion labels requiring small to medium runs.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format',
    items: ['Limited edition runs', 'Custom labels', 'Capsule collections', 'Sample orders'],
  },
  {
    title: 'Marketing & Promotions',
    description: 'Everything a marketing team needs to run campaigns, trade shows, and brand activations.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&auto=format',
    items: ['Giveaway items', 'Trade show kits', 'Campaign merchandise', 'Branded stationery'],
  },
  {
    title: 'Personal & Gift Orders',
    description: 'One-off and small-batch personal gifts for birthdays, weddings, and special occasions.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop&auto=format',
    items: ['Photo gifts', 'Wedding favors', 'Custom mugs', 'Personalized keepsakes'],
  },
];

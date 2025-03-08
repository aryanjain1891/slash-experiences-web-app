
export interface Experience {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  location: string;
  duration: string;
  participants: string;
  date: string;
  category: string;
  niche?: string;
  nicheCategory?: string;
  trending?: boolean;
  featured?: boolean;
  romantic?: boolean;
  adventurous?: boolean;
  group?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Hot Air Balloon Ride",
    description: "Soar above breathtaking landscapes in a majestic hot air balloon at sunrise.",
    imageUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop",
    price: 24999,
    location: "Napa Valley, CA",
    duration: "3 hours",
    participants: "2 people",
    date: "Available year-round",
    category: "adventure",
    trending: true,
    featured: true,
    nicheCategory: "Luxury Escapes",
    romantic: true,
    adventurous: true,
    group: false
  },
  {
    id: "exp2",
    title: "Michelin Star Dining",
    description: "Experience culinary excellence with a 7-course tasting menu at an award-winning restaurant.",
    imageUrl: "https://example.com/michelin-dining-image.jpg",
    price: 28999,
    location: "New York, NY",
    duration: "3 hours",
    participants: "2 people",
    date: "Available weekdays",
    category: "dining",
    trending: true,
    nicheCategory: "Culinary Arts",
    romantic: true,
    adventurous: false,
    group: false
  },
  {
    id: "exp3",
    title: "Private Yacht Sunset Cruise",
    description: "Cruise along the coast on a private yacht with champagne and hors d'oeuvres.",
    imageUrl: "https://example.com/yacht-sunset-image.jpg",
    price: 41999,
    location: "Miami, FL",
    duration: "4 hours",
    participants: "Up to 6 people",
    date: "Seasonal",
    category: "luxury",
    featured: true,
    nicheCategory: "Luxury Escapes",
    romantic: true,
    adventurous: false,
    group: true
  },
  {
    id: "exp4",
    title: "Helicopter City Tour",
    description: "See the city from above with a private helicopter tour over iconic landmarks.",
    imageUrl: "https://example.com/helicopter-tour-image.jpg",
    price: 33999,
    location: "Los Angeles, CA",
    duration: "1 hour",
    participants: "3 people",
    date: "Available daily",
    category: "adventure",
    trending: true,
    nicheCategory: "Luxury Escapes",
    romantic: false,
    adventurous: true,
    group: true
  },
  {
    id: "exp5",
    title: "Wine Tasting Experience",
    description: "Guided tour of premium vineyards with exclusive tastings and pairings.",
    imageUrl: "https://example.com/wine-tasting-image.jpg",
    price: 15999,
    location: "Sonoma, CA",
    duration: "5 hours",
    participants: "2 people",
    date: "Weekends",
    category: "dining",
    featured: true,
    nicheCategory: "Wine & Spirits",
    romantic: true,
    adventurous: false,
    group: false
  },
  {
    id: "exp6",
    title: "Spa Retreat Day",
    description: "Full day of relaxation with massage, facial treatments, and thermal baths.",
    imageUrl: "https://example.com/spa-retreat-image.jpg",
    price: 23999,
    location: "Sedona, AZ",
    duration: "Full day",
    participants: "1 person",
    date: "Available daily",
    category: "wellness",
    trending: true,
    nicheCategory: "Wellness & Spirituality",
    romantic: false,
    adventurous: false,
    group: false
  },
  {
    id: "exp7",
    title: "Supercar Track Day",
    description: "Drive exotic supercars on a professional race track with professional instruction.",
    imageUrl: "https://example.com/supercar-track-image.jpg",
    price: 49999,
    location: "Austin, TX",
    duration: "4 hours",
    participants: "1 person",
    date: "Weekends",
    category: "adventure",
    nicheCategory: "Sports & Fitness",
    romantic: false,
    adventurous: true,
    group: false
  },
  {
    id: "exp8",
    title: "Photography Workshop",
    description: "Learn professional photography techniques in stunning natural settings.",
    imageUrl: "https://example.com/photography-workshop-image.jpg",
    price: 20999,
    location: "Yosemite, CA",
    duration: "8 hours",
    participants: "1 person",
    date: "Seasonal",
    category: "learning",
    nicheCategory: "Photography",
    romantic: false,
    adventurous: false,
    group: true
  }
];
  {
    id: "exp9",
    title: "Urban Street Art Tour & Workshop",
    description: "Explore local street art scenes and create your own piece with professional artists.",
    imageUrl: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8",
    price: 15999,
    location: "Brooklyn, NY",
    duration: "6 hours",
    participants: "1 person",
    date: "Weekends",
    category: "art",
    nicheCategory: "Urban Culture",
    romantic: false,
    adventurous: false,
    group: true
  },
  {
    id: "exp10", 
    title: "Gourmet Truffle Hunting",
    description: "Join expert hunters and their trained dogs to find rare truffles, followed by a cooking class.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 35999,
    location: "Tuscany, Italy",
    duration: "Full day",
    participants: "2-4 people",
    date: "Seasonal",
    category: "food",
    nicheCategory: "Culinary Adventures",
    romantic: true,
    adventurous: false,
    group: true
  },
  {
    id: "exp11",
    title: "Ice Climbing Adventure",
    description: "Scale frozen waterfalls with professional guides in a stunning winter landscape.",
    imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d",
    price: 29999,
    location: "Banff, Canada",
    duration: "8 hours",
    participants: "1-2 people",
    date: "Winter season",
    category: "adventure",
    nicheCategory: "Extreme Sports",
    romantic: false,
    adventurous: true,
    group: false
  },
  {
    id: "exp12",
    title: "Private Island Glamping",
    description: "Luxury camping experience on a private island with chef-prepared meals.",
    imageUrl: "https://images.unsplash.com/photo-1517824806704-9040b037703b",
    price: 89999,
    location: "Maldives",
    duration: "2 days",
    participants: "2 people",
    date: "Year-round",
    category: "luxury",
    nicheCategory: "Exclusive Retreats",
    romantic: true,
    adventurous: false,
    group: false
  },
  {
    id: "exp13",
    title: "Zero Gravity Flight",
    description: "Experience weightlessness in a specially modified aircraft used by astronauts.",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7",
    price: 65999,
    location: "Orlando, FL",
    duration: "5 hours",
    participants: "1 person",
    date: "Monthly",
    category: "unique",
    nicheCategory: "Space & Aviation",
    romantic: false,
    adventurous: true,
    group: true
  },
  {
    id: "exp14",
    title: "Ancient Tea Ceremony",
    description: "Traditional tea ceremony experience with a master in a historic temple.",
    imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd",
    price: 18999,
    location: "Kyoto, Japan",
    duration: "3 hours",
    participants: "1-4 people",
    date: "Daily",
    category: "cultural",
    nicheCategory: "Traditional Arts",
    romantic: false,
    adventurous: false,
    group: true
  },
  {
    id: "exp15",
    title: "Arctic Wildlife Photography",
    description: "Photograph polar bears and northern lights with professional guidance.",
    imageUrl: "https://images.unsplash.com/photo-1517783999520-f068d7431a60",
    price: 75999,
    location: "Churchill, Canada",
    duration: "3 days",
    participants: "1 person",
    date: "Winter only",
    category: "photography",
    nicheCategory: "Wildlife Photography",
    romantic: false,
    adventurous: true,
    group: true
  },
  {
    id: "exp16",
    title: "Volcano Helicopter Tour",
    description: "Private helicopter tour over active volcanoes with a geology expert.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    price: 45999,
    location: "Big Island, Hawaii",
    duration: "2 hours",
    participants: "2-4 people",
    date: "Weather dependent",
    category: "adventure",
    nicheCategory: "Aerial Tours",
    romantic: true,
    adventurous: true,
    group: false
  },
  {
    id: "exp17",
    title: "Michelin Star Cooking Class",
    description: "Private cooking session with a Michelin-starred chef in their restaurant kitchen.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    price: 55999,
    location: "Paris, France",
    duration: "6 hours",
    participants: "1-2 people",
    date: "Limited availability",
    category: "food",
    nicheCategory: "Fine Dining",
    romantic: true,
    adventurous: false,
    group: false
  },
  {
    id: "exp18",
    title: "Desert Astronomy Night",
    description: "Stargazing in the desert with professional astronomers and high-powered telescopes.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    price: 19999,
    location: "Atacama Desert, Chile",
    duration: "6 hours",
    participants: "1 person",
    date: "Clear nights only",
    category: "science",
    nicheCategory: "Astronomy",
    romantic: true,
    adventurous: false,
    group: true
  }

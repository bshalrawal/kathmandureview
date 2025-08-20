export type Review = {
  id: string
  slug: string
  title: string
  category: 'Cafe' | 'Restaurant' | 'Resort' | 'Attraction' | 'Other'
  excerpt: string
  rating: number // 0–5, halves allowed
  coverImage: string
  location: string
  tags: string[]
  date: string // ISO
}

export const featured: Review[] = [
  {
    id: 'kr-001',
    slug: 'heavens-rooftop-cafe-kathmandu',
    title: "Heaven’s Roof Top Restro & Café",
    category: 'Cafe',
    excerpt: 'Sunset terrace, mellow playlists, and consistent espresso.',
    rating: 4.5,
    coverImage: '/images/featured-rooftop.jpg',
    location: 'Kathmandu, Nepal',
    tags: ['rooftop', 'sunset', 'espresso'],
    date: '2025-05-20'
  },
  {
    id: 'kr-002',
    slug: 'happy-tummy-cafe',
    title: 'Happy Tummy Cafe',
    category: 'Cafe',
    excerpt: 'Comfort plates, friendly staff, and generous portions.',
    rating: 4.2,
    coverImage: '/images/featured-happy-tummy.jpg',
    location: 'Lalitpur, Nepal',
    tags: ['comfort', 'brunch'],
    date: '2025-05-18'
  }
]

export const hot: Review[] = [
  {
    id: 'kr-010',
    slug: 'village-trout-mini-resort',
    title: 'Village Trout Mini Resort',
    category: 'Resort',
    excerpt: 'Fresh trout, riverside chill, easy weekend escape.',
    rating: 4.3,
    coverImage: '/images/hot-trout.jpg',
    location: 'Kakani, Nepal',
    tags: ['weekend', 'nature', 'trout'],
    date: '2025-05-10'
  },
  {
    id: 'kr-011',
    slug: 'thamel-night-market',
    title: 'Thamel Night Market',
    category: 'Attraction',
    excerpt: 'Bustling stalls, street eats, and live music after dark.',
    rating: 4.0,
    coverImage: '/images/thamel-night-market.jpg',
    location: 'Kathmandu, Nepal',
    tags: ['nightlife', 'shopping'],
    date: '2025-05-09'
  },
  {
    id: 'kr-012',
    slug: 'nepalese-art-museum',
    title: 'Museum of Nepalese Art',
    category: 'Attraction',
    excerpt: 'Curated galleries of traditional and contemporary works.',
    rating: 4.1,
    coverImage: '/images/museum-art.jpg',
    location: 'Kathmandu, Nepal',
    tags: ['culture', 'museum'],
    date: '2025-05-07'
  },
  {
    id: 'kr-013',
    slug: 'patan-gourmet-bistro',
    title: 'Patan Gourmet Bistro',
    category: 'Restaurant',
    excerpt: 'Seasonal menus, farm‑to‑table ethos and cozy ambience.',
    rating: 4.4,
    coverImage: '/images/patan-gourmet.jpg',
    location: 'Patan, Nepal',
    tags: ['gourmet', 'farm-to-table'],
    date: '2025-05-06'
  },
  {
    id: 'kr-014',
    slug: 'bhaktapur-pottery-square',
    title: 'Bhaktapur Pottery Square',
    category: 'Attraction',
    excerpt: 'Hands‑on clay workshops in a historic plaza.',
    rating: 4.1,
    coverImage: '/images/pottery-square.jpg',
    location: 'Bhaktapur, Nepal',
    tags: ['crafts', 'history'],
    date: '2025-05-05'
  },
  {
    id: 'kr-015',
    slug: 'garden-of-dreams',
    title: 'Garden of Dreams',
    category: 'Attraction',
    excerpt: 'Neo‑classical gardens, quiet pathways and ornate pavilions.',
    rating: 4.5,
    coverImage: '/images/garden-of-dreams.jpg',
    location: 'Kathmandu, Nepal',
    tags: ['garden', 'relax'],
    date: '2025-05-04'
  }
]

export const reviews: Review[] = [...featured, ...hot]

export const rankings = [
  { rank: 1, title: "Heaven’s Roof Top Restro & Café", slug: 'heavens-rooftop-cafe-kathmandu', rating: 4.5 },
  { rank: 2, title: 'Village Trout Mini Resort', slug: 'village-trout-mini-resort', rating: 4.3 },
  { rank: 3, title: 'Garden of Dreams', slug: 'garden-of-dreams', rating: 4.5 },
  { rank: 4, title: 'Patan Gourmet Bistro', slug: 'patan-gourmet-bistro', rating: 4.4 },
  { rank: 5, title: 'Thamel Night Market', slug: 'thamel-night-market', rating: 4.0 },
  { rank: 6, title: 'Happy Tummy Cafe', slug: 'happy-tummy-cafe', rating: 4.2 }
]

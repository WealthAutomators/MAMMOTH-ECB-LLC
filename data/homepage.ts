import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-cabin.jpg",
    headline: "Made to go further.",
    description:
      "Useful goods for home, travel, and the hours outdoors — chosen for how they work, how they last, and how they feel in hand.",
    ctaText: "Shop the Collection",
    ctaLink: "/shop",
    secondaryCtaText: "Explore Outdoor",
    secondaryCtaLink: "/categories/outdoor",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Free Shipping over $75",
    description: "Standard delivery in 3–5 business days on qualifying orders.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Encrypted demo checkout with familiar payment options.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "30-Day Returns",
    description: "Send back unused items in original condition within 30 days.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Direct Support",
    description: "Questions about an order? Email us and we’ll help promptly.",
  },
  {
    id: "5",
    icon: "star",
    title: "Curated Selection",
    description: "A considered assortment — not everything, just what earns its place.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "compact-led-flashlight",
  "wicker-picnic-basket",
  "clear-frame-sunglasses",
  "bamboo-cutting-board",
  "cable-knit-scarf",
  "striped-cotton-towels",
] as const;

export const homepageBestsellerSlugs = [
  "harbor-lantern",
  "canvas-weekender",
  "leather-bifold-wallet",
  "white-ceramic-mugs",
  "field-binoculars",
  "striped-cotton-towels",
  "trail-hiking-boots",
  "stoneware-teapot",
] as const;

export const homepageFeaturedSlugs = [
  "canvas-weekender",
  "harbor-lantern",
  "cream-knit-throw",
  "copper-tea-kettle",
  "olive-canvas-daypack",
  "olive-felt-fedora",
  "buffalo-check-flannel",
  "cast-iron-skillet",
] as const;

export const homepageNewArrivalSlugs = [
  "cotton-hammock",
  "glass-bud-vases",
  "pour-over-coffee-set",
  "waxed-travel-pack",
  "field-watch",
  "celadon-fluted-plate",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Free shipping on orders $75+",
  description: "Standard delivery across the contiguous United States.",
  buttonText: "Shop Now",
  buttonLink: "/shop",
  image: "/banners/outdoor-feature.jpg",
};

export const aboutSection = {
  title: "Goods with a job to do.",
  description:
    "MAMMOTH ECB is built around a simple idea: the best products are the ones you actually use. We look for durable materials, considered design, and pieces that move easily between home, travel, and time outdoors.",
  checklist: [
    "Curated for utility, not novelty",
    "Home, travel, outdoor, and everyday carry",
    "Free standard shipping on orders $75+",
    "Straightforward returns within 30 days",
  ],
  buttonText: "Our Approach",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured Collection",
  description: "A short list of pieces that define the store — dependable, well-made, and ready for daily use.",
  bannerImage: "/banners/lifestyle-outdoor.jpg",
  categorySlug: "outdoor",
};

export const editorialStory = {
  eyebrow: "Field Notes",
  title: "Everyday utility, refined.",
  description:
    "A picnic cloth, a weekender, a lantern for the porch. The catalog is built for weekends that start at home and end somewhere quieter.",
  ctaText: "Shop Home & Outdoor",
  ctaLink: "/collections/the-long-weekend",
  image: "/banners/editorial-weekend.jpg",
  secondaryImage: "/banners/editorial-pack.jpg",
};

export const outdoorFeature = {
  eyebrow: "Weekend Living",
  title: "The long weekend.",
  description:
    "Not a camping catalog — just the gear that makes a few extra days outside feel considered. Trails, gardens, lakes, and the drive in between.",
  ctaText: "Shop Outdoor",
  ctaLink: "/categories/outdoor",
  image: "/banners/outdoor-feature.jpg",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Outdoor", slug: "outdoor" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
];

export const newsletter = {
  title: "Stay in the know.",
  description: "New arrivals, seasonal finds, and a few things worth keeping.",
  placeholder: "Email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const utilityBarItems = [
  "Free shipping on orders $75+",
  "Cohasset, Massachusetts",
  "30-day returns",
];

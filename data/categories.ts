import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "outdoor",
    name: "Outdoor",
    image: "/categories/outdoor.jpg",
    description: "Weekend gear for trails, gardens, and time outside.",
    productCount: 9,
  },
  {
    id: "2",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Textiles, lighting, storage, and objects for living well at home.",
    productCount: 9,
  },
  {
    id: "3",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Cookware, drinkware, and table pieces made for daily use.",
    productCount: 10,
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags and carry goods for weekends, commutes, and the longer way around.",
    productCount: 4,
  },
  {
    id: "5",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Seasonal layers and outdoor-ready clothing with a quiet utility.",
    productCount: 5,
  },
  {
    id: "6",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Everyday carry, leather goods, and small objects worth keeping.",
    productCount: 6,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

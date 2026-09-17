export interface StoreCollection {
  slug: string;
  name: string;
  description: string;
  image: string;
  productSlugs: readonly string[];
}

export const collections: StoreCollection[] = [
  {
    slug: "the-long-weekend",
    name: "The Long Weekend",
    description: "Picnic, porch, and trail goods for extra days away from the desk.",
    image: "/banners/editorial-weekend.jpg",
    productSlugs: [
      "harbor-lantern",
      "wicker-picnic-basket",
      "cotton-hammock",
      "trail-thermos",
      "canvas-weekender",
      "field-binoculars",
      "trail-hiking-boots",
      "brass-pocket-compass",
    ],
  },
  {
    slug: "house-and-table",
    name: "House & Table",
    description: "Textiles, cookware, and objects that earn a permanent place at home.",
    image: "/banners/about.jpg",
    productSlugs: [
      "cream-knit-throw",
      "copper-tea-kettle",
      "white-ceramic-mugs",
      "celadon-fluted-plate",
      "striped-cotton-towels",
      "wood-wick-candle",
      "cast-iron-skillet",
      "white-linen-bedding",
    ],
  },
  {
    slug: "field-and-road",
    name: "Field & Road",
    description: "Bags, layers, and boots for the commute and the longer way around.",
    image: "/banners/lifestyle-outdoor.jpg",
    productSlugs: [
      "olive-canvas-daypack",
      "leather-messenger",
      "waxed-travel-pack",
      "buffalo-check-flannel",
      "trail-knit-beanie",
      "trail-hiking-boots",
      "canvas-weekender",
      "suede-work-gloves",
    ],
  },
  {
    slug: "everyday-carry",
    name: "Everyday Carry",
    description: "Small leather goods, tools, and objects meant to ride in a pocket or bag.",
    image: "/categories/accessories.jpg",
    productSlugs: [
      "leather-bifold-wallet",
      "brass-buckle-belt",
      "field-watch",
      "compact-led-flashlight",
      "olive-felt-fedora",
      "clear-frame-sunglasses",
      "cable-knit-scarf",
      "classic-shave-set",
    ],
  },
];

export function getCollectionBySlug(slug: string): StoreCollection | undefined {
  return collections.find((c) => c.slug === slug);
}

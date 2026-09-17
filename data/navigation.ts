import { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Collections", href: "/collections" },
  { label: "Outdoor", href: "/categories/outdoor" },
  { label: "Home", href: "/categories/home" },
  { label: "Travel", href: "/categories/travel" },
  { label: "Accessories", href: "/categories/accessories" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Collections", href: "/collections" },
    { label: "All Products", href: "/shop" },
  ],
  explore: [
    { label: "Outdoor", href: "/categories/outdoor" },
    { label: "Home", href: "/categories/home" },
    { label: "Travel", href: "/categories/travel" },
    { label: "Accessories", href: "/categories/accessories" },
  ],
  help: [
    { label: "Contact", href: "/contact" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];

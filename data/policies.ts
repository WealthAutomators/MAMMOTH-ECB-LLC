import { company } from "./company";

const legal = company.name;
const email = company.email;
const address = `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`;

export const faqItems = [
  {
    question: "What does MAMMOTH ECB sell?",
    answer:
      "We carry a curated mix of home goods, kitchen pieces, outdoor gear, travel bags, apparel, and everyday accessories — useful products selected for quality and lasting design.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes. We offer free standard shipping on all orders over $75 within the contiguous United States. Orders under $75 have a flat rate of $9.99. Express shipping is available at checkout for $14.99.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping delivers in 3–5 business days. Express shipping delivers in 1–2 business days. You'll receive a tracking number via email once your order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Visit our Returns page or email us for assistance.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Once your order ships, you'll receive an email with a tracking number. You can also use our Track Order page with your order number and email.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship within the United States only, including Alaska and Hawaii. Sign up for the newsletter to hear if that changes.",
  },
  {
    question: "How are products selected?",
    answer:
      "We look for durable materials, considered design, and pieces that work across home, travel, and outdoor living. The catalog stays focused on the contrary of everything-for-everyone.",
  },
  {
    question: "How do I use a coupon code?",
    answer:
      "Enter your coupon code in the coupon field on the cart page and click Apply. Valid codes update your total immediately. One code per order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. Checkout on this site is a demonstration flow.",
  },
  {
    question: "How can I contact you?",
    answer: `Email us at ${email}. We typically respond within one business day.`,
  },
];

export const shippingPolicy = {
  title: "Shipping Policy",
  description: `How ${legal} delivers your order.`,
  sections: [
    {
      title: "Processing Time",
      content:
        "Orders are processed within 1–2 business days. Orders placed on weekends or holidays ship the next business day.",
    },
    {
      title: "Shipping Methods & Rates",
      content: "",
      list: [
        "Standard Shipping (3–5 business days): $9.99 — FREE on orders over $75",
        "Express Shipping (1–2 business days): $14.99",
        "Alaska & Hawaii: Standard rates apply; delivery may take 5–7 business days",
      ],
    },
    {
      title: "Order Tracking",
      content:
        "Once your order ships, you'll receive a confirmation email with a tracking number. Track from that email or our Track Order page.",
    },
    {
      title: "Shipping Restrictions",
      content:
        "We currently ship to all 50 US states. We do not ship to PO boxes for express orders.",
    },
    {
      title: "Lost or Damaged Packages",
      content: `If a package arrives damaged or doesn't arrive within 10 business days of the estimate, contact us at ${email}. We'll work with the carrier to make it right.`,
    },
  ],
};

export const returnPolicy = {
  title: "Return Policy",
  description: `If a ${legal} purchase isn't right, we'll help you return it.`,
  sections: [
    {
      title: "30-Day Return Window",
      content:
        "You may return most items within 30 days of delivery for a refund or exchange. Items must be unused and in original packaging.",
    },
    {
      title: "How to Start a Return",
      content: "",
      list: [
        `Email ${email} with your order number and reason for return`,
        "We'll send a prepaid return label within 1 business day",
        "Pack items securely in original packaging and attach the label",
        "Drop off at any authorized shipping location",
        "Refund processed within 5–7 business days of receiving your return",
      ],
    },
    {
      title: "Non-Returnable Items",
      content: "",
      list: [
        "Items marked as final sale",
        "Used or altered products",
        "Items without original packaging",
        "Gift cards",
      ],
    },
    {
      title: "Exchanges",
      content:
        "Need a different size? Contact us and we'll arrange an exchange. Replacement shipping is covered when the original item is returned unused.",
    },
  ],
};

export const refundPolicy = {
  title: "Refund Policy",
  description: `Refund terms for ${legal} orders.`,
  sections: [
    {
      title: "Refund Eligibility",
      content:
        "Refunds are available for items returned within 30 days of delivery in unused condition with original packaging. Sale items are eligible unless marked final sale.",
    },
    {
      title: "Refund Processing Time",
      content:
        "Once we receive and inspect your return, refunds are processed within 5–7 business days to the original payment method. Banks may take an additional 3–5 days to post the credit.",
    },
    {
      title: "Partial Refunds",
      content: "",
      list: [
        "Items with obvious use or wear may receive a partial refund",
        "Items returned without original packaging may incur a 15% restocking fee",
        "Shipping costs are non-refundable unless the return is due to our error",
      ],
    },
    {
      title: "Defective or Wrong Items",
      content:
        "If you receive a defective or incorrect item, contact us immediately. We'll provide a prepaid label and issue a full refund including original shipping, or send a replacement.",
    },
    {
      title: "Contact Us",
      content: `Questions about refunds? Email ${email}.`,
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  description: `Last updated: September 16, 2026. How ${legal} collects, uses, and protects your information.`,
  sections: [
    {
      title: "Information We Collect",
      content:
        "When you visit our website, create an account, or place an order, we may collect your name, email address, shipping address, and payment information. We also collect browsing data through cookies to improve your shopping experience.",
    },
    {
      title: "How We Use Your Information",
      content: "",
      list: [
        "Process and fulfill your orders",
        "Send order confirmations and shipping updates",
        "Respond to customer service requests",
        "Send marketing communications (with your consent)",
        "Improve our website and product offerings",
        "Prevent fraud and ensure security",
      ],
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell your personal information. We share data only with trusted service providers who help us operate — such as shipping carriers and payment processors — and only as needed to provide our services.",
    },
    {
      title: "Cookies",
      content:
        "We use cookies to remember your cart, wishlist, and preferences. You can disable cookies in your browser; some site features may not function properly.",
    },
    {
      title: "Your Rights",
      content: `You may request access to, correction of, or deletion of your personal data at any time by contacting ${email}. Massachusetts residents have additional rights under applicable state privacy laws.`,
    },
    {
      title: "Contact",
      content: `For privacy-related inquiries, contact ${email} or write to: ${legal}, ${address}.`,
    },
  ],
};

export const termsPolicy = {
  title: "Terms & Conditions",
  description: `Please read these terms before using the ${legal} website.`,
  sections: [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site.`,
    },
    {
      title: "Products & Pricing",
      content:
        "We strive to display accurate product descriptions, images, and pricing. Errors may occur. We reserve the right to correct errors and to update information at any time. Prices are in US dollars.",
    },
    {
      title: "Orders & Payment",
      content:
        "Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order. Checkout on this site is a demonstration flow and does not process live payments.",
    },
    {
      title: "Intellectual Property",
      content: `All content on this website — including text, images, logos, and design — is the property of ${legal} and protected by copyright and trademark laws. You may not reproduce or distribute our content without written permission.`,
    },
    {
      title: "Limitation of Liability",
      content: `${legal} shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product in question.`,
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the Commonwealth of Massachusetts, United States. Any disputes shall be resolved in the courts of Norfolk County, Massachusetts.",
    },
  ],
};

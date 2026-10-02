/**
 * ─────────────────────────────────────────────────────────────
 *  CAFE SNAPCHAT — edit everything for the site in this file.
 *  Menu names, prices, photos, hours, phone, and social links.
 *  Prices match the cafe menu card.
 * ─────────────────────────────────────────────────────────────
 */

export const cafe = {
  name: "Cafe Snapchat",
  tagline: "Good Food. Good Vibes. Good Moments.",
  eyebrow: "Pimpri Colony · Nehru Nagar",
  rating: 4.8,
  reviewCount: 100,
  ratingLabel: "4.8 ★ on Google",
  hoursLabel: "Open daily 9:30 AM – 10 PM",
  opens: "09:30",
  closes: "22:00",
  phoneDisplay: "+91 80100 79886",
  phoneTel: "+918010079886",
  whatsapp: "https://wa.me/918010079886?text=Hi%20Cafe%20Snapchat%2C%20I%27d%20like%20to%20order.",
  maps: "https://maps.google.com/?cid=8702681812758023164",
  /** Embedded map — Shankeshwar Darshan, near Santoshi Mata Chowk. */
  mapEmbed: "https://www.google.com/maps?q=18.629459,73.819693&z=16&output=embed",
  /** Cafe Instagram: @cafesnapchat */
  instagram: "https://www.instagram.com/cafesnapchat/",
  instagramHandle: "@cafesnapchat",
  address: {
    line1: "Shop no. 6, Shankeshwar Darshan",
    line2: "Santoshi Mata Chowk, Nehru Nagar",
    line3: "Pimpri Colony, Pimpri-Chinchwad",
    line4: "Maharashtra 411018",
  },
  addressOneLine:
    "Shop no. 6, Shankeshwar Darshan, Santoshi Mata Chowk, Nehru Nagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018",
} as const;

/** Photos — replace any URL to change a picture on the site. */
export const photos = {
  hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=75",
  latte: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=75",
  corner: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=75",
  table: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=75",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=75",
  vegPizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=75",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1000&q=75",
  pastaRed: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=75",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=75",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=75",
  nuggets: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=75",
  cheeseBalls: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=1000&q=75",
  coldCoffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=75",
  cappuccino: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1000&q=75",
  shake: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=75",
  breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=75",
  pancakes: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1000&q=75",
  sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=75",
  friends: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=75",
  spread: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=75",
} as const;

export const marqueeItems = [
  "Pizza",
  "Pasta",
  "Cold Coffee",
  "Cheese Corn Momos",
  "Burgers",
  "Nuggets",
  "Cheese Fries",
  "Mojito",
] as const;

export type MenuItem = {
  name: string;
  price: string;
  priceLarge?: string;
  favorite?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  hasSizes?: boolean;
  items: MenuItem[];
};

/** Full menu from the cafe card. Pizza prices are Medium then Large. */
export const menu: MenuCategory[] = [
  {
    id: "cold-coffee",
    label: "Cold Coffee",
    items: [
      { name: "Cold Coffee", price: "₹60" },
      { name: "Chocolate Cold Coffee", price: "₹90" },
      { name: "Cold Coffee with Ice", price: "₹110" },
      { name: "Snapchat Cold Coffee", price: "₹140" },
    ],
  },
  {
    id: "hot-coffee",
    label: "Hot Coffee",
    items: [
      { name: "Black Hot Coffee", price: "₹40" },
      { name: "Hot Coffee", price: "₹40" },
      { name: "Hot Chocolate Coffee", price: "₹60" },
      { name: "Tea", price: "₹20" },
    ],
  },
  {
    id: "milkshake",
    label: "Milk Shake",
    items: [
      { name: "Strawberry", price: "₹80" },
      { name: "Mango", price: "₹89" },
      { name: "Vanilla", price: "₹80" },
      { name: "KitKat", price: "₹89" },
      { name: "Black Currant", price: "₹80" },
    ],
  },
  {
    id: "mojito",
    label: "Mojito",
    items: [
      { name: "Green Apple", price: "₹79" },
      { name: "Blue Lagoon", price: "₹89" },
      { name: "Blueberry", price: "₹89" },
      { name: "Mint Mojito", price: "₹89" },
      { name: "Peach Mojito", price: "₹79" },
    ],
  },
  {
    id: "soda",
    label: "Soda",
    items: [
      { name: "Masala Soda", price: "₹40" },
      { name: "Lime Soda", price: "₹30" },
      { name: "Salted Lime Soda", price: "₹30" },
    ],
  },
  {
    id: "toast",
    label: "Toast",
    items: [
      { name: "Cheese Chilli Toast", price: "₹70" },
      { name: "Cheese Garlic Bread", price: "₹90" },
    ],
  },
  {
    id: "sandwich",
    label: "Sandwich",
    items: [
      { name: "Veg Sandwich", price: "₹70" },
      { name: "Cheese Corn Sandwich", price: "₹100" },
      { name: "Bombay Masala Sandwich", price: "₹110" },
      { name: "Paneer Sandwich", price: "₹120" },
      { name: "Peri Peri Sandwich", price: "₹120" },
    ],
  },
  {
    id: "fries",
    label: "Fries",
    items: [
      { name: "Salted Fries", price: "₹80" },
      { name: "Peri Peri Fries", price: "₹90" },
      { name: "Cheese Fries", price: "₹110" },
    ],
  },
  {
    id: "maggi",
    label: "Maggi",
    items: [
      { name: "Veg Maggi", price: "₹65" },
      { name: "Plain Maggi", price: "₹59" },
      { name: "Double Masala Maggi", price: "₹80" },
      { name: "Corn Cheese Maggi", price: "₹90" },
      { name: "Peri Peri Tadka Maggi", price: "₹100" },
    ],
  },
  {
    id: "momos",
    label: "Momos",
    items: [
      { name: "Veg Momos", price: "₹70" },
      { name: "Cheese Corn Momos", price: "₹90", favorite: true },
      { name: "Paneer Momos", price: "₹90" },
    ],
  },
  {
    id: "nuggets",
    label: "Nuggets",
    items: [
      { name: "Veg Nuggets", price: "₹70" },
      { name: "Corn Cheese Nugget", price: "₹80", favorite: true },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Red Sauce Pasta", price: "₹110" },
      { name: "White Pasta", price: "₹129", favorite: true },
      { name: "Cheese Burst Pasta", price: "₹149" },
      { name: "Pink Pasta (Mix Sauce)", price: "₹159" },
    ],
  },
  {
    id: "burger",
    label: "Burger",
    items: [
      { name: "Veg Burger", price: "₹80" },
      { name: "Aloo Tikki Burger", price: "₹70" },
      { name: "Cheese Burger", price: "₹110" },
      { name: "Double Cheese Veg Burger", price: "₹120" },
      { name: "Paneer Burger", price: "₹110" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    hasSizes: true,
    items: [
      { name: "Margherita Pizza", price: "₹90", priceLarge: "₹140" },
      { name: "Onion Pizza", price: "₹100", priceLarge: "₹150" },
      { name: "Tandoori Pizza", price: "₹120", priceLarge: "₹170" },
      { name: "Cheese Burst Pizza", price: "₹150", priceLarge: "₹230" },
      { name: "Veg Pizza", price: "₹120", priceLarge: "₹230" },
      { name: "Cafe Snapchat Special Pizza", price: "₹180", priceLarge: "₹280" },
      { name: "Corn Cheese Pizza", price: "₹120", priceLarge: "₹220" },
      { name: "Paneer Pizza", price: "₹140", priceLarge: "₹240" },
    ],
  },
];

export const gallery = [
  { src: photos.hero, alt: "Sunlit cafe interior with wooden tables", tall: true },
  { src: photos.pasta, alt: "Creamy pasta in a white bowl", tall: false },
  { src: photos.pizza, alt: "Freshly baked pizza with a blistered crust", tall: false },
  { src: photos.latte, alt: "Latte with heart-shaped foam art", tall: true },
  { src: photos.friends, alt: "Friends sharing a table in a cozy cafe", tall: false },
  { src: photos.fries, alt: "Crisp cheese fries", tall: false },
  { src: photos.coldCoffee, alt: "Iced cold coffee with a creamy top", tall: true },
  { src: photos.spread, alt: "A shared table of plates and drinks", tall: false },
  { src: photos.corner, alt: "A quiet coffee counter in warm light", tall: false },
] as const;

export const reviews = [
  {
    quote:
      "Loved the pasta, pizza and nuggets. Everything was fresh and flavorful, and beautifully presented.",
    detail: "Google review",
  },
  {
    quote: "Very quiet place, extremely good food, and a very humble owner.",
    detail: "Google review",
  },
  {
    quote: "Corn cheese balls are a must try!",
    detail: "Google review",
  },
  {
    quote: "Great atmosphere, cozy vibe and amazing coffee.",
    detail: "Google review",
  },
] as const;

export const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: cafe.name,
  image: photos.hero,
  servesCuisine: ["Cafe", "Coffee", "Pizza", "Pasta", "Burgers", "Breakfast"],
  priceRange: "₹₹",
  telephone: cafe.phoneTel,
  hasMap: cafe.maps,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop no. 6, Shankeshwar Darshan, Santoshi Mata Chowk, Nehru Nagar, Pimpri Colony",
    addressLocality: "Pimpri-Chinchwad",
    addressRegion: "Maharashtra",
    postalCode: "411018",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: cafe.opens,
      closes: cafe.closes,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(cafe.rating),
    bestRating: "5",
    reviewCount: String(cafe.reviewCount),
  },
};

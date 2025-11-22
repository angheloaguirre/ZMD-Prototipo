export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYzNDk5NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium sound quality",
      "Comfortable ear cushions"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 2,
    name: "Fast Charging Cable",
    category: "Chargers",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNoYXJnZXIlMjBjYWJsZXxlbnwxfHx8fDE3NjM0NjE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Durable fast charging cable compatible with all USB-C devices. 2-meter length for added convenience.",
    features: [
      "USB-C compatible",
      "Fast charging support",
      "2-meter length",
      "Reinforced cable",
      "2-year warranty"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 532
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    category: "Keyboards",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MXx8fHwxNzYzNTA4MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "RGB mechanical keyboard with customizable keys and premium build quality for gaming and productivity.",
    features: [
      "Mechanical switches",
      "RGB backlighting",
      "Programmable keys",
      "Aluminum frame",
      "Anti-ghosting"
    ],
    inStock: true,
    rating: 4.9,
    reviews: 387
  },
  {
    id: 4,
    name: "Protective Phone Case",
    category: "Phone Accessories",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzYzNTQ5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Military-grade protection with sleek design. Compatible with wireless charging.",
    features: [
      "Military-grade protection",
      "Wireless charging compatible",
      "Slim design",
      "Raised bezels",
      "Multiple colors available"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 821
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    category: "Accessories",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMG1vdXNlfGVufDF8fHx8MTc2MzUwNjM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-precision wireless gaming mouse with customizable DPI and RGB lighting.",
    features: [
      "16000 DPI sensor",
      "Wireless connectivity",
      "RGB lighting",
      "Programmable buttons",
      "70-hour battery life"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 6,
    name: "Aluminum Laptop Stand",
    category: "Accessories",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzdGFuZHxlbnwxfHx8fDE3NjM1NjIyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ergonomic aluminum laptop stand for better posture and improved cooling.",
    features: [
      "Aluminum construction",
      "Adjustable height",
      "Improved cooling",
      "Cable management",
      "Compatible with all laptops"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 7,
    name: "20000mAh Power Bank",
    category: "Chargers",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmt8ZW58MXx8fHwxNzYzNDY4NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-capacity power bank with fast charging for multiple devices simultaneously.",
    features: [
      "20000mAh capacity",
      "Fast charging",
      "Dual USB ports",
      "LED battery indicator",
      "Compact design"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678
  },
  {
    id: 8,
    name: "Bluetooth Earbuds",
    category: "Audio",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYzNDk5NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "True wireless earbuds with premium sound and water resistance.",
    features: [
      "True wireless",
      "IPX7 water resistant",
      "25-hour playtime",
      "Touch controls",
      "Premium sound quality"
    ],
    inStock: false,
    rating: 4.9,
    reviews: 912
  }
];

export const categories = [
  "All Products",
  "Audio",
  "Chargers",
  "Keyboards",
  "Phone Accessories",
  "Accessories"
];

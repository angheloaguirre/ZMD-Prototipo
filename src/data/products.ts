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
    "id": 1,
    "name": "Auriculares inalámbricos premium",
    "category": "Audio",
    "price": 149.99,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYzNDk5NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Experimenta una calidad de sonido superior con nuestros auriculares inalámbricos premium con cancelación activa de ruido y 30 horas de duración de batería.",
    "features": [
      "Cancelación activa de ruido",
      "Duración de batería de 30 horas",
      "Bluetooth 5.0",
      "Calidad de sonido premium",
      "Almohadillas cómodas para los oídos"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviews": 245
  },
  {
    "id": 2,
    "name": "Cable de carga rápida",
    "category": "Cargadores",
    "price": 24.99,
    "image": "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNoYXJnZXIlMjBjYWJsZXxlbnwxfHx8fDE3NjM0NjE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Cable duradero de carga rápida compatible con todos los dispositivos USB-C. Longitud de 2 metros para mayor comodidad.",
    "features": [
      "Compatible con USB-C",
      "Soporte de carga rápida",
      "Longitud de 2 metros",
      "Cable reforzado",
      "Garantía de 2 años"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviews": 532
  },
  {
    "id": 3,
    "name": "Teclado mecánico para juegos",
    "category": "Teclados",
    "price": 129.99,
    "image": "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MXx8fHwxNzYzNTA4MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Teclado mecánico RGB con teclas personalizables y calidad de construcción premium para juegos y productividad.",
    "features": [
      "Interruptores mecánicos",
      "Retroiluminación RGB",
      "Teclas programables",
      "Marco de aluminio",
      "Anti-ghosting"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviews": 387
  },
  {
    "id": 4,
    "name": "Funda protectora para teléfono",
    "category": "Accesorios para teléfonos",
    "price": 29.99,
    "image": "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzYzNTQ5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Protección de grado militar con diseño elegante. Compatible con carga inalámbrica.",
    "features": [
      "Protección de grado militar",
      "Compatible con carga inalámbrica",
      "Diseño delgado",
      "Bordes elevados",
      "Colores disponibles"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviews": 821
  },
  {
    "id": 5,
    "name": "Ratón inalámbrico para juegos",
    "category": "Accesorios",
    "price": 79.99,
    "image": "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMG1vdXNlfGVufDF8fHx8MTc2MzUwNjM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Ratón inalámbrico de alta precisión para juegos con DPI personalizable y iluminación RGB.",
    "features": [
      "Sensor de 16000 DPI",
      "Conectividad inalámbrica",
      "Iluminación RGB",
      "Botones programables",
      "Duración de batería de 70 horas"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviews": 456
  },
  {
    "id": 6,
    "name": "Soporte de aluminio para laptop",
    "category": "Accesorios",
    "price": 49.99,
    "image": "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzdGFuZHxlbnwxfHx8fDE3NjM1NjIyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Soporte ergonómico de aluminio para laptop que mejora la postura y la refrigeración.",
    "features": [
      "Construcción de aluminio",
      "Altura ajustable",
      "Refrigeración mejorada",
      "Gestión de cables",
      "Compatible con todas las laptops"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviews": 234
  },
  {
    "id": 7,
    "name": "Power Bank de 20000mAh",
    "category": "Cargadores",
    "price": 59.99,
    "image": "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmt8ZW58MXx8fHwxNzYzNDY4NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Power bank de alta capacidad con carga rápida para varios dispositivos simultáneamente.",
    "features": [
      "Capacidad de 20000mAh",
      "Carga rápida",
      "Puertos USB dobles",
      "Indicador LED de batería",
      "Diseño compacto"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviews": 678
  },
  {
    "id": 8,
    "name": "Auriculares Bluetooth",
    "category": "Audio",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYzNDk5NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "Auriculares totalmente inalámbricos con sonido premium y resistencia al agua.",
    "features": [
      "Totalmente inalámbricos",
      "Resistencia al agua IPX7",
      "25 horas de tiempo de reproducción",
      "Controles táctiles",
      "Calidad de sonido premium"
    ],
    "inStock": false,
    "rating": 4.9,
    "reviews": 912
  }
];

export const categories = [
  "All Products",
  "Audio",
  "Cargadores",
  "Teclados",
  "Accesorios para teléfonos",
  "Accesorios"
];

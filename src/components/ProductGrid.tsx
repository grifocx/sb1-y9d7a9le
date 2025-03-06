import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const products = [
  {
    id: 'emonda-sl6',
    name: 'Trek Émonda SL 6',
    category: 'Road Bikes',
    price: '$4,399.99',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    specs: ['Carbon Frame', 'Shimano Ultegra', '7.7 kg'],
  },
  {
    id: 'supercal',
    name: 'Trek Supercaliber SL',
    category: 'Mountain Bikes',
    price: '$3,299.99',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80',
    badge: 'New Arrival',
    specs: ['Fox Suspension', 'SRAM GX Eagle', '29" Wheels'],
  },
  {
    id: 'topstone',
    name: 'Cannondale Topstone',
    category: 'Gravel Bikes',
    price: '$2,799.99',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80',
    specs: ['Aluminum Frame', 'Shimano GRX', 'Carbon Fork'],
  },
  {
    id: 'hightower',
    name: 'Santa Cruz Hightower',
    category: 'Mountain Bikes',
    price: '$5,499.99',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80',
    badge: 'Premium',
    specs: ['Carbon Frame', 'Fox 36 Fork', 'SRAM X01'],
  },
  {
    id: 'defy',
    name: 'Giant Defy Advanced Pro',
    category: 'Road Bikes',
    price: '$3,799.99',
    image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80',
    specs: ['Carbon Frame', 'Shimano 105', 'Hydraulic Disc'],
  },
  {
    id: 'diverge',
    name: 'Specialized Diverge',
    category: 'Gravel Bikes',
    price: '$2,999.99',
    image: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80',
    specs: ['Carbon Frame', 'SRAM Rival', 'Future Shock'],
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover-scale">
          <CardHeader className="p-0">
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
              {product.badge && (
                <Badge className="absolute top-4 right-4 bg-accent">
                  {product.badge}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <p className="text-lg font-semibold mt-2">{product.price}</p>
            <ul className="mt-4 space-y-1">
              {product.specs.map((spec, i) => (
                <li key={`${product.id}-spec-${i}`} className="text-sm text-muted-foreground">
                  • {spec}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
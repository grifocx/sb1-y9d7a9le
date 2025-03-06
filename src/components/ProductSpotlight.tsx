import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const featuredProducts = [
  {
    id: 'emonda-sl6-featured',
    name: 'Trek Émonda SL 6',
    category: 'Road Bikes',
    price: '$4,399.99',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80',
    badge: 'Featured',
    description: 'Lightweight carbon frame with Shimano Ultegra components. Perfect for climbing and long-distance rides.',
    specs: ['Carbon Frame', 'Shimano Ultegra', '7.7 kg'],
  },
  {
    id: 'supercal',
    name: 'Trek Supercaliber SL',
    category: 'Mountain Bikes',
    price: '$3,299.99',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80',
    badge: 'Staff Pick',
    description: 'Trail-ready full suspension with modern geometry. Handles everything from flow trails to technical descents.',
    specs: ['Fox Suspension', 'SRAM GX Eagle', '29" Wheels'],
  },
  {
    id: 'hightower-featured',
    name: 'Santa Cruz Hightower',
    category: 'Mountain Bikes',
    price: '$5,499.99',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80',
    badge: 'New Arrival',
    description: 'Versatile trail bike with premium build. The perfect balance of climbing efficiency and descending capability.',
    specs: ['Carbon Frame', 'Fox 36 Fork', 'SRAM X01'],
  },
];

export function ProductSpotlight() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Top Bicycle Models Available in Haymarket</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Featured bikes handpicked by our Northern Virginia cycling experts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover-scale">
            <CardHeader className="p-0">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={`${product.name} available in Haymarket and Gainesville, VA`}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-accent">
                  {product.badge}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
              <p className="text-lg font-semibold mb-4">{product.price}</p>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <ul className="space-y-1">
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
    </section>
  );
}
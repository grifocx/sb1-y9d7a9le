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
  },
  {
    id: 'supercal',
    name: 'Trek Supercaliber SL',
    category: 'Mountain Bikes',
    price: '$3,299.99',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80',
    badge: 'New Arrival',
  },
  {
    id: 'topstone',
    name: 'Cannondale Topstone',
    category: 'Gravel Bikes',
    price: '$2,799.99',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80',
    badge: 'Featured',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold">Quality Bikes Available in Haymarket</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our handpicked selection of quality bicycles for Northern Virginia riders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
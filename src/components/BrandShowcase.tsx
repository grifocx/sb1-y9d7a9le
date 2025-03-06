import React from 'react';
import { Card, CardContent } from './ui/card';

const brands = [
  {
    id: 'trek',
    name: 'Trek',
    logo: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80',
    description: 'Leading innovator in road and mountain bikes',
  },
  {
    id: 'cannondale',
    name: 'Cannondale',
    logo: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80',
    description: 'Performance-driven bikes and equipment',
  },
  {
    id: 'orbea',
    name: 'Orbea',
    logo: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80',
    description: 'Revolutionary aluminum and carbon frames',
  },
  {
    id: 'bianchi',
    name: 'Bianchi',
    logo: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80',
    description: 'Premium mountain bikes and components',
  },
];

export function BrandShowcase() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Quality Bicycle Brands in Haymarket, VA</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Authorized dealer for the world's finest bicycle manufacturers in Northern Virginia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <Card key={brand.id} className="overflow-hidden hover-scale">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-6">
                <img
                  src={brand.logo}
                  alt={`${brand.name} bikes available in Haymarket, VA`}
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
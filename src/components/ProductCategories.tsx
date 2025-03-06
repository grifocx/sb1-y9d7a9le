import React from 'react';
import { Card, CardContent } from './ui/card';
import { Bike, Mountain, Loader as Road, Compass, Wrench, Shirt } from 'lucide-react';

const categories = [
  {
    name: 'Road Bikes',
    icon: Road,
    description: 'Performance road bikes for speed and endurance',
    href: '/products/road-bikes',
  },
  {
    name: 'Mountain Bikes',
    icon: Mountain,
    description: 'Trail-ready bikes for any terrain',
    href: '/products/mountain-bikes',
  },
  {
    name: 'Gravel Bikes',
    icon: Compass,
    description: 'Versatile bikes for mixed-terrain adventures',
    href: '/products/gravel-bikes',
  },
  {
    name: 'Electric Bikes',
    icon: Bike,
    description: 'Pedal-assist bikes for extended rides',
    href: '/products/electric-bikes',
  },
  {
    name: 'Components',
    icon: Wrench,
    description: 'Premium parts and upgrades',
    href: '/products/components',
  },
  {
    name: 'Apparel',
    icon: Shirt,
    description: 'Cycling clothing and accessories',
    href: '/products/apparel',
  },
];

export function ProductCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mobile-spacing">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.href}
          className="group hover:no-underline mobile-touch-target"
        >
          <Card className="h-full transition-transform hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0 mobile-touch-target">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
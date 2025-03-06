import React from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, Users, Trophy, Wrench, ShoppingCart, Medal, Ticket } from 'lucide-react';

const values = [
  {
    title: 'Passion for Cycling',
    description: 'We live and breathe cycling, sharing our enthusiasm with every customer who walks through our doors.',
    icon: Heart,
  },
  {
    title: 'Community First',
    description: 'Building and supporting the local cycling community through events, rides, and education.',
    icon: Users,
  },
  {
    title: 'Expert Service',
    description: 'Our certified technicians provide the highest level of professional service for all types of bikes.',
    icon: Wrench,
  },
  {
    title: 'Quality Products',
    description: 'We carry a great selection of bikes, parts, and accessories to keep everyone riding with enjoyment.',
    icon: ShoppingCart,
  },
];

export function Mission() {
  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Mission & Values</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dedicated to excellence in cycling, service, and community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="hover-scale">
              <CardContent className="p-6">
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
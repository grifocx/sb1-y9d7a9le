import React from 'react';
import { Wrench, Ruler, Calendar, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const services = [
  {
    title: 'Expert Repairs',
    description: 'Professional maintenance and repair services to keep your bike in perfect condition.',
    icon: Wrench,
  },
  {
    title: 'Bike Fitting',
    description: 'Comprehensive fitting service for optimal comfort and performance.',
    icon: Ruler,
  },
  {
    title: 'Maintenance Packages',
    description: 'Regular maintenance packages to keep your bike in peak condition.',
    icon: Calendar,
  },
  {
    title: 'Warranty Service',
    description: 'Authorized warranty service for major bike brands.',
    icon: Shield,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold">Professional Bicycle Services in Haymarket</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Expert care for every bike and rider in Northern Virginia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wrench, Ruler, Calendar, Shield, Settings, Bike, PenTool as Tool, Cog } from 'lucide-react';

const services = [
  {
    title: 'Basic Tune-Up',
    price: '$89.99',
    description:
      'Complete safety check, gear adjustment, brake adjustment, tire inspection, and basic cleaning.',
    duration: '1-2 days',
    icon: Wrench,
  },
  {
    title: 'Comprehensive Tune-Up',
    price: '$159.99',
    description:
      'Everything in basic tune-up plus bearing adjustments, wheel truing, and deep cleaning.',
    duration: '2-3 days',
    icon: Settings,
  },
  {
    title: 'Professional Bike Fitting',
    price: '$249.99',
    description:
      'Complete biomechanical assessment and bike adjustment for optimal comfort and performance.',
    duration: '2-3 hours',
    icon: Ruler,
  },
  {
    title: 'Wheel Building & Truing',
    price: '$79.99',
    description:
      'Custom wheel building and professional truing services for optimal performance.',
    duration: '1-2 days',
    icon: Cog,
  },
  {
    title: 'Suspension Service',
    price: '$149.99',
    description:
      'Fork and shock maintenance, including oil change and seal replacement.',
    duration: '2-3 days',
    icon: Tool,
  },
  {
    title: 'E-Bike Service',
    price: '$129.99',
    description:
      'Specialized maintenance for electric bikes, including system diagnostics.',
    duration: '1-2 days',
    icon: Bike,
  },
  {
    title: 'Annual Maintenance Plan',
    price: '$299.99/year',
    description:
      'Four seasonal tune-ups, priority service, and 10% off additional repairs.',
    duration: 'Year-round',
    icon: Calendar,
  },
  {
    title: 'Warranty Service',
    price: 'Varies',
    description: 'Authorized warranty repairs for major bike brands.',
    duration: 'Varies',
    icon: Shield,
  },
];

export function ServicesList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Affordable Bicycle Services in Haymarket & Gainesville, VA</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
        {services.map((service) => (
          <Card key={service.title} className="hover-scale">
            <CardHeader>
              <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Duration:</span>
                <span>{service.duration}</span>
              </div>
              <div className="mt-4 text-lg font-semibold text-accent text-center">
                {service.price}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
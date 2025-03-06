import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    price: '$299.99/year',
    description: 'Essential maintenance for casual riders',
    features: [
      'Four seasonal tune-ups',
      'Basic safety checks',
      'Gear and brake adjustments',
      'Priority scheduling',
      '10% off additional repairs',
      'Free tire installations',
    ],
  },
  {
    name: 'Pro Plan',
    price: '$499.99/year',
    description: 'Comprehensive care for serious cyclists',
    features: [
      'Everything in Basic Plan',
      'Suspension service',
      'Wheel truing',
      'Drive train deep cleaning',
      '20% off additional repairs',
      'Free basic parts installation',
      'Two bike fits per year',
    ],
  },
  {
    name: 'Elite Plan',
    price: '$799.99/year',
    description: 'Ultimate care for performance athletes',
    features: [
      'Everything in Pro Plan',
      'Monthly maintenance checks',
      'Race day preparation',
      'Emergency service',
      '30% off additional repairs',
      'Free advanced parts installation',
      'Quarterly bike fits',
      'Loaner bike service',
    ],
  },
];

export function ServicePlans() {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Haymarket's Best Bicycle Maintenance Plans</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect care package for your riding style in Northern Virginia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="hover-scale relative overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <p className="text-3xl font-bold text-accent mt-4">{plan.price}</p>
              <p className="text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
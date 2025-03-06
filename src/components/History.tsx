import React from 'react';
import { Card, CardContent } from './ui/card';
import { Bike, Users, Trophy, MapPin } from 'lucide-react';

const milestones = [
  {
    year: '2007',
    title: 'Grand Opening',
    description: 'Opened our doors in historic Haymarket, starting with just 2 employees and a passion for cycling.',
    icon: Bike,
  },
  {
    year: '2012',
    title: 'Community Growth',
    description: 'Launched our weekly group rides and cycling club, building a thriving local cycling community.',
    icon: Users,
  },
  {
    year: '2015',
    title: 'Service Excellence',
    description: 'Recognized as one of the top bike shops in Northern Virginia by Bicycle Retailer magazine.',
    icon: Trophy,
  },
  {
    year: '2020',
    title: 'Expansion',
    description: 'Moved to our current location, tripling our showroom space and adding a dedicated service center.',
    icon: MapPin,
  },
];

export function History() {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Our Journey</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          17 years of serving the Northern Virginia cycling community
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20" />
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-full bg-accent/10">
                        <milestone.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-2xl font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
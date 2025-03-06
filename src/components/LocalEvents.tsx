import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const events = [
  {
    title: 'Wednesday Night Group Ride',
    date: 'Every Wednesday at 6:00 PM',
    location: 'Haymarket Bicycles',
    participants: '15-25 riders',
    description: 'A weekly 20-mile ride through scenic Haymarket and Gainesville. All skill levels welcome.',
    detailsUrl: '#group-ride',
  },
  {
    title: 'Bull Run Mountain Trail Ride',
    date: 'Saturday, May 15 at 8:00 AM',
    location: 'Bull Run Mountain Trailhead',
    participants: '10-15 riders',
    description: 'Mountain bike adventure through challenging Bull Run Mountain trails near Haymarket.',
    detailsUrl: '#trail-ride',
  },
  {
    title: 'Maintenance Workshop',
    date: 'Sunday, May 16 at 2:00 PM',
    location: 'Haymarket Bicycles',
    participants: 'Limited to 8 participants',
    description: 'Learn essential bike maintenance skills from our expert technicians in our Haymarket shop.',
    detailsUrl: '#workshop',
  },
];

export function LocalEvents() {
  return (
    <section className="py-24 mobile-py">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold">Haymarket Cycling Events & Community Rides</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our Northern Virginia cycling community for group rides and workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile-spacing">
          {events.map((event, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-5 w-5 flex-shrink-0" />
                    <span>{event.participants}</span>
                  </div>
                  <p className="mt-4">{event.description}</p>
                  <Button className="w-full mt-4 min-h-[48px]" asChild>
                    <a href={event.detailsUrl}>More Details</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
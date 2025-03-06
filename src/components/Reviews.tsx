import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const reviews = [
  {
    id: '1',
    name: 'Michael R.',
    rating: 5,
    text: 'Best bike shop in Northern VA! The staff is incredibly knowledgeable and their service is top-notch.',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Sarah L.',
    rating: 5,
    text: 'Got my first road bike here and the fitting service was exceptional. They really take the time to get it right.',
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'David K.',
    rating: 5,
    text: 'Great selection of bikes and gear. The Wednesday night rides are a fantastic way to meet other cyclists.',
    date: '3 weeks ago',
  },
  {
    id: '4',
    name: 'Emily W.',
    rating: 5,
    text: 'Professional service and friendly staff. They went above and beyond to help me find the perfect bike.',
    date: '1 week ago',
  },
];

export function Reviews() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Read reviews from our cycling community
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="mx-2">
                  <CardHeader>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={`${review.id}-star-${i}`}
                          className="h-5 w-5 fill-accent text-accent"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{review.text}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{review.name}</span>
                      <span>{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
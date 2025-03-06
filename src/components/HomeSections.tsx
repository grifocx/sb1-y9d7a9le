import React from 'react';
import { Services } from './Services';
import { Reviews } from './Reviews';
import { LocalEvents } from './LocalEvents';

export function HomeSections() {
  return (
    <div className="space-y-16">
      <section id="services">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <Services />
      </section>
      
      <section id="reviews">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <Reviews />
      </section>
      
      <section id="community">
        <h2 className="text-3xl font-bold text-center mb-8">Community Events</h2>
        <LocalEvents />
      </section>
    </div>
  );
}
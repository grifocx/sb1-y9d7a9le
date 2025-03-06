import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <div className="relative py-16 md:py-24">
      <div className="absolute inset-0">
        <img
          src="https://ovuyfxvpqxshsbtpepsr.supabase.co/storage/v1/object/sign/logo/Haymarket%20Bicycles%20Logo%202024_Social%20Icon%20-%20Linkedin%20Cover%20Colors%20-%201536x768px%20.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvL0hheW1hcmtldCBCaWN5Y2xlcyBMb2dvIDIwMjRfU29jaWFsIEljb24gLSBMaW5rZWRpbiBDb3ZlciBDb2xvcnMgLSAxNTM2eDc2OHB4IC5wbmciLCJpYXQiOjE3NDEwMzE2MjEsImV4cCI6MjA1NjM5MTYyMX0.lUWAQEhgxb41_MT2hymbpzycp9fNxWicRZH1iPSWRuY"
          alt="Haymarket bicycles brand logo representing the rolling hills of the piedmont region of northern virginia"
          className="w-full h-full object-cover"
          width="1536"
          height="768"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Haymarket's Neighborhood Bicycle Shop Since 2007
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Serving Northern Virginia's cycling community for 17 years with expert service, quality bikes, and community of cycling enthusiasts.
          </p>
          <div className="mt-8 md:hidden">
            <Button size="lg" variant="secondary" className="min-h-[48px]" asChild>
              <a href="tel:+17037541911">
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
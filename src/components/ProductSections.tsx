import React from 'react';
import { ProductCategories } from './ProductCategories';
import { ProductSpotlight } from './ProductSpotlight';
import { BrandShowcase } from './BrandShowcase';

export function ProductSections() {
  return (
    <div className="space-y-24">
      <section id="categories">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Bike Categories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the perfect ride for your cycling style
          </p>
        </div>
        <ProductCategories />
      </section>
      
      <section id="featured">
        <ProductSpotlight />
      </section>
      
      <section id="brands">
        <BrandShowcase />
      </section>
    </div>
  );
}
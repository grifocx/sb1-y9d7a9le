import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Button } from './ui/button';

export function ProductFilters() {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Price Range</h3>
          <Slider
            defaultValue={[0, 5000]}
            max={10000}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$0</span>
            <span>$10,000</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Brands</h3>
          <div className="space-y-2">
            {['Trek', 'Specialized', 'Cannondale', 'Santa Cruz', 'Giant'].map(
              (brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={brand} />
                  <Label htmlFor={brand}>{brand}</Label>
                </div>
              )
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Frame Size</h3>
          <div className="space-y-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox id={size} />
                <Label htmlFor={size}>{size}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  );
}
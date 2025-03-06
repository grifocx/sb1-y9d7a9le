import React, { useState } from 'react';
import { ProductCategories } from './ProductCategories';
import { ProductSpotlight } from './ProductSpotlight';
import { BrandShowcase } from './BrandShowcase';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("categories");

  // Simple tab switching function that works in all browsers
  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      {/* Safari-compatible tab navigation */}
      <div className="flex flex-col sm:flex-row mb-8 border rounded-md overflow-hidden">
        <button 
          type="button"
          onClick={() => switchTab("categories")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "categories" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Categories
        </button>
        <button 
          type="button"
          onClick={() => switchTab("featured")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "featured" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Featured Bikes
        </button>
        <button 
          type="button"
          onClick={() => switchTab("brands")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "brands" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Our Brands
        </button>
      </div>
      
      {/* Tab content with explicit conditional rendering */}
      <div className="tab-content">
        {activeTab === "categories" && (
          <div className="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Bike Categories</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find the perfect ride for your cycling style
              </p>
            </div>
            <ProductCategories client:load />
          </div>
        )}
        
        {activeTab === "featured" && (
          <div className="fade-in">
            <ProductSpotlight client:load />
          </div>
        )}
        
        {activeTab === "brands" && (
          <div className="fade-in">
            <BrandShowcase client:load />
          </div>
        )}
      </div>
    </div>
  );
}
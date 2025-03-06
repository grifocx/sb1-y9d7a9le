import React, { useState } from 'react';
import { Services } from './Services';
import { Reviews } from './Reviews';
import { LocalEvents } from './LocalEvents';
import { FeaturedProducts } from './FeaturedProducts';

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState("services");

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
          onClick={() => switchTab("services")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "services" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Services
        </button>
        <button 
          type="button"
          onClick={() => switchTab("products")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "products" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Products
        </button>
        <button 
          type="button"
          onClick={() => switchTab("reviews")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "reviews" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Reviews
        </button>
        <button 
          type="button"
          onClick={() => switchTab("community")}
          className={`py-3 px-4 text-center font-medium transition-colors ${
            activeTab === "community" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          Community
        </button>
      </div>
      
      {/* Tab content with explicit conditional rendering */}
      <div className="tab-content">
        {activeTab === "services" && (
          <div className="fade-in">
            <Services />
          </div>
        )}
        
        {activeTab === "products" && (
          <div className="fade-in">
            <FeaturedProducts />
          </div>
        )}
        
        {activeTab === "reviews" && (
          <div className="fade-in">
            <Reviews />
          </div>
        )}
        
        {activeTab === "community" && (
          <div className="fade-in">
            <LocalEvents />
          </div>
        )}
      </div>
    </div>
  );
}
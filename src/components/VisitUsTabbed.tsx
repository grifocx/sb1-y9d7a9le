import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Bike, Coffee } from 'lucide-react';

interface ScheduleItem {
  day: string;
  hours: string;
}

interface VisitUsTabbedProps {
  mainShopHours: ScheduleItem[];
  studioHours: ScheduleItem[];
}

export default function VisitUsTabbed({ mainShopHours, studioHours }: VisitUsTabbedProps) {
  const [activeTab, setActiveTab] = useState("main-shop");

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
          onClick={() => switchTab("main-shop")}
          className={`py-3 px-4 text-center font-medium transition-colors flex items-center justify-center ${
            activeTab === "main-shop" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          <Bike className="h-4 w-4 mr-2" />
          <span>Main Shop</span>
        </button>
        <button 
          type="button"
          onClick={() => switchTab("studio")}
          className={`py-3 px-4 text-center font-medium transition-colors flex items-center justify-center ${
            activeTab === "studio" ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
          } sm:flex-1`}
        >
          <Coffee className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Studio @ Doppio Bunny Coffee</span>
          <span className="sm:hidden">Studio</span>
        </button>
      </div>
      
      {/* Tab content with explicit conditional rendering */}
      <div className="tab-content">
        {activeTab === "main-shop" && (
          <div className="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Store Hours Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Store Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {mainShopHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center text-sm py-2 border-b last:border-0"
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p>4414 Costello Way</p>
                      <p>Haymarket, VA 20169</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <a href="tel:+17037541911" className="hover:text-accent">
                      (703) 754-1911
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a href="mailto:info@haymarketbicycles.com" className="hover:text-accent">
                      info@haymarketbicycles.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.8173983168635!2d-77.64242228255615!3d38.81373709999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b666118743c475%3A0x6bcc451a75fe5acb!2sHaymarket%20Bicycles!5e0!3m2!1sen!2sus!4v1655827779754!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <a
                      href="https://goo.gl/maps/YZjqKfHvqGx6QLWJ6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === "studio" && (
          <div className="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Studio Hours Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Studio Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {studioHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center text-sm py-2 border-b last:border-0"
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Studio Contact Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p>6485 Main St.</p>
                      <p>The Plains, VA 20198</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <a href="tel:+17039878059" className="hover:text-accent">
                      (703) 987-8059
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a href="mailto:studio@haymarketbicycles.com" className="hover:text-accent">
                      studio@haymarketbicycles.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Studio Location Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?ll=38.86199,-77.774596&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=9299129892085581183&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <a
                      href="https://maps.google.com/maps?ll=38.86199,-77.774596&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=9299129892085581183"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
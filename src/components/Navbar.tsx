import React from 'react';
import { Menu, Home, ShoppingBag, Wrench, Users, Phone, FileText, Bike } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
}

const navigation: NavItem[] = [
  { id: 'home', name: 'Home', href: '/', icon: Home },
  { id: 'products', name: 'Products', href: '/products', icon: ShoppingBag },
  { id: 'services', name: 'Services', href: '/services', icon: Wrench },
  { id: 'resources', name: 'Resources', href: '/resources', icon: FileText },
  { id: 'about', name: 'About', href: '/about', icon: Users },
  { id: 'contact', name: 'Contact', href: '/contact', icon: Phone },
];

export function Navbar() {
  const [currentPath, setCurrentPath] = React.useState('');

  React.useEffect(() => {
    // Update current path on mount and when the URL changes
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  const navLinkClasses = (href: string) =>
    `transition-colors ${
      isActive(href)
        ? 'text-accent font-medium'
        : 'text-foreground/80 hover:text-accent'
    }`;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <a href="/" className="flex items-center group">
                <Bike className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
                <span className="ml-2 text-lg font-semibold group-hover:text-accent transition-colors">
                  Haymarket Bicycles
                </span>
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              {navigation.slice(0, -1).map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={navLinkClasses(item.href)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-accent hover:bg-accent/90 transition-colors"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        {/* Logo and Brand */}
        <div className="flex items-center justify-between px-4 h-16">
          <a href="/" className="flex items-center group">
            <Bike className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
            <span className="ml-2 text-lg font-semibold group-hover:text-accent transition-colors">
              Haymarket Bicycles
            </span>
          </a>
          
          <a href="tel:+17037541911" className="mobile-touch-target">
            <Phone className="h-5 w-5 text-accent" />
          </a>
        </div>

        {/* Navigation Icons */}
        <div className="flex justify-around items-center px-2 h-14 border-t">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg mobile-touch-target ${
                  active
                    ? 'mobile-nav-active'
                    : 'text-foreground/60 hover:text-accent hover:bg-accent/5'
                } transition-colors`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
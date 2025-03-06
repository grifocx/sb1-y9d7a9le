import React from 'react';
import { Card, CardContent } from './ui/card';
import { Home, Mail, Activity } from 'lucide-react';

export function AdminNav() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <nav className="flex flex-wrap gap-2">
          <a 
            href="/admin" 
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 hover:text-accent"
          >
            <Home className="w-4 h-4 mr-2" />
            Dashboard
          </a>
          <a 
            href="/admin/messages" 
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 hover:text-accent"
          >
            <Mail className="w-4 h-4 mr-2" />
            Messages
          </a>
          <a 
            href="/admin/system" 
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 hover:text-accent"
          >
            <Activity className="w-4 h-4 mr-2" />
            System Status
          </a>
        </nav>
      </CardContent>
    </Card>
  );
}
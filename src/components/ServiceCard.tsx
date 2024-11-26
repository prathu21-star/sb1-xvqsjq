import React from 'react';
import { Building2 } from 'lucide-react';
import type { Service } from '../types/service';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <Building2 className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-blue-600">{service.providers.length} providers</span>
        <span className="text-gray-500">View all →</span>
      </div>
    </div>
  );
}
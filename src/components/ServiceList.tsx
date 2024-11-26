import React, { useState } from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import SearchFilters from './SearchFilters';
import type { Service } from '../types/service';

interface ServiceListProps {
  onServiceSelect: (service: Service) => void;
}

interface FilterState {
  search: string;
  location: string;
  certifications: string[];
  budget: string;
  timeline: string;
}

export default function ServiceList({ onServiceSelect }: ServiceListProps) {
  const categories = Array.from(new Set(services.map(service => service.category)));
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    certifications: [],
    budget: '',
    timeline: ''
  });

  const filterServices = (service: Service) => {
    const matchesSearch = !filters.search || 
      service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      service.providers.some(provider => 
        provider.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        provider.description.toLowerCase().includes(filters.search.toLowerCase())
      );

    const matchesLocation = !filters.location ||
      service.providers.some(provider => 
        provider.location === filters.location
      );

    const matchesCertifications = filters.certifications.length === 0 ||
      service.providers.some(provider =>
        filters.certifications.every(cert =>
          provider.compliances.includes(cert)
        )
      );

    return matchesSearch && matchesLocation && matchesCertifications;
  };

  return (
    <div>
      <SearchFilters onFilterChange={setFilters} />
      
      <div className="space-y-12">
        {categories.map(category => {
          const filteredServices = services
            .filter(service => service.category === category)
            .filter(filterServices);

          if (filteredServices.length === 0) return null;

          return (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => onServiceSelect(service)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {services.filter(filterServices).length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No matching services found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
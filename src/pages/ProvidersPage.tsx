import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ServiceProvider from '../components/ServiceProvider';
import { providers } from '../data/providers';

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Flatten providers object into array
  const allProviders = Object.values(providers).reduce((acc, categoryProviders) => {
    return acc.concat(
      Object.values(categoryProviders).reduce((subAcc, subCategoryProviders) => {
        return subAcc.concat(subCategoryProviders);
      }, [])
    );
  }, []);

  // Get unique locations
  const locations = Array.from(new Set(allProviders.map(provider => provider.location)));

  // Filter providers
  const filteredProviders = allProviders.filter(provider => {
    const matchesSearch = !searchQuery || 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation = selectedLocation === 'all' || provider.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Service Providers</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search providers..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredProviders.length > 0 ? (
          filteredProviders.map((provider, index) => (
            <ServiceProvider key={index} provider={provider} />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900">No providers found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { SearchIcon, FilterIcon, MapPinIcon } from 'lucide-react';
import type { Service } from '../types/service';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  search: string;
  location: string;
  certifications: string[];
  budget: string;
  timeline: string;
}

const CERTIFICATIONS = [
  "US FDA", "EU GMP", "WHO GMP", "NABL", "ISO 9001:2015", 
  "ICH-GCP", "DCGI", "ANVISA", "AAALAC"
];

const LOCATIONS = [
  "Mumbai, Maharashtra",
  "Hyderabad, Telangana",
  "Bangalore, Karnataka",
  "Ahmedabad, Gujarat",
  "Chennai, Tamil Nadu"
];

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    certifications: [],
    budget: '',
    timeline: ''
  });

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search providers..."
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        {/* Location Filter */}
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            {LOCATIONS.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Budget Range */}
        <select
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => handleFilterChange('budget', e.target.value)}
        >
          <option value="">Budget Range</option>
          <option value="low">$10k - $50k</option>
          <option value="medium">$50k - $200k</option>
          <option value="high">$200k+</option>
        </select>

        {/* Timeline */}
        <select
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => handleFilterChange('timeline', e.target.value)}
        >
          <option value="">Project Timeline</option>
          <option value="1-3">1-3 months</option>
          <option value="3-6">3-6 months</option>
          <option value="6-12">6-12 months</option>
          <option value="12+">12+ months</option>
        </select>
      </div>

      {/* Certifications */}
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Certifications</h4>
        <div className="flex flex-wrap gap-2">
          {CERTIFICATIONS.map(cert => (
            <label key={cert} className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={(e) => {
                  const newCerts = e.target.checked
                    ? [...filters.certifications, cert]
                    : filters.certifications.filter(c => c !== cert);
                  handleFilterChange('certifications', newCerts);
                }}
              />
              <span className="ml-2 text-sm text-gray-600">{cert}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
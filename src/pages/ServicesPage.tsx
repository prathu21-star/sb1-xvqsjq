import React, { useState, useEffect } from 'react';
import { serviceCategories } from '../data/categories';
import ServiceTimeline from '../components/ServiceTimeline';
import SearchFilters from '../components/SearchFilters';
import ServiceDetail from '../components/ServiceDetail';
import { Search } from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(serviceCategories);

  useEffect(() => {
    if (searchQuery) {
      const filtered = serviceCategories.filter(category => {
        // Search in category name
        const matchesCategory = category.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Search in subcategories
        const matchesSubcategory = category.subcategories.some(sub => 
          sub.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return matchesCategory || matchesSubcategory;
      });
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(serviceCategories);
    }
  }, [searchQuery]);

  const handleBackClick = () => {
    setSelectedSubcategory(null);
    setSelectedCategory(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Reset selection when searching
    if (e.target.value) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          India's Premier Pharmaceutical Services Directory
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          From research to manufacturing, find the perfect partner for your needs.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search services, providers, or categories..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </section>

      <SearchFilters 
        onFilterChange={(filters) => {
          // Keep existing search query if no new search term is provided
          if (filters.search) {
            setSearchQuery(filters.search);
          }
        }} 
      />

      {selectedSubcategory && selectedCategory ? (
        <ServiceDetail
          category={selectedCategory}
          subcategory={selectedSubcategory}
          providers={[]} // Pass your providers data here
          onBack={handleBackClick}
        />
      ) : (
        <ServiceTimeline 
          categories={filteredCategories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      )}

      {/* No Results Message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No matching services found</h3>
          <p className="mt-2 text-gray-500">
            Try adjusting your search terms or browse all categories
          </p>
        </div>
      )}
    </div>
  );
}
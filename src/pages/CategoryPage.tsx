import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceCategories } from '../data/categories';
import { providers } from '../data/providers';
import { getCategoryKey } from '../utils/categoryMapping';
import { Users } from 'lucide-react';

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const categoryData = serviceCategories.find(c => c.name === category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const getProviderCount = (subcategory: string): number => {
    const categoryKey = getCategoryKey(category || '');
    const categoryProviders = providers[categoryKey] || {};
    return (categoryProviders[subcategory] || []).length;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.subcategories.map((subcategory) => {
          const providerCount = getProviderCount(subcategory);
          return (
            <button
              key={subcategory}
              onClick={() => navigate(`/category/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{subcategory}</h2>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  View specialized providers
                </p>
                <span className="flex items-center text-blue-600">
                  <Users className="w-4 h-4 mr-1" />
                  {providerCount} providers
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
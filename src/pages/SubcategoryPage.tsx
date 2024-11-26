import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceProvider from '../components/ServiceProvider';
import { providers } from '../data/providers';
import { getCategoryKey } from '../utils/categoryMapping';

export default function SubcategoryPage() {
  const { category, subcategory } = useParams();
  
  if (!category || !subcategory) {
    return <div>Invalid URL</div>;
  }

  const categoryKey = getCategoryKey(category);
  const categoryProviders = providers[categoryKey] || {};
  const subcategoryProviders = categoryProviders[subcategory] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to={`/category/${encodeURIComponent(category)}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to {category}
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">{subcategory}</h1>
      
      {subcategoryProviders.length > 0 ? (
        <div className="space-y-6">
          {subcategoryProviders.map((provider, index) => (
            <ServiceProvider key={index} provider={provider} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">No providers listed yet</h3>
          <p className="mt-2 text-gray-500">
            We're currently updating our database with providers in this category.
          </p>
        </div>
      )}
    </div>
  );
}
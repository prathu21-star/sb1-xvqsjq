import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ServiceProvider from './ServiceProvider';
import { getCategoryKey } from '../utils/categoryMapping';

interface ServiceDetailProps {
  category: string;
  subcategory: string;
  providers: any;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  category,
  subcategory,
  providers,
  onBack
}) => {
  // Get the correct key for the providers object
  const categoryKey = getCategoryKey(category);
  const categoryProviders = providers[categoryKey] || {};
  const subcategoryProviders = categoryProviders[subcategory] || [];

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{subcategory}</h2>
        <p className="text-gray-600 mb-4">
          Browse trusted providers specializing in {subcategory.toLowerCase()}
        </p>

        {subcategoryProviders.length > 0 ? (
          <div className="space-y-6">
            {subcategoryProviders.map((provider: any, index: number) => (
              <ServiceProvider key={index} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">No providers listed yet</h3>
            <p className="mt-2 text-gray-500">
              We're currently updating our database with providers in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
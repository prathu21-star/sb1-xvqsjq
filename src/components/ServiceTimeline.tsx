import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { providers } from '../data/providers';
import { getCategoryKey } from '../utils/categoryMapping';
import { 
  FlaskConical, 
  MicroscopeIcon, 
  Building2, 
  TestTubeIcon,
  ScrollTextIcon,
  UsersIcon,
  PackageIcon,
  LaptopIcon,
  TruckIcon,
  PackageSearchIcon
} from 'lucide-react';

interface Category {
  name: string;
  subcategories: string[];
}

interface ServiceTimelineProps {
  categories: Category[];
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
  searchQuery: string;
}

const getCategoryIcon = (categoryName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    'Research & Development': <FlaskConical className="w-6 h-6" />,
    'Preclinical Services': <MicroscopeIcon className="w-6 h-6" />,
    'Clinical Research': <Building2 className="w-6 h-6" />,
    'Manufacturing & Production': <Building2 className="w-6 h-6" />,
    'Analytical Services': <TestTubeIcon className="w-6 h-6" />,
    'Regulatory & Compliance': <ScrollTextIcon className="w-6 h-6" />,
    'Supply Chain & Logistics': <TruckIcon className="w-6 h-6" />,
    'Packaging & Delivery': <PackageIcon className="w-6 h-6" />,
    'Technology Solutions': <LaptopIcon className="w-6 h-6" />,
    'Consulting Services': <UsersIcon className="w-6 h-6" />,
    'Equipment & Instrumentation': <Building2 className="w-6 h-6" />,
    'Raw Materials & Consumables': <PackageSearchIcon className="w-6 h-6" />
  };
  return icons[categoryName] || <FlaskConical className="w-6 h-6" />;
};

const getProviderCount = (category: string, subcategory: string): number => {
  const categoryKey = getCategoryKey(category);
  const categoryProviders = providers[categoryKey] || {};
  return (categoryProviders[subcategory] || []).length;
};

const getTotalProvidersForCategory = (category: string): number => {
  const categoryKey = getCategoryKey(category);
  const categoryProviders = providers[categoryKey] || {};
  return Object.values(categoryProviders).reduce((total, providers) => total + providers.length, 0);
};

export default function ServiceTimeline({ categories, onCategorySelect, selectedCategory, searchQuery }: ServiceTimelineProps) {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    navigate(`/category/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`);
  };

  // Filter categories and subcategories based on search query
  const filteredCategories = categories.filter(category => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    const matchesCategory = category.name.toLowerCase().includes(query);
    const matchesSubcategory = category.subcategories.some(sub => 
      sub.toLowerCase().includes(query)
    );
    
    return matchesCategory || matchesSubcategory;
  });

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0" />

      <div className="space-y-12 relative z-10">
        {filteredCategories.map((category, index) => {
          const isEven = index % 2 === 0;
          const isExpanded = expandedCategory === category.name;
          const totalProviders = getTotalProvidersForCategory(category.name);
          
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8'}`}>
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  onMouseEnter={() => setExpandedCategory(category.name)}
                  onMouseLeave={() => setExpandedCategory(null)}
                  className={`group relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full
                    ${selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <div className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} mb-2`}>
                    <span className="text-xl font-bold text-gray-900">{category.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>{category.subcategories.length} specialized services</span>
                    <span className="mx-2">•</span>
                    <span>{totalProviders} providers</span>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 p-6"
                        style={{ minWidth: '400px' }}
                      >
                        <div className="grid gap-4">
                          {category.subcategories.map((sub, idx) => {
                            const providerCount = getProviderCount(category.name, sub);
                            return (
                              <div
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSubcategoryClick(category.name, sub);
                                }}
                                className="hover:bg-blue-50 p-3 rounded-lg cursor-pointer transition-colors"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-900 font-medium text-lg">{sub}</span>
                                  <span className="text-sm text-gray-500">{providerCount} providers</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                  View specialized providers for {sub.toLowerCase()}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="w-2/12 flex justify-center relative bg-white rounded-full z-20">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white">
                    {getCategoryIcon(category.name)}
                  </div>
                </div>
              </div>

              <div className="w-5/12" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
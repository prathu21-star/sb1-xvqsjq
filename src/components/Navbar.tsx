import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FlaskConical, ChevronDown, UserCircle, Menu, X } from 'lucide-react';
import { serviceCategories } from '../data/categories';
import ListingForm from './ListingForm';
import AuthModal from './auth/AuthModal';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showListingForm, setShowListingForm] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    navigate('/dashboard');
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowDropdown(false);
      setExpandedCategory(null);
    }, 100);
  };

  const navButtonClass = "relative px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group";
  const navButtonIndicator = "absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200";

  return (
    <>
      <nav className="bg-white shadow-lg relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <FlaskConical className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">IndiaPharmaHub</span>
            </Link>
            
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button 
                  onMouseEnter={() => setShowDropdown(true)}
                  onClick={() => navigate('/services')}
                  className={navButtonClass}
                >
                  <span className="flex items-center">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                  </span>
                  <div className={navButtonIndicator} />
                </button>
                
                {showDropdown && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl py-4 z-50"
                    style={{ width: '800px', maxHeight: '80vh', overflowY: 'auto' }}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {serviceCategories.map((category) => (
                        <div 
                          key={category.name}
                          className="relative"
                          onMouseEnter={() => setExpandedCategory(category.name)}
                          onMouseLeave={() => setExpandedCategory(null)}
                        >
                          <button
                            onClick={() => {
                              navigate(`/category/${encodeURIComponent(category.name)}`);
                              setShowDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 transition-colors duration-150 font-semibold text-gray-900"
                          >
                            {category.name}
                          </button>
                          {expandedCategory === category.name && (
                            <div className="mt-2 pl-6 space-y-1">
                              {category.subcategories.map((subcategory) => (
                                <button
                                  key={subcategory}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/category/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory)}`);
                                    setShowDropdown(false);
                                  }}
                                  className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors duration-150"
                                >
                                  {subcategory}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/providers" className={navButtonClass}>
                <span>Providers</span>
                <div className={navButtonIndicator} />
              </Link>

              <Link to="/about" className={navButtonClass}>
                <span>About</span>
                <div className={navButtonIndicator} />
              </Link>

              <Link to="/contact" className={navButtonClass}>
                <span>Contact</span>
                <div className={navButtonIndicator} />
              </Link>

              <button 
                onClick={() => setShowListingForm(true)}
                className="relative px-6 py-2.5 bg-blue-600 text-white rounded-md overflow-hidden group"
              >
                <span className="relative z-10">List Your Service</span>
                <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>

              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    <UserCircle className="h-6 w-6" />
                    <span>{user?.name}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center px-4 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <UserCircle className="h-6 w-6 mr-2" />
                  Sign In
                </button>
              )}
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link to="/services" className="text-gray-600 hover:text-blue-600 px-4 py-2">
                  Services
                </Link>
                <Link to="/providers" className="text-gray-600 hover:text-blue-600 px-4 py-2">
                  Providers
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 px-4 py-2">
                  About
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-4 py-2">
                  Contact
                </Link>
                <button 
                  onClick={() => setShowListingForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mx-4"
                >
                  List Your Service
                </button>
                {isAuthenticated ? (
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2"
                  >
                    <UserCircle className="h-6 w-6" />
                    <span>{user?.name}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="text-gray-600 hover:text-blue-600 flex items-center px-4 py-2"
                  >
                    <UserCircle className="h-6 w-6 mr-2" />
                    Sign In
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {showListingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 my-8">
            <ListingForm onClose={() => setShowListingForm(false)} />
          </div>
        </div>
      )}

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}
import React, { useState } from 'react';
import { Building2, Phone, Mail, Globe, MapPin, CheckCircle, MessageSquare, FileText } from 'lucide-react';
import type { Provider } from '../types/provider';
import QuickQuote from './QuickQuote';
import AuthModal from './auth/AuthModal';
import { useAuth } from '@/lib/auth';

interface ServiceProviderProps {
  provider: Provider;
}

export default function ServiceProvider({ provider }: ServiceProviderProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authAction, setAuthAction] = useState<'quote' | 'chat' | null>(null);
  
  const { isAuthenticated } = useAuth();

  const formatCurrency = (amount: string) => {
    return amount.startsWith('$') 
      ? `₹${parseInt(amount.slice(1)) * 75}` // Rough USD to INR conversion
      : amount;
  };

  const handleAction = (action: 'quote' | 'chat') => {
    if (!isAuthenticated) {
      setAuthAction(action);
      setShowAuthModal(true);
      return;
    }

    if (action === 'quote') {
      setShowQuoteForm(true);
    } else {
      setShowChat(true);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    if (authAction === 'quote') {
      setShowQuoteForm(true);
    } else if (authAction === 'chat') {
      setShowChat(true);
    }
    setAuthAction(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex items-start">
          <Building2 className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
            <p className="text-gray-600 flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {provider.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
          <button
            onClick={() => handleAction('quote')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FileText className="h-4 w-4 mr-2" />
            Request Quote
          </button>
          <button
            onClick={() => handleAction('chat')}
            className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat Now
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">{provider.description}</p>
      </div>

      {provider.services && provider.services.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Services Offered:</h4>
          <div className="flex flex-wrap gap-2">
            {provider.services.map((service, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {provider.certifications && provider.certifications.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Compliances & Certifications:</h4>
          <div className="flex flex-wrap gap-2">
            {provider.certifications.map((certification, index) => (
              <span 
                key={index}
                className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full flex items-center"
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                {certification}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {provider.contact && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {provider.contact.phone && (
            <a 
              href={`tel:${provider.contact.phone}`}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Phone className="h-4 w-4 mr-2" />
              {provider.contact.phone}
            </a>
          )}
          {provider.contact.email && (
            <a 
              href={`mailto:${provider.contact.email}`}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Mail className="h-4 w-4 mr-2" />
              {provider.contact.email}
            </a>
          )}
          {provider.contact.website && (
            <a 
              href={`https://${provider.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Globe className="h-4 w-4 mr-2" />
              {provider.contact.website}
            </a>
          )}
        </div>
      )}

      {provider.facilities && provider.facilities.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Facilities:</h4>
          <div className="space-y-2">
            {provider.facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-medium">{facility.type}</span>
                  <span className="text-gray-600">{facility.location}</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  <p>Capacity: {facility.capacity}</p>
                  <p>Certifications: {facility.certifications.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showQuoteForm && (
        <QuickQuote provider={provider} onClose={() => setShowQuoteForm(false)} />
      )}

      {showChat && (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Building2 className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">{provider.name}</span>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 h-[400px] overflow-y-auto">
            <div className="text-center text-gray-500">
              <p>Start a conversation with {provider.name}</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => {
            setShowAuthModal(false);
            setAuthAction(null);
          }}
          onSuccess={handleAuthSuccess}
          requiredRole="USER"
        />
      )}
    </div>
  );
}
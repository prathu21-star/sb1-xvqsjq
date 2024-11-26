import React from 'react';
import { Building2, Users, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About IndiaPharmaHub</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            IndiaPharmaHub is India's premier platform connecting pharmaceutical companies 
            with quality service providers across the entire drug development and 
            manufacturing lifecycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To streamline and accelerate pharmaceutical development by connecting 
                companies with the right service providers and expertise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold">Who We Serve</h2>
              </div>
              <p className="text-gray-600">
                From startups to established pharma companies, we help organizations 
                find reliable partners for their pharmaceutical service needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold">Our Reach</h2>
              </div>
              <p className="text-gray-600">
                We connect service providers across India with clients worldwide, 
                facilitating global pharmaceutical development and manufacturing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold">Quality Assurance</h2>
              </div>
              <p className="text-gray-600">
                We verify all service providers' credentials and maintain high 
                quality standards for listed services.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Service Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Successful Connections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Service Categories</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Network</h2>
            <p className="text-gray-600 mb-6">
              Whether you're a service provider looking to expand your reach or a 
              pharmaceutical company seeking reliable partners, IndiaPharmaHub is 
              your gateway to India's pharmaceutical services ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                List Your Service
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Browse Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Send, FileText, Calendar, IndianRupee } from 'lucide-react';
import type { Provider } from '../types/provider';
import { submitQuote } from '../lib/api';
import { useAuth } from '@/lib/auth';

interface QuickQuoteProps {
  provider: Provider;
  onClose: () => void;
}

export default function QuickQuote({ provider, onClose }: QuickQuoteProps) {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please log in to submit a quote');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        ...Object.fromEntries(formData.entries()),
        providerId: provider.id
      };
      
      await submitQuote(data);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit quote');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Request Quick Quote</h2>
        <p className="text-gray-600 mb-6">
          Get a quick response from {provider.name} for your project
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Type
            </label>
            <select
              name="projectType"
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select project type</option>
              {provider.services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="inline-block w-4 h-4 mr-1" />
                Timeline
              </label>
              <select
                name="timeline"
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select timeline</option>
                <option value="1-3">1-3 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6-12">6-12 months</option>
                <option value="12+">12+ months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <IndianRupee className="inline-block w-4 h-4 mr-1" />
                Budget Range
              </label>
              <select
                name="budget"
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select budget range</option>
                <option value="1-5">₹1L - ₹5L</option>
                <option value="5-20">₹5L - ₹20L</option>
                <option value="20-50">₹20L - ₹50L</option>
                <option value="50+">₹50L+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Describe your project requirements..."
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center disabled:opacity-50"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
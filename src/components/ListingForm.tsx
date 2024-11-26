import React, { useState } from 'react';
import { Building2Icon, SaveIcon, XIcon, PlusCircle, MinusCircle } from 'lucide-react';
import { services, serviceCategories } from '../data/services';
import { listService } from '../lib/api';
import { useAuth } from '@/lib/auth';

interface ListingFormProps {
  onClose: () => void;
}

export default function ListingForm({ onClose }: ListingFormProps) {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please log in to list a service');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      
      await listService(data);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to list service');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your existing ListingForm code...
  // Keep all the existing JSX and form fields
  // Just update the form tag to include onSubmit={handleSubmit}
  // And add error message display
}
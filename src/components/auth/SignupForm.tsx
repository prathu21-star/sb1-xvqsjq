import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/lib/auth';
import { registerUser, createProviderProfile } from '@/lib/api';
import type { UserRole } from '@/lib/auth';

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  role: z.enum(['USER', 'PROVIDER']),
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSuccess?: () => void;
  requiredRole?: UserRole;
}

export default function SignupForm({ onSuccess, requiredRole }: SignupFormProps) {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: requiredRole || 'USER',
    },
  });

  const { setAuth } = useAuth();

  const onSubmit = async (data: SignupFormData) => {
    try {
      setError(null);
      const { user, token } = await registerUser(data);
      
      // If registering as a provider, create provider profile
      if (data.role === 'PROVIDER') {
        await createProviderProfile({
          name: data.company || user.name,
          description: `Provider of pharmaceutical services`,
          location: 'India', // Default location
          services: [],
          contact: {
            email: data.email
          }
        });
      }

      localStorage.setItem('token', token);
      setAuth(user, token);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  // Rest of your existing SignupForm code...
  // Keep all the existing JSX and form fields
  // Just update the form tag to include onSubmit={handleSubmit(onSubmit)}
}
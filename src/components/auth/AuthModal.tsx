import React from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'signup';
  onSuccess?: () => void;
  requiredRole?: 'USER' | 'PROVIDER';
}

export default function AuthModal({ 
  isOpen, 
  onClose, 
  initialView = 'login',
  onSuccess,
  requiredRole
}: AuthModalProps) {
  const [view, setView] = React.useState<'login' | 'signup'>(initialView);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {view === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>

          {view === 'login' ? (
            <LoginForm onSuccess={onSuccess} />
          ) : (
            <SignupForm onSuccess={onSuccess} requiredRole={requiredRole} />
          )}

          <div className="mt-4 text-center">
            <button
              onClick={() => setView(view === 'login' ? 'signup' : 'login')}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              {view === 'login' 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
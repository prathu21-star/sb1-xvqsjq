import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import UserDashboard from '@/components/dashboard/UserDashboard';
import ProviderDashboard from '@/components/dashboard/ProviderDashboard';
import AdminDashboard from '@/components/dashboard/AdminDashboard';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <DashboardLayout>
      {user?.role === 'USER' && <UserDashboard />}
      {user?.role === 'PROVIDER' && <ProviderDashboard />}
      {user?.role === 'ADMIN' && <AdminDashboard />}
    </DashboardLayout>
  );
}
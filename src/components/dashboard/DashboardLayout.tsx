import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Settings, 
  LogOut,
  Building2,
  Users,
  BarChart
} from 'lucide-react';
import { useAuth } from '@/lib/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = {
    USER: [
      { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview', path: '/dashboard' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Messages', path: '/dashboard/messages' },
      { icon: <FileText className="w-5 h-5" />, label: 'Quotes', path: '/dashboard/quotes' },
      { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/dashboard/settings' },
    ],
    PROVIDER: [
      { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview', path: '/dashboard' },
      { icon: <Building2 className="w-5 h-5" />, label: 'Services', path: '/dashboard/services' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Messages', path: '/dashboard/messages' },
      { icon: <FileText className="w-5 h-5" />, label: 'Quotes', path: '/dashboard/quotes' },
      { icon: <BarChart className="w-5 h-5" />, label: 'Analytics', path: '/dashboard/analytics' },
      { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/dashboard/settings' },
    ],
    ADMIN: [
      { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview', path: '/admin' },
      { icon: <Users className="w-5 h-5" />, label: 'Users', path: '/admin/users' },
      { icon: <Building2 className="w-5 h-5" />, label: 'Providers', path: '/admin/providers' },
      { icon: <BarChart className="w-5 h-5" />, label: 'Analytics', path: '/admin/analytics' },
      { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/admin/settings' },
    ],
  };

  const currentMenu = user?.role ? menuItems[user.role] : menuItems.USER;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r">
          <div className="h-full flex flex-col">
            <div className="flex items-center p-4 border-b">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">IndiaPharmaHub</span>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {currentMenu.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => navigate(item.path)}
                      className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <LogOut className="w-5 h-5" />
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b">
            <div className="flex items-center justify-between px-6 py-4">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-4">
                  Welcome, {user?.name}
                </span>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
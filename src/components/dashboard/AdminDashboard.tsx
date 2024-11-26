import React from 'react';
import { 
  Users, 
  Building2, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  UserPlus,
  Activity
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', users: 400, providers: 240 },
  { name: 'Feb', users: 300, providers: 139 },
  { name: 'Mar', users: 200, providers: 980 },
  { name: 'Apr', users: 278, providers: 390 },
  { name: 'May', users: 189, providers: 480 },
];

export default function AdminDashboard() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      label: 'Total Users',
      value: '12,345',
      change: '+8.1%'
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      label: 'Service Providers',
      value: '789',
      change: '+12.3%'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      label: 'Active Listings',
      value: '2,456',
      change: '+5.4%'
    },
    {
      icon: <Activity className="w-6 h-6 text-orange-600" />,
      label: 'Platform Activity',
      value: '15.2K',
      change: '+18.7%'
    }
  ];

  const recentActivity = [
    {
      type: 'New Provider',
      name: 'Divi\'s Laboratories',
      status: 'Pending Approval',
      time: '2 hours ago',
      icon: <AlertTriangle className="w-5 h-5 text-orange-500" />
    },
    {
      type: 'New User',
      name: 'John Smith',
      status: 'Verified',
      time: '3 hours ago',
      icon: <UserPlus className="w-5 h-5 text-blue-500" />
    },
    {
      type: 'Service Listing',
      name: 'API Manufacturing',
      status: 'Approved',
      time: '5 hours ago',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              {stat.icon}
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Platform Growth</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#2563eb" />
              <Bar dataKey="providers" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {activity.icon}
                  <div>
                    <p className="font-medium text-gray-900">{activity.name}</p>
                    <p className="text-sm text-gray-600">{activity.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{activity.status}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
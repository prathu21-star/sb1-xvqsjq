import React from 'react';
import { 
  Users, 
  FileText, 
  BarChart3, 
  TrendingUp,
  MessageSquare,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', views: 400, inquiries: 240 },
  { name: 'Feb', views: 300, inquiries: 139 },
  { name: 'Mar', views: 200, inquiries: 980 },
  { name: 'Apr', views: 278, inquiries: 390 },
  { name: 'May', views: 189, inquiries: 480 },
];

export default function ProviderDashboard() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      label: 'Profile Views',
      value: '1,234',
      change: '+12.3%'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      label: 'Active Inquiries',
      value: '56',
      change: '+5.4%'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      label: 'Quote Requests',
      value: '23',
      change: '+8.7%'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
      label: 'Conversion Rate',
      value: '3.2%',
      change: '+2.1%'
    }
  ];

  const recentQuotes = [
    {
      client: 'Pharma Corp Ltd.',
      service: 'API Manufacturing',
      status: 'Pending',
      amount: '$25,000',
      icon: <Clock className="w-5 h-5 text-orange-500" />
    },
    {
      client: 'BioTech Solutions',
      service: 'Quality Testing',
      status: 'Accepted',
      amount: '$12,000',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      client: 'MediLabs Inc.',
      service: 'Method Development',
      status: 'Rejected',
      amount: '$18,500',
      icon: <XCircle className="w-5 h-5 text-red-500" />
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

      {/* Analytics Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#2563eb" />
              <Line type="monotone" dataKey="inquiries" stroke="#16a34a" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Quotes */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Quote Requests</h2>
          <div className="space-y-4">
            {recentQuotes.map((quote, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {quote.icon}
                  <div>
                    <p className="font-medium text-gray-900">{quote.client}</p>
                    <p className="text-sm text-gray-600">{quote.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{quote.amount}</p>
                  <p className="text-sm text-gray-600">{quote.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
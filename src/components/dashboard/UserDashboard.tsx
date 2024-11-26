import React from 'react';
import { 
  MessageSquare, 
  FileText, 
  Clock, 
  CheckCircle,
  XCircle,
  AlertCircle 
} from 'lucide-react';

export default function UserDashboard() {
  const stats = [
    { 
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      label: 'Active Chats',
      value: '3'
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      label: 'Quote Requests',
      value: '5'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      label: 'Pending Responses',
      value: '2'
    }
  ];

  const recentQuotes = [
    {
      provider: 'Divi\'s Laboratories',
      service: 'API Manufacturing',
      status: 'Pending',
      date: '2024-02-20',
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />
    },
    {
      provider: 'Syngene International',
      service: 'Method Development',
      status: 'Accepted',
      date: '2024-02-19',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      provider: 'Lambda Therapeutic',
      service: 'Bioequivalence Studies',
      status: 'Rejected',
      date: '2024-02-18',
      icon: <XCircle className="w-5 h-5 text-red-500" />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
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
                    <p className="font-medium text-gray-900">{quote.provider}</p>
                    <p className="text-sm text-gray-600">{quote.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{quote.status}</p>
                  <p className="text-sm text-gray-600">{quote.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
            <MessageSquare className="w-6 h-6 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">Start New Chat</p>
            <p className="text-sm text-gray-600">Connect with service providers</p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
            <FileText className="w-6 h-6 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">Request Quote</p>
            <p className="text-sm text-gray-600">Get pricing for services</p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
            <Clock className="w-6 h-6 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">View History</p>
            <p className="text-sm text-gray-600">Check past interactions</p>
          </button>
        </div>
      </div>
    </div>
  );
}
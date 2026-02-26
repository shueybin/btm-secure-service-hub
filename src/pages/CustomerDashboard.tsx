import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Search, History, MessageSquare, CreditCard, Star, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export const CustomerDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'customer') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome, {user.email.split('@')[0]}</h1>
          <p className="text-slate-500">Manage your orders and find new creators.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="space-x-2">
            <History className="h-4 w-4" />
            <span>Order History</span>
          </Button>
          <Button className="space-x-2">
            <Search className="h-4 w-4" />
            <span>Explore Marketplace</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Active Orders</h2>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                2 Ongoing
              </span>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'Mobile App Design', creator: 'Alex Rivera', status: 'In Progress', price: '$1,200', date: 'Oct 24' },
                  { title: 'Legal Consultation', creator: 'Sarah Jenkins', status: 'Pending Approval', price: '$350', date: 'Oct 22' },
                ].map((order, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-slate-100 p-4 hover:border-slate-200 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                        {order.creator[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{order.title}</h4>
                        <p className="text-xs text-slate-500">by {order.creator} • {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{order.price}</p>
                      <p className={cn(
                        "text-xs font-medium",
                        order.status === 'Pending Approval' ? "text-amber-600" : "text-indigo-600"
                      )}>{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-slate-900">Recommended for You</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { name: 'Dr. Emily Chen', role: 'Health Consultant', rate: '$150/hr', rating: 4.9 },
                  { name: 'Michael Scott', role: 'Video Editor', rate: '$80/hr', rating: 4.7 },
                ].map((rec, i) => (
                  <div key={i} className="rounded-lg border border-slate-100 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{rec.name}</h4>
                      <div className="flex items-center text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-xs font-bold">{rec.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{rec.role}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">{rec.rate}</span>
                      <Button size="sm" variant="outline">View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="ghost" className="w-full justify-start space-x-3 text-slate-600">
                <MessageSquare className="h-4 w-4" />
                <span>Messages</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start space-x-3 text-slate-600">
                <CreditCard className="h-4 w-4" />
                <span>Payment Methods</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start space-x-3 text-slate-600">
                <Filter className="h-4 w-4" />
                <span>Preferences</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-indigo-600 text-white border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Every transaction is held in escrow until you approve the work.
              </p>
              <Button variant="secondary" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
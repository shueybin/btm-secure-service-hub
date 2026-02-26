import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { DollarSign, FileUp, ListChecks, Plus, TrendingUp, Users } from 'lucide-react';
import { cn } from '../lib/utils';

export const CreatorDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'creator') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Creator Hub</h1>
          <p className="text-slate-500">Manage your services, orders, and earnings.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Gig</span>
          </Button>
          <Button variant="secondary" className="space-x-2">
            <DollarSign className="h-4 w-4" />
            <span>Withdraw Funds</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        {[
          { label: 'Total Earnings', value: '$8,450.00', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Active Orders', value: '5', icon: ListChecks, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Completion Rate', value: '98%', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="flex items-center space-x-4 p-6">
              <div className={cn('rounded-xl p-4', stat.bg)}>
                <stat.icon className={cn('h-6 w-6', stat.color)} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Current Assignments</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { client: 'Sarah Johnson', project: 'Legal Agreement Review', deadline: '2 days left', price: '$450' },
                  { client: 'TechStart Inc', project: 'Brand Guidelines', deadline: '5 days left', price: '$1,200' },
                  { client: 'David Miller', project: 'Medical Report Analysis', deadline: 'Tomorrow', price: '$200' },
                ].map((assign, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-slate-50 p-4 hover:bg-slate-50 transition-all group">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                        {assign.client[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{assign.project}</h4>
                        <p className="text-xs text-slate-500">Client: {assign.client} • <span className="text-red-500 font-medium">{assign.deadline}</span></p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-bold text-slate-900">{assign.price}</p>
                      <Button size="sm" className="space-x-2">
                        <FileUp className="h-4 w-4" />
                        <span className="hidden sm:inline">Deliver</span>
                      </Button>
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
              <h2 className="text-xl font-bold text-slate-900">Client Inquiries</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Alice Wong', message: 'Hi, are you available for a quick consult?', time: '10m ago' },
                { name: 'Bob Smith', message: 'Sent you the project brief.', time: '2h ago' },
              ].map((inq, i) => (
                <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex-shrink-0" />
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <h5 className="text-sm font-bold text-slate-900">{inq.name}</h5>
                      <span className="text-[10px] text-slate-400">{inq.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">{inq.message}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-sm">Open Messages</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 text-white border-none">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-bold">New Opportunities</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                3 new requests match your category (Legal).
              </p>
              <Button variant="secondary" className="w-full">View Match Requests</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
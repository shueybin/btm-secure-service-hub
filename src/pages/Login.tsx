import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<'customer' | 'creator'>('customer');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(role);
      toast.success('Welcome back!');
      navigate(role === 'customer' ? '/customer/dashboard' : '/creator/dashboard');
    } catch (err) {
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Sign In</h1>
            <p className="text-sm text-slate-500 mt-1">Access your TalentFlow account</p>
          </CardHeader>
          <CardContent>
            <div className="flex p-1 bg-slate-100 rounded-lg mb-6">
              <button
                onClick={() => setRole('customer')}
                className={cn(
                  'flex-1 py-2 text-sm font-medium rounded-md transition-all',
                  role === 'customer' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'
                )}
              >
                Customer
              </button>
              <button
                onClick={() => setRole('creator')}
                className={cn(
                  'flex-1 py-2 text-sm font-medium rounded-md transition-all',
                  role === 'creator' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'
                )}
              >
                Creator
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input label="Email" type="email" placeholder="you@example.com" required />
              <Input label="Password" type="password" placeholder="••••••••" required />
              <Button type="submit" className="w-full" isLoading={isLoading}>
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center flex-col space-y-2">
            <p className="text-sm text-slate-500">
              Don't have a customer account?{' '}
              <Link to="/signup/customer" className="font-semibold text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
            <p className="text-sm text-slate-500">
              Want to work as a creator?{' '}
              <Link to="/signup/creator" className="font-semibold text-indigo-600 hover:underline">
                Apply now
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};
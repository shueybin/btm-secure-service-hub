import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'sonner';
import { CreditCard, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const SignupCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [paymentPref, setPaymentPref] = useState('stripe');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login('customer');
      toast.success('Customer account created!');
      navigate('/customer/dashboard');
    } catch (err) {
      toast.error('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <Card>
          <CardHeader className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Create Client Account</h1>
            <p className="text-sm text-slate-500 mt-1">Hire the world's best professionals</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-4">
                <Input label="Full Name" placeholder="Jane Doe" required />
                <Input label="Email" type="email" placeholder="jane@example.com" required />
                <Input label="Password" type="password" required />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-slate-700">Preferred Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentPref('stripe')}
                    className={cn(
                      'flex items-center space-x-3 rounded-lg border-2 p-4 transition-all',
                      paymentPref === 'stripe'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                    )}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span className="font-semibold">Card/Stripe</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentPref('paypal')}
                    className={cn(
                      'flex items-center space-x-3 rounded-lg border-2 p-4 transition-all',
                      paymentPref === 'paypal'
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                    )}
                  >
                    <Wallet className="h-5 w-5" />
                    <span className="font-semibold">PayPal</span>
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" isLoading={isLoading}>
                Join TalentFlow
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-slate-500">
              Joining as a professional?{' '}
              <Link to="/signup/creator" className="font-semibold text-indigo-600 hover:underline">
                Apply here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};
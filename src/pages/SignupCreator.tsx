import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'sonner';
import { Briefcase, Stethoscope, Scale, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const SignupCreator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) {
      toast.error('Please select a service category');
      return;
    }
    setIsLoading(true);
    try {
      await login('creator');
      toast.success('Creator account created successfully!');
      navigate('/creator/dashboard');
    } catch (err) {
      toast.error('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    { id: 'law', label: 'Law', icon: Scale },
    { id: 'health', label: 'Health', icon: Stethoscope },
    { id: 'edu', label: 'Education', icon: Briefcase },
    { id: 'tech', label: 'Media/Tech', icon: Monitor },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <Card>
          <CardHeader className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Become a Creator</h1>
            <p className="text-sm text-slate-500 mt-1">Start selling your expertise on TalentFlow</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Full Name" placeholder="John Doe" required />
                <Input label="Email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-slate-700">Service Category</label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={cn(
                        'flex flex-col items-center justify-center rounded-lg border-2 p-3 transition-all',
                        category === cat.id
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                          : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                      )}
                    >
                      <cat.icon className="h-6 w-6 mb-2" />
                      <span className="text-xs font-semibold">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <Input label="Password" type="password" required />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" required className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="terms" className="text-xs text-slate-500">
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>
              <Button type="submit" variant="secondary" className="w-full" isLoading={isLoading}>
                Create Creator Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};
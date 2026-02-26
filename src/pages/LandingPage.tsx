import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle2, Star, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const LandingPage = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                The Secure Hub for <span className="text-indigo-600">Top-Tier</span> Expertise.
              </h1>
              <p className="mt-6 text-xl text-slate-600">
                Connect with verified professionals in Law, Health, Tech, and Creative fields.
                Experience secure escrow payments and reliable delivery.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/signup/customer">
                  <Button size="lg" className="px-8">Find a Professional</Button>
                </Link>
                <Link to="/signup/creator">
                  <Button variant="secondary" size="lg" className="px-8">Start Selling</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ccb7bd9a-3699-4166-b6b9-a53a107bc57c/marketplace-hero-05bd3b7e-1772143649783.webp"
                alt="Marketplace Professionals"
                className="rounded-2xl shadow-2xl ring-1 ring-slate-200"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-xl ring-1 ring-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">100% Secure Escrow</p>
                    <p className="text-xs text-slate-500">Funds protected until delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose TalentFlow?</h2>
            <p className="mt-4 text-slate-600">Built for security, scale, and professional excellence.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Verified Experts',
                desc: 'Every creator is vetted for skills and background before joining.',
                icon: CheckCircle2,
                color: 'text-indigo-600',
              },
              {
                title: 'Escrow Protection',
                desc: 'Your funds are held safely and only released when you approve.',
                icon: ShieldCheck,
                color: 'text-emerald-600',
              },
              {
                title: 'Rapid Delivery',
                desc: 'Built-in tracking and deadlines to ensure your project stays on schedule.',
                icon: Zap,
                color: 'text-amber-600',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div className={cn('mb-4 rounded-lg bg-slate-50 p-3 inline-block', feature.color)}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Explore Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Legal Services', img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ccb7bd9a-3699-4166-b6b9-a53a107bc57c/creator-law-health-f7c1cf03-1772143650175.webp' },
              { name: 'Health & Wellness', img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ccb7bd9a-3699-4166-b6b9-a53a107bc57c/creator-tech-media-8fe09db6-1772143650476.webp' },
              { name: 'App Development', img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ccb7bd9a-3699-4166-b6b9-a53a107bc57c/marketplace-hero-05bd3b7e-1772143649783.webp' },
              { name: 'Video Production', img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ccb7bd9a-3699-4166-b6b9-a53a107bc57c/secure-payment-ec7e7494-1772143650472.webp' },
            ].map((cat, i) => (
              <div key={i} className="group relative h-64 overflow-hidden rounded-xl bg-slate-200">
                <img src={cat.img} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-xl font-bold text-white">{cat.name}</h4>
                  <p className="text-slate-300 text-sm">Browse Top Talent</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden', className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={cn('px-6 py-4 border-b border-slate-100 bg-slate-50/50', className)}>{children}</div>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={cn('p-6', className)}>{children}</div>
);

export const CardFooter = ({ children, className }: CardProps) => (
  <div className={cn('px-6 py-4 border-t border-slate-100 bg-slate-50/50', className)}>{children}</div>
);
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success';
}

export const Badge = ({ className = '', variant = 'default', ...props }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    outline: 'text-gray-900 border-gray-200',
    success: 'border-transparent bg-green-100 text-green-800',
  };
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  );
};

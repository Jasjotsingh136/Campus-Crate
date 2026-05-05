import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full">
                <Image src="/logo.png" alt="CampusCrate Logo" width={32} height={32} className="rounded-full" />
              </div>
              <span className="text-xl font-bold text-primary">Campus<span className="text-secondary">Crate</span></span>
            </Link>
            <p className="text-sm text-gray-500">
              Transforming Hostel Buying & Selling into a Structured Ecosystem. Safe, reliable, and hassle-free.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/marketplace" className="hover:text-primary">Marketplace</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
              <li><Link href="/admin" className="hover:text-primary">Admin Panel</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Help</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/#how-it-works" className="hover:text-primary">How it Works</Link></li>
              <li><Link href="/#trust-safety" className="hover:text-primary">Trust & Safety</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CampusCrate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <Image src="/logo.png" alt="CampusCrate Logo" width={40} height={40} className="rounded-full" />
          </div>
          <span className="text-xl font-bold text-primary">Campus<span className="text-secondary">Crate</span></span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/marketplace" className="transition-colors hover:text-primary">Marketplace</Link>
          <Link href="/#how-it-works" className="transition-colors hover:text-primary">How it Works</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {status === 'loading' ? (
            <div className="h-9 w-24 bg-gray-100 animate-pulse rounded-lg"></div>
          ) : session ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="hidden sm:inline-flex">Dashboard</Button>
              </Link>
              <Button onClick={() => signOut({ callbackUrl: '/' })} variant="outline">Sign Out</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

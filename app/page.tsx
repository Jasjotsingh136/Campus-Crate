import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, ShieldCheck, Box, RefreshCw, QrCode, Lock, GraduationCap, Laptop, Sofa, BookOpen, Smartphone, Package } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_100%)] opacity-[0.03]"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-blue-50 text-primary hover:bg-blue-100 border border-blue-100 px-3 py-1">
                Exclusive to Campus Hostels
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Transforming Hostel <span className="text-primary">Buying & Selling</span> into a Structured Ecosystem
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Safe, escrow-backed transactions with a physical exchange hub. No direct contact, no haggling, just simple trading within your campus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    Explore Marketplace <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Start Selling
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Verified Students</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Escrow Payments</div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 shadow-2xl overflow-hidden relative flex items-center justify-center p-8">
                {/* SVG Vector Illustration */}
                <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl z-10" xmlns="http://www.w3.org/2000/svg">
                  {/* Base / Hub */}
                  <rect x="50" y="200" width="300" height="80" rx="8" fill="#1E3A8A" opacity="0.9" />
                  <rect x="70" y="220" width="260" height="40" rx="4" fill="#FACC15" opacity="0.9" />
                  <text x="200" y="245" fill="#171717" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SECURE EXCHANGE HUB</text>
                  
                  {/* Boxes / Items */}
                  <path d="M120 160 L180 160 L180 200 L120 200 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M130 140 L170 140 L170 160 L130 160 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                  <circle cx="150" cy="180" r="10" fill="#1E3A8A" opacity="0.1" />
                  
                  {/* Seller */}
                  <circle cx="80" cy="120" r="20" fill="#3b82f6" />
                  <path d="M60 180 Q80 140 100 180" stroke="#3b82f6" strokeWidth="3" fill="none" />
                  <path d="M90 140 L120 160" stroke="#94a3b8" strokeWidth="3" strokeDasharray="4" fill="none" />
                  
                  {/* Buyer */}
                  <circle cx="320" cy="120" r="20" fill="#FACC15" />
                  <path d="M300 180 Q320 140 340 180" stroke="#FACC15" strokeWidth="3" fill="none" />
                  <path d="M280 160 L310 140" stroke="#94a3b8" strokeWidth="3" strokeDasharray="4" fill="none" />

                  {/* Shield / Trust */}
                  <path d="M185 80 L200 70 L215 80 L215 100 Q200 120 200 120 Q200 120 185 100 Z" fill="#10b981" />
                  <path d="M195 95 L198 100 L205 85" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                  {/* Connection arcs */}
                  <path d="M100 110 Q200 40 300 110" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6" fill="none" />
                </svg>
                
                {/* Decorative elements */}
                <div className="absolute top-10 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50 border-y border-gray-100 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10 border-none">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How CampusCrate Works</h2>
            <p className="text-lg text-gray-600">A seamless, structured process designed for maximum safety and convenience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gray-200 via-primary/30 to-gray-200 -z-10"></div>
            
            {[
              { icon: Box, title: "Drop Off", desc: "Seller submits & verifies item at the hub" },
              { icon: ShieldCheck, title: "Verify & Store", desc: "Item is checked and stored safely" },
              { icon: RefreshCw, title: "Browse", desc: "Buyer browses and reserves item" },
              { icon: Lock, title: "Escrow Pay", desc: "Buyer pays securely via escrow" },
              { icon: QrCode, title: "Scan & Collect", desc: "Buyer scans QR to collect item" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 z-10 relative">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold border-4 border-gray-50">
                      {idx + 1}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 border-none">Why Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built for Hostel Trust</h2>
              <p className="text-lg text-gray-600 mb-10">
                We've built a platform that eliminates the awkwardness, haggling, and risk of traditional campus buying and selling.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Physical Exchange Hub", desc: "No more meeting strangers in corridors. Drop off and pick up at our secure campus hub." },
                  { title: "Verified Hostel Users", desc: "Only authenticated students from your campus can access the platform." },
                  { title: "Escrow Payments", desc: "Funds are held safely until the buyer inspects and collects the item." },
                  { title: "Zero Direct Interaction", desc: "Hassle-free trading. We handle the logistics, storage, and exchange." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group cursor-default">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] transform rotate-3 scale-105"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 p-4">
                <Card className="bg-primary text-white border-none shadow-xl sm:translate-y-12 transition-transform hover:-translate-y-2 duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                      <ShieldCheck className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">100% Safe</h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">Every user is verified. Every item is checked. Your money is protected by our escrow system.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-xl border-gray-100 transition-transform hover:-translate-y-2 duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Grad Storage</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Graduating? Use our optional safe storage hub to hold items for incoming freshers.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's in the Crate?</h2>
            <p className="text-lg text-gray-600">Everything you need for a comfortable hostel life, available right on campus.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Sofa, name: "Furniture" },
              { icon: BookOpen, name: "Books & Notes" },
              { icon: Laptop, name: "Electronics" },
              { icon: Smartphone, name: "Accessories" },
              { icon: RefreshCw, name: "Cycles" },
              { icon: Box, name: "Mattresses" },
              { icon: GraduationCap, name: "Grad Storage" },
              { icon: Package, name: "Fresher Setup" }
            ].map((category, idx) => (
              <Card key={idx} className="hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-white">
                <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    <category.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/marketplace">
              <Button size="lg" className="px-10 h-14 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Browse All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust & Safety Banner */}
      <section id="trust-safety" className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8">
            <ShieldCheck className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Trust is our Currency</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
            No illegal trade. Escrow protection. Controlled exchange. We verify every transaction to ensure a 100% safe environment for all students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="font-bold px-8 h-14 text-lg">
              Create an Account
            </Button>
            <Button variant="outline" size="lg" className="font-bold px-8 h-14 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white">
              Read Trust Policy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

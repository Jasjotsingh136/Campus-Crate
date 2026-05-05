import React from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';

export default function MarketplacePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Campus Marketplace</h1>
            <p className="text-gray-600">Find what you need, right here on campus.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative flex-grow md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search items..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="flex-shrink-0 bg-white">
              <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block space-y-8">
            <Card className="border-gray-200 sticky top-24">
              <CardContent className="p-5 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-3">
                    {["All Categories", "Furniture", "Books & Notes", "Electronics", "Cycles", "Other"].map((cat, i) => (
                      <label key={i} className="flex items-center space-x-3 text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" defaultChecked={i === 0} />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                  <div className="flex gap-2 items-center">
                    <input type="number" placeholder="Min" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-primary focus:border-primary" />
                    <span className="text-gray-500">-</span>
                    <input type="number" placeholder="Max" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-primary focus:border-primary" />
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Hostel Block</h3>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:ring-primary focus:border-primary bg-white">
                    <option>Any Block</option>
                    <option>Block A</option>
                    <option>Block B</option>
                    <option>Block C</option>
                    <option>Block H</option>
                    <option>Block J</option>
                    <option>Block M</option>
                  </select>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_PRODUCTS.map((product) => (
                <Link href={`/marketplace/${product.id}`} key={product.id}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer overflow-hidden group">
                    <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={product.imageUrl} 
                        alt={product.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant={product.status === 'Available' ? 'default' : 'secondary'} className="shadow-sm font-bold tracking-wide">
                          {product.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-800 shadow-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors text-lg">{product.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>Dropoff: {product.hostelBlock} Hub</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-2xl font-black text-gray-900 tracking-tight">₹{product.price}</div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-white transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

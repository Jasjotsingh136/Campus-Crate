import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShieldCheck, MapPin, Clock, Info, CheckCircle2 } from 'lucide-react';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/marketplace" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Marketplace
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-lg bg-gray-100 overflow-hidden border-2 ${i === 1 ? 'border-primary' : 'border-transparent cursor-pointer hover:border-gray-300'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.imageUrl} alt="" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none">{product.category}</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" /> Listed 2 days ago
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="text-3xl font-black text-gray-900 mb-6">₹{product.price}</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" /> Exchange Location
              </h3>
              <p className="text-gray-600 mb-2">Item is currently stored at <span className="font-semibold text-gray-900">{product.hostelBlock} Hub</span>.</p>
              <p className="text-sm text-gray-500">You can inspect the item at the hub before confirming the escrow release.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20" disabled={product.status !== 'Available'}>
                {product.status === 'Available' ? 'Reserve Item via Escrow' : `Item ${product.status}`}
              </Button>
              <div className="flex items-start bg-blue-50 text-blue-800 p-4 rounded-lg text-sm">
                <ShieldCheck className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <p><strong>Safe Escrow:</strong> Your money is held securely. The seller only gets paid after you scan the QR code and collect the item from the hub.</p>
              </div>
            </div>

            {/* Seller Info Mock */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Seller Information</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold mr-4">
                  U{product.sellerId.replace('user_', '')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 flex items-center">
                    Verified Student <CheckCircle2 className="w-4 h-4 text-green-500 ml-1" />
                  </div>
                  <div className="text-sm text-gray-500">Hostel Resident</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

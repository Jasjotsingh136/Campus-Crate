import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, ShoppingBag, Box, Clock, QrCode } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your listings, purchases, and storage.</p>
          </div>
          <Button className="font-bold"><Package className="w-4 h-4 mr-2"/> List New Item</Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Listings", value: "3", icon: Package, color: "text-blue-600", bg: "bg-blue-100" },
            { label: "Pending Purchases", value: "1", icon: ShoppingBag, color: "text-amber-600", bg: "bg-amber-100" },
            { label: "Items in Storage", value: "2", icon: Box, color: "text-green-600", bg: "bg-green-100" },
            { label: "Escrow Balance", value: "₹1,200", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" }
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Activity Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Listings */}
            <Card className="border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 p-5 flex justify-between items-center bg-white rounded-t-xl">
                <h3 className="font-bold text-gray-900 text-lg">My Active Listings</h3>
                <Link href="#" className="text-sm text-primary hover:underline font-medium">View All</Link>
              </div>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {[
                    { title: "Calculus Textbook", price: 400, date: "Today", status: "Available", id: "1" },
                    { title: "Desk Lamp", price: 250, date: "Yesterday", status: "Reserved", id: "2" },
                  ].map((item, i) => (
                    <div key={i} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                        <div>
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                          <div className="text-sm text-gray-500">₹{item.price} • Listed {item.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={item.status === 'Available' ? 'default' : 'secondary'}>{item.status}</Badge>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Purchases */}
            <Card className="border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 p-5 bg-white rounded-t-xl">
                <h3 className="font-bold text-gray-900 text-lg">My Purchases (Action Required)</h3>
              </div>
              <CardContent className="p-5">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-amber-100 text-amber-800 border-none">Reserved</Badge>
                      <span className="font-bold text-gray-900">Wooden Storage Cabinet</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Item is ready for pickup at <span className="font-bold">Block M Hub</span>.</p>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Pickup code expires in 48 hours
                    </div>
                  </div>
                  <Button className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white gap-2">
                    <QrCode className="w-4 h-4" /> Show Pickup QR
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Storage */}
          <div className="space-y-8">
            <Card className="bg-primary text-white border-none shadow-md overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="font-bold text-xl mb-2">Grad Storage</h3>
                <p className="text-primary-foreground/80 text-sm mb-6">You have 2 items stored in the secure facility until next semester.</p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 p-3 rounded-lg flex justify-between text-sm backdrop-blur-sm">
                    <span>Mattress</span>
                    <span className="font-medium">Block A Hub</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex justify-between text-sm backdrop-blur-sm">
                    <span>Study Table</span>
                    <span className="font-medium">Block A Hub</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-gray-100">Manage Storage</Button>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 p-5 bg-white rounded-t-xl">
                <h3 className="font-bold text-gray-900">Recent Transactions</h3>
              </div>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {[
                    { type: "Sold", item: "Engineering Kit", amount: "+₹800", date: "Oct 12" },
                    { type: "Bought", item: "Study Lamp", amount: "-₹300", date: "Oct 10" },
                  ].map((tx, i) => (
                    <div key={i} className="p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{tx.item}</div>
                        <div className="text-xs text-gray-500">{tx.type} • {tx.date}</div>
                      </div>
                      <div className={`font-bold text-sm ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                        {tx.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Control Panel</h1>
            <p className="text-gray-600">Hub management, dispute resolution, and listing approvals.</p>
          </div>
          <Badge className="bg-red-100 text-red-800 border-none px-3 py-1">Superadmin Access</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-amber-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Pending Approvals</div>
                <div className="text-2xl font-bold text-gray-900">12</div>
              </div>
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Active Disputes</div>
                <div className="text-2xl font-bold text-gray-900">2</div>
              </div>
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Hub Capacity (Block A)</div>
                <div className="text-2xl font-bold text-gray-900">74%</div>
              </div>
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="shadow-sm">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-xl">
              <h3 className="font-bold text-gray-900">Recent Listing Approvals</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 bg-gray-50 uppercase">
                  <tr>
                    <th className="px-6 py-4 font-medium">Item</th>
                    <th className="px-6 py-4 font-medium">Seller</th>
                    <th className="px-6 py-4 font-medium">Price</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: "Office Chair", seller: "Rahul K.", price: "₹900", status: "Pending Hub Drop" },
                    { item: "Data Structures Book", seller: "Sneha M.", price: "₹250", status: "Hub Verified" },
                    { item: "Kettle 1L", seller: "Amit P.", price: "₹400", status: "Pending Approval" },
                  ].map((row, i) => (
                    <tr key={i} className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.item}</td>
                      <td className="px-6 py-4 text-gray-600">{row.seller}</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">{row.price}</td>
                      <td className="px-6 py-4">
                        <Badge variant={row.status.includes('Verified') ? 'success' : 'secondary'} className="text-xs">
                          {row.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" className="h-8 w-8 p-0 bg-green-500 hover:bg-green-600" title="Approve">
                            <CheckCircle2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-500 hover:text-red-600" title="Reject">
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

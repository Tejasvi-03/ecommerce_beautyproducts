import { useState } from 'react'

export default function SellerDashboard() {
  const [products, setProducts] = useState([
    { id: 's1', name: 'Herbal Shampoo', price: 349, status: 'Approved' },
    { id: 's2', name: 'Vitamin C Serum', price: 999, status: 'Pending' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Seller Dashboard</h1>
        <button className="px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">Add Product</button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p)=> (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">₹{p.price}</td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded text-xs ${p.status==='Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.status}</span></td>
                <td className="px-4 py-3 text-right">
                  <button className="px-2 py-1 border rounded hover:bg-gray-50 mr-2">Edit</button>
                  <button className="px-2 py-1 border rounded hover:bg-gray-50">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}



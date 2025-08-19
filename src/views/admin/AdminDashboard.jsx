export default function AdminDashboard() {
  const users = [
    { id: 'u1', name: 'Aisha', role: 'Customer', status: 'Active' },
    { id: 'u2', name: 'Neha', role: 'Seller', status: 'Blocked' },
  ]
  const pendingProducts = [
    { id: 'p1', name: 'Vitamin C Serum', seller: 'GlowCo' },
    { id: 'p2', name: 'Herbal Shampoo', seller: 'NatureLab' },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-3">Users</h2>
          <div className="space-y-3">
            {users.map((u)=> (
              <div key={u.id} className="flex items-center justify-between border rounded p-3">
                <div>
                  <div className="font-medium">{u.name}</div>
                  <div className="text-sm text-gray-600">{u.role}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs ${u.status==='Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{u.status}</span>
                  <button className="px-2 py-1 border rounded hover:bg-gray-50">Toggle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-3">Pending Products</h2>
          <div className="space-y-3">
            {pendingProducts.map((p)=> (
              <div key={p.id} className="flex items-center justify-between border rounded p-3">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-gray-600">Seller: {p.seller}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border rounded hover:bg-gray-50">Approve</button>
                  <button className="px-2 py-1 border rounded hover:bg-gray-50">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}



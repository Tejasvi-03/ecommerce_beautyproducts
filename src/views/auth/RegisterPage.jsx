export default function RegisterPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Create your BeautyMart account</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" placeholder="********" />
        </div>
        <div>
          <label className="block text-sm mb-1">Role</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Customer</option>
            <option>Seller</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Address</label>
          <textarea className="w-full border rounded px-3 py-2" rows="3" placeholder="Street, City, State, ZIP"></textarea>
        </div>
        <div className="md:col-span-2">
          <button type="button" className="w-full px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">Create account</button>
        </div>
      </form>
    </div>
  )
}



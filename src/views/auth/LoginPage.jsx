import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Sign in to BeautyMart</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" placeholder="********" />
        </div>
        <button type="button" className="w-full px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">Sign in</button>
      </form>
      <p className="text-sm text-gray-600 mt-4">Don't have an account? <Link to="/register" className="text-brand-600">Create one</Link></p>
    </div>
  )
}



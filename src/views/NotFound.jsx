import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-gray-600 mb-6">The page you are looking for was not found.</p>
      <Link to="/" className="px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">Go Home</Link>
    </div>
  )
}



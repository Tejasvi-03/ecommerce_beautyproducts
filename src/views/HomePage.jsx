import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import dataService from '../services/dataService'

export default function HomePage() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoriesData, productsData] = await Promise.all([
          dataService.getCategories(),
          dataService.getFeaturedProducts()
        ])
        setCategories(categoriesData)
        setFeaturedProducts(productsData)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleSearch = (query) => {
    const params = query ? `?q=${encodeURIComponent(query)}` : ''
    navigate(`/products${params}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <section className="relative bg-pink-50 rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Glow Everyday ✨</h1>
        <p className="text-gray-600 mt-2">Discover the best in skincare, makeup & more</p>
        <div className="mt-6 flex items-center justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        <Link
          to="/products"
          className="inline-block mt-6 px-6 py-3 bg-brand-600 text-white rounded-full hover:bg-brand-700"
        >
          Shop Now
        </Link>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            to={`/products?category=${cat.key}`}
            key={cat.key}
            className="rounded-xl border p-3 text-center hover:shadow-lg hover:scale-105 transition bg-white"
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-3">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-medium">{cat.name}</h3>
          </Link>
        ))}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <Link to="/products" className="text-brand-600 hover:text-brand-700 text-sm">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
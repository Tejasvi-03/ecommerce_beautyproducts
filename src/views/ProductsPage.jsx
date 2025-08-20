import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import dataService from '../services/dataService'

function normalizeCategory(value) {
  if (!value) return 'all'
  const v = String(value).toLowerCase()
  if (v === 'hair') return 'haircare'
  if (v === 'skin') return 'skincare'
  if (v === 'fragrances') return 'fragrance'
  return v
}

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const rawCategory = searchParams.get('category') || 'all'
  const categoryParam = normalizeCategory(rawCategory)
  const searchParam = (searchParams.get('search') || searchParams.get('q') || '').trim()
  const minPriceParam = searchParams.get('minPrice') || ''
  const maxPriceParam = searchParams.get('maxPrice') || ''
  const sortParam = searchParams.get('sort') || 'popular'

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      try {
        const filters = {
          category: categoryParam,
          search: searchParam,
          minPrice: minPriceParam || undefined,
          maxPrice: maxPriceParam || undefined,
          sort: sortParam
        }
        const filteredProducts = await dataService.getFilteredProducts(filters)
        setProducts(filteredProducts)
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [categoryParam, searchParam, minPriceParam, maxPriceParam, sortParam])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === undefined || value === null || value === '' || value === 'all') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: false })
  }

  const handleCategoryChange = (value) => updateParam('category', value)
  const handleMinPriceChange = (value) => updateParam('minPrice', value.replace(/[^\d]/g, ''))
  const handleMaxPriceChange = (value) => updateParam('maxPrice', value.replace(/[^\d]/g, ''))
  const handleSortChange = (value) => updateParam('sort', value)
  const handleSearchChange = (value) => updateParam('search', value)

  const categoryOptions = ['all', 'skincare', 'haircare', 'makeup', 'lipstick', 'fragrance']

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <aside className="md:col-span-3 space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="flex flex-col gap-2 text-sm">
            {categoryOptions.map((c) => (
              <label key={c} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={categoryParam === c}
                  onChange={() => handleCategoryChange(c)}
                />
                <span className={categoryParam === c ? 'text-brand-600 font-medium' : ''}>
                  {c.replace(/\b\w/g, s => s.toUpperCase())}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="p-4 border rounded-lg space-y-3">
          <h3 className="font-medium">Search</h3>
          <input
            className="border rounded px-2 py-1 w-full"
            placeholder="Search by name (e.g., lipstick)"
            value={searchParam}
            onChange={e => handleSearchChange(e.target.value)}
          />
          <button
            className="text-sm text-gray-600"
            onClick={() => handleSearchChange('')}
          >
            Clear
          </button>
        </div>

        <div className="p-4 border rounded-lg space-y-3">
          <h3 className="font-medium">Price</h3>
          <div className="flex items-center gap-2">
            <input
              className="border rounded px-2 py-1 w-24"
              placeholder="Min"
              value={minPriceParam}
              onChange={e => handleMinPriceChange(e.target.value)}
            />
            <span>-</span>
            <input
              className="border rounded px-2 py-1 w-24"
              placeholder="Max"
              value={maxPriceParam}
              onChange={e => handleMaxPriceChange(e.target.value)}
            />
          </div>
          <button
            className="text-sm text-gray-600"
            onClick={() => {
              updateParam('minPrice', '')
              updateParam('maxPrice', '')
            }}
          >
            Reset
          </button>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Sort by</h3>
          <select
            className="border rounded px-2 py-1 w-full"
            value={sortParam}
            onChange={e => handleSortChange(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <button
          className="px-3 py-2 text-sm border rounded-md"
          onClick={() => setSearchParams({})}
        >
          Clear All Filters
        </button>
      </aside>

      <section className="md:col-span-9">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">
            {loading ? 'Loading...' : `Showing ${products.length} result${products.length !== 1 ? 's' : ''}`}
            {!loading && categoryParam !== 'all' ? ` in ${categoryParam}` : ''}
            {!loading && searchParam ? ` for "${searchParam}"` : ''}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-gray-500">Loading products...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
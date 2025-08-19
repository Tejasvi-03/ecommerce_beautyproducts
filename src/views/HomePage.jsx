import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'

const featured = [
  { id: '1', name: 'Hydrating Face Serum', description: 'Deeply hydrating serum with hyaluronic acid', price: 899, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1470&auto=format&fit=crop' },
  { id: '2', name: 'Matte Lipstick', description: 'Long-lasting matte finish lipstick', price: 499, image: 'https://images.unsplash.com/photo-1616509091215-b9488f0c24d6?q=80&w=1470&auto=format&fit=crop' },
  { id: '3', name: 'Nourishing Hair Oil', description: 'Enriched with argan and coconut oil', price: 699, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1470&auto=format&fit=crop' },
  { id: '4', name: 'Aloe Vera Gel', description: 'Soothing multipurpose gel', price: 299, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1470&auto=format&fit=crop' },
]

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-6 py-8 bg-gradient-to-b from-rose-50 to-white rounded-xl">
        <h1 className="text-3xl md:text-5xl font-bold">Discover Your Beauty Essentials</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Shop skincare, haircare, and makeup from top sellers. Curated collections and verified reviews to help you choose better.</p>
        <div className="flex justify-center">
          <SearchBar onSearch={(q)=> console.log('search', q)} />
        </div>
        <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
          <span className="px-3 py-1 bg-white border rounded-full">Skincare</span>
          <span className="px-3 py-1 bg-white border rounded-full">Haircare</span>
          <span className="px-3 py-1 bg-white border rounded-full">Makeup</span>
          <span className="px-3 py-1 bg-white border rounded-full">Fragrance</span>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <a className="text-brand-600 text-sm" href="/products">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((p)=> (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}



import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'

const MOCK_PRODUCTS = Array.from({length: 24}).map((_, i) => ({
  id: String(i+1),
  name: ['Serum', 'Shampoo', 'Lipstick', 'Moisturizer'][i%4] + ' '+(i+1),
  description: 'High quality beauty product to enhance your routine.',
  price: 199 + (i%7)*100,
  rating: (i%5) + 1,
  category: ['skincare','haircare','makeup','fragrance'][i%4],
  image: `https://picsum.photos/seed/beauty${i}/600/400`
}))

export default function ProductsPage() {
  const [category, setCategory] = useState('all')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('popular')

  const products = useMemo(() => {
    let list = [...MOCK_PRODUCTS]
    if (category !== 'all') list = list.filter(p => p.category === category)
    if (minPrice) list = list.filter(p => p.price >= Number(minPrice))
    if (maxPrice) list = list.filter(p => p.price <= Number(maxPrice))
    if (sort === 'price-asc') list.sort((a,b)=> a.price - b.price)
    if (sort === 'price-desc') list.sort((a,b)=> b.price - a.price)
    return list
  }, [category, minPrice, maxPrice, sort])

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <aside className="md:col-span-3 space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="flex flex-col gap-2 text-sm">
            {['all','skincare','haircare','makeup','fragrance'].map((c)=> (
              <label key={c} className="inline-flex items-center gap-2">
                <input type="radio" name="category" checked={category===c} onChange={()=> setCategory(c)} />
                <span className={category===c? 'text-brand-600 font-medium' : ''}>{c.replace(/\b\w/g, s=> s.toUpperCase())}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="p-4 border rounded-lg space-y-3">
          <h3 className="font-medium">Price</h3>
          <div className="flex items-center gap-2">
            <input className="border rounded px-2 py-1 w-24" placeholder="Min" value={minPrice} onChange={e=> setMinPrice(e.target.value)} />
            <span>-</span>
            <input className="border rounded px-2 py-1 w-24" placeholder="Max" value={maxPrice} onChange={e=> setMaxPrice(e.target.value)} />
          </div>
          <button className="text-sm text-gray-600" onClick={()=> { setMinPrice(''); setMaxPrice('')}}>Reset</button>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Sort by</h3>
          <select className="border rounded px-2 py-1 w-full" value={sort} onChange={e=> setSort(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </aside>
      <section className="md:col-span-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p)=> (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}



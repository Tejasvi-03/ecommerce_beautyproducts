import { Link } from 'react-router-dom'
import { useCart } from '../state/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-soft transition bg-white">
      <Link to={`/product/${product.id}`} className="block aspect-[4/3] bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </Link>
      <div className="p-4 space-y-2">
        <Link to={`/product/${product.id}`} className="font-medium truncate block hover:text-brand-600">{product.name}</Link>
        <div className="text-sm text-gray-500 h-10 overflow-hidden">{product.description}</div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-semibold">₹{product.price}</span>
          <button onClick={()=> addItem(product, 1)} className="px-3 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}



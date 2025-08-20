import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RatingStars from '../components/RatingStars'
import dataService from '../services/dataService'
import { useCart } from '../state/CartContext'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await dataService.getProductById(id)
        setProduct(productData)
      } catch (error) {
        console.error('Error loading product:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading product...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Product not found</div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 space-y-3">
        <div className="aspect-[4/3] overflow-hidden rounded-lg border">
          <img className="w-full h-full object-cover" src={product.images[0]} alt={product.name} />
        </div>
        <div className="flex items-center gap-3">
          {product.images.map((src, idx)=> (
            <img key={idx} className="w-20 h-20 object-cover rounded border" src={src} alt={product.name+idx} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 space-y-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <RatingStars rating={product.rating} />
          <span>{product.rating} / 5</span>
        </div>
        <p className="text-gray-700">{product.description}</p>
        <div className="text-3xl font-bold">₹{product.price}</div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => addItem(product, 1)} 
            className="px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700"
          >
            Add to Cart
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Buy Now</button>
        </div>

        <div className="pt-6 space-y-3">
          <h3 className="font-semibold">Reviews</h3>
          <div className="space-y-4">
            {product.reviews.map((r)=> (
              <div key={r.id} className="border rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{r.user}</span>
                  <RatingStars rating={r.rating} />
                </div>
                <p className="text-sm text-gray-700 mt-1">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



import { Link } from 'react-router-dom'
import { useCart } from '../state/CartContext'

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal } = useCart()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <section className="lg:col-span-8 space-y-4">
        <h1 className="text-xl font-semibold">Your Cart</h1>
        {items.length === 0 && (
          <div className="text-gray-600">Your cart is empty.</div>
        )}
        {items.map((item)=> (
          <div key={item.id} className="flex items-center gap-4 border rounded-lg p-3">
            <img src={item.image} alt={item.name} className="w-24 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <div className="text-sm text-gray-600 flex items-center gap-2">Qty:
                <input type="number" min="1" className="border rounded px-2 py-1 w-16" value={item.qty} onChange={(e)=> updateQty(item.id, Number(e.target.value))} />
              </div>
            </div>
            <div className="font-semibold">₹{item.price * item.qty}</div>
            <button onClick={()=> removeItem(item.id)} className="text-sm text-red-600">Remove</button>
          </div>
        ))}
      </section>

      <aside className="lg:col-span-4">
        <div className="border rounded-lg p-4 space-y-3">
          <h2 className="font-semibold">Order Summary</h2>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span>Shipping</span>
            <span>₹0</span>
          </div>
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
          <Link to="/checkout" className="block text-center w-full px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">Checkout</Link>
        </div>
      </aside>
    </div>
  )
}



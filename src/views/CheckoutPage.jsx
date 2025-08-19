import { useCart } from '../state/CartContext'

export default function CheckoutPage() {
  const { subtotal } = useCart()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <section className="lg:col-span-8 space-y-4">
        <h1 className="text-xl font-semibold">Checkout</h1>
        <div className="border rounded-lg p-4 space-y-3">
          <h2 className="font-medium">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" placeholder="Full Name" />
            <input className="border rounded px-3 py-2" placeholder="Phone" />
            <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Street Address" />
            <input className="border rounded px-3 py-2" placeholder="City" />
            <input className="border rounded px-3 py-2" placeholder="State" />
            <input className="border rounded px-3 py-2" placeholder="ZIP" />
          </div>
        </div>
        <div className="border rounded-lg p-4 space-y-3">
          <h2 className="font-medium">Payment</h2>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" defaultChecked />
              <span>Cash on Delivery (COD)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" />
              <span>Dummy Payment Gateway (UI only)</span>
            </label>
          </div>
        </div>
      </section>
      <aside className="lg:col-span-4">
        <div className="border rounded-lg p-4 space-y-3">
          <h2 className="font-semibold">Order Summary</h2>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span>Items</span>
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
          <button className="w-full px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">Place Order</button>
        </div>
      </aside>
    </div>
  )
}



import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { useCart } from '../state/CartContext'

export default function Header() {
  const { items } = useCart()
  const count = items.reduce((sum, i)=> sum + i.qty, 0)
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container-responsive flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-semibold text-brand-600">BeautyMart</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-gray-700'}>Products</NavLink>
          <NavLink to="/seller" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-gray-700'}>Seller</NavLink>
          <NavLink to="/admin" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-gray-700'}>Admin</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
            <FiShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full px-1">{count}</span>
            )}
          </Link>
          <Link to="/login" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50">
            <FiUser />
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </header>
  )
}



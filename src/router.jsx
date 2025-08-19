import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import HomePage from './views/HomePage'
import ProductsPage from './views/ProductsPage'
import ProductDetailPage from './views/ProductDetailPage'
import CartPage from './views/CartPage'
import CheckoutPage from './views/CheckoutPage'
import LoginPage from './views/auth/LoginPage'
import RegisterPage from './views/auth/RegisterPage'
import SellerDashboard from './views/seller/SellerDashboard'
import AdminDashboard from './views/admin/AdminDashboard'
import NotFound from './views/NotFound'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/product/:id', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/seller', element: <SellerDashboard /> },
      { path: '/admin', element: <AdminDashboard /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router



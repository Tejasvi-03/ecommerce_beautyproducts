import categoriesData from '../data/categories.json'
import productsData from '../data/products.json'

// Data service class to handle all data operations
// This makes it easy to switch to API calls later
class DataService {
  // Get all categories
  async getCategories() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return categoriesData
  }

  // Get all products
  async getAllProducts() {
    await new Promise(resolve => setTimeout(resolve, 100))
    return productsData
  }

  // Get featured products (first 8 products)
  async getFeaturedProducts() {
    await new Promise(resolve => setTimeout(resolve, 100))
    return productsData.slice(0, 8)
  }

  // Get product by ID
  async getProductById(id) {
    await new Promise(resolve => setTimeout(resolve, 100))
    return productsData.find(product => product.id === id) || null
  }

  // Get products by category
  async getProductsByCategory(category) {
    await new Promise(resolve => setTimeout(resolve, 100))
    if (category === 'all') return productsData
    return productsData.filter(product => product.category === category)
  }

  // Search products by name
  async searchProducts(query) {
    await new Promise(resolve => setTimeout(resolve, 100))
    if (!query) return productsData
    const searchTerm = query.toLowerCase()
    return productsData.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    )
  }

  // Filter products by price range
  async filterProductsByPrice(minPrice, maxPrice) {
    await new Promise(resolve => setTimeout(resolve, 100))
    let filtered = productsData
    
    if (minPrice !== null && minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= minPrice)
    }
    
    if (maxPrice !== null && maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= maxPrice)
    }
    
    return filtered
  }

  // Get products with advanced filtering
  async getFilteredProducts(filters = {}) {
    await new Promise(resolve => setTimeout(resolve, 100))
    let filtered = [...productsData]

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (filters.category === 'lipstick') {
        filtered = filtered.filter(product => 
          product.category === 'makeup' && 
          product.name.toLowerCase().includes('lipstick')
        )
      } else {
        filtered = filtered.filter(product => product.category === filters.category)
      }
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      )
    }

    // Price filter
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= Number(filters.minPrice))
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= Number(filters.maxPrice))
    }

    // Sort
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        default:
          // Default: keep original order
          break
      }
    }

    return filtered
  }
}

// Export singleton instance
export default new DataService()

# Data Structure Documentation

This folder contains JSON data files that replace the hardcoded data in the application. This structure makes it easy to integrate with a backend API later.

## Files

### `categories.json`
Contains beauty product categories with:
- `id`: Unique identifier
- `name`: Display name
- `key`: URL parameter key
- `image`: Image path
- `description`: Category description

### `products.json`
Contains product data with:
- `id`: Unique product identifier
- `name`: Product name
- `description`: Product description
- `price`: Price in INR (₹)
- `rating`: Product rating (1-5)
- `category`: Product category (skincare, haircare, makeup, fragrance)
- `image`: Main product image
- `images`: Array of product images
- `reviews`: Array of user reviews
- `inStock`: Stock availability
- `brand`: Product brand

## Data Service

The `src/services/dataService.js` file provides a service layer that:
- Loads data from JSON files
- Provides async methods that simulate API calls
- Includes filtering, searching, and sorting functionality
- Makes it easy to replace with real API calls later

## Backend Integration

When you're ready to build a backend, you can:

1. **Replace the data service methods** with actual API calls
2. **Keep the same data structure** - just change the data source
3. **Add new methods** for user management, orders, etc.
4. **Implement real-time updates** for inventory and pricing

## Example API Integration

```javascript
// Instead of this:
const products = await dataService.getAllProducts()

// You'll have this:
const products = await fetch('/api/products').then(res => res.json())

// Or with axios:
const products = await axios.get('/api/products').then(res => res.data)
```

## Benefits

- **No UI changes needed** when switching to backend
- **Consistent data structure** across the application
- **Easy testing** with static data
- **Scalable architecture** for future features
- **Type safety** can be added with TypeScript interfaces

## Current Features Supported

- ✅ Product listing with filtering
- ✅ Category-based navigation
- ✅ Search functionality
- ✅ Price range filtering
- ✅ Sorting options
- ✅ Product details with reviews
- ✅ Featured products
- ✅ Category display

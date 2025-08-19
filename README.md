BeautyMart (UI Only)

A modern React + Vite + TailwindCSS front-end for a beauty e-commerce app. No backend or database required. All data is mocked in the UI.

Tech
- React 18 with Vite
- TailwindCSS
- React Router
- React Icons

Getting Started
1. Install Node.js LTS (includes npm): https://nodejs.org
2. Install dependencies:
```
npm install
```
3. Start the dev server:
```
npm run dev
```
4. Open the URL printed in the terminal (default `http://localhost:5173`).

Available Pages
- `/` Home with search, featured products
- `/products` Product listing with filters and sorting
- `/product/:id` Product detail with images and reviews
- `/cart` Cart and order summary
- `/checkout` Checkout (address + payment UI)
- `/login`, `/register` Auth forms (UI only)
- `/seller` Seller dashboard (manage products)
- `/admin` Admin dashboard (manage users and approvals)

Notes
- This project is UI-only. Replace mocks with API calls when your backend is ready.
- Tailwind is preconfigured in `tailwind.config.js` and `src/index.css`.



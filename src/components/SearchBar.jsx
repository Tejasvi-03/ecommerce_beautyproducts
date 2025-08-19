import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  return (
    <div className="w-full max-w-xl">
      <label className="sr-only" htmlFor="search">Search</label>
      <div className="flex items-center rounded-lg border shadow-soft overflow-hidden">
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
          placeholder="Search beauty products..."
          className="flex-1 px-4 py-2 outline-none"
        />
        <button onClick={()=> onSearch?.(query)} className="px-4 py-2 bg-brand-600 text-white hover:bg-brand-700">Search</button>
      </div>
    </div>
  )
}



"use client"

import { Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
      <input
        type="search"
        placeholder="Search for anything..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-mutedLight dark:border-mutedDark bg-surfaceLight dark:bg-surfaceDark focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
            setQuery('')
          }
        }}
      />
    </div>
  )
}

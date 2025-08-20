"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { reviews } from '@/lib/mock'
import { navItems } from '@/components/sidebar-nav'
import { Search } from 'lucide-react'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const options = [
    ...navItems.map((item) => ({ label: item.label, href: item.href })),
    ...reviews.map((r) => ({ label: r.title, href: `/reviews/${r.slug}` })),
  ]
  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  )
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative bg-surfaceLight dark:bg-surfaceDark rounded-2xl shadow-card w-full max-w-lg p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Search size={18} className="text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent focus:outline-none"
          />
        </div>
        <ul className="max-h-64 overflow-y-auto mt-2">
          {filtered.map((opt) => (
            <li key={opt.href}>
              <button
                onClick={() => {
                  router.push(opt.href)
                  setOpen(false)
                  setQuery('')
                }}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-mutedLight dark:hover:bg-mutedDark"
              >
                {opt.label}
              </button>
            </li>
          ))}
          {filtered.length === 0 && <li className="p-2 text-muted-foreground">No results found.</li>}
        </ul>
      </div>
    </div>
  )
}

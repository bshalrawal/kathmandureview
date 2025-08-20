"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Flame, ListOrdered, Star, PenLine, Newspaper, Info, Bookmark, Shield, UserPlus, LogIn, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/hot', label: 'Hot', icon: Flame },
  { href: '/ranking', label: 'Ranking', icon: ListOrdered },
  { href: '/ratings', label: 'Rating', icon: Star },
  { href: '/reviews/heavens-rooftop-cafe-kathmandu', label: 'Review', icon: PenLine },
  { href: '/news', label: 'News', icon: Newspaper },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
  { href: '/admin', label: 'Admin Panel', icon: Shield }
]

export default function SidebarNav() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  return (
    <aside
      className={`hidden sm:flex flex-col justify-between py-4 px-2 bg-surfaceLight dark:bg-surfaceDark border-r border-mutedLight dark:border-mutedDark transition-all duration-300 ${collapsed ? 'w-16' : 'w-56'}`}
    >
      <div className="space-y-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-mutedLight dark:hover:bg-mutedDark rounded-md w-full"
        >
          <span className="flex-shrink-0"><Shield size={18} /></span>
          {!collapsed && <span>KR</span>}
        </button>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors group ${active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-mutedLight dark:hover:bg-mutedDark'}`}
              >
                <Icon size={18} className="flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="space-y-2">
        {/* Signup/Login buttons */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm rounded-md bg-primary text-white justify-center hover:bg-primary/90"
        >
          <UserPlus size={18} />
          {!collapsed && <span>Signup</span>}
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm rounded-md bg-accent text-surfaceDark justify-center hover:bg-accent/90"
        >
          <LogIn size={18} />
          {!collapsed && <span>Login</span>}
        </Link>
      </div>
    </aside>
  )
}

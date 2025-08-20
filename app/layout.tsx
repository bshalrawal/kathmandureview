import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import SidebarNav from '@/components/sidebar-nav'
import SearchBar from '@/components/search-bar'
import ThemeToggle from '@/components/theme-toggle'
import CommandPalette from '@/components/command-palette'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kathmandu Review',
  description: 'Your guide to Kathmandu\'s best experiences',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-surfaceLight text-textLight dark:bg-surfaceDark dark:text-textDark">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip link for keyboard users */}
          <a href="#main" className="skip-link">Skip to content</a>
          <div className="flex min-h-screen">
            <SidebarNav />
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-mutedLight dark:border-mutedDark flex items-center gap-4">
                <SearchBar />
                <div className="ml-auto flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </div>
              <main id="main" className="flex-1 p-4 overflow-x-hidden">
                {children}
              </main>
            </div>
          </div>
          {/* Command palette rendered at root level */}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  )
}

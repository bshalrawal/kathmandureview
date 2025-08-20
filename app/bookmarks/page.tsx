"use client"

import ReviewCard from '@/components/review-card'
import { reviews } from '@/lib/mock'
import { useEffect, useState } from 'react'

export const metadata = { title: 'Bookmarks – Kathmandu Review' }

export default function BookmarksPage() {
  const [bookmarked, setBookmarked] = useState<string[]>([])

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('bookmarks') : null
    if (stored) {
      try {
        setBookmarked(JSON.parse(stored))
      } catch {
        setBookmarked([])
      }
    }
  }, [])

  const bookmarkedReviews = reviews.filter((r) => bookmarked.includes(r.id))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Bookmarked Reviews</h1>
      {bookmarkedReviews.length === 0 ? (
        <p className="text-muted-foreground">You have no bookmarks yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bookmarkedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}

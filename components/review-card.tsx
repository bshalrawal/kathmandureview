"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import RatingStars from '@/components/rating-stars'
import { Review } from '@/lib/mock'
import { Bookmark } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Props {
  review: Review
  compact?: boolean
}

export default function ReviewCard({ review, compact }: Props) {
  const [bookmarks, setBookmarks] = useState<string[]>([])
  useEffect(() => {
    const stored = localStorage.getItem('bookmarks')
    if (stored) setBookmarks(JSON.parse(stored))
  }, [])
  const toggleBookmark = () => {
    const isBookmarked = bookmarks.includes(review.id)
    const updated = isBookmarked
      ? bookmarks.filter((id) => id !== review.id)
      : [...bookmarks, review.id]
    setBookmarks(updated)
    localStorage.setItem('bookmarks', JSON.stringify(updated))
  }
  const cardVariants = {
    rest: { y: 0, scale: 1, boxShadow: 'var(--tw-shadow-card)' },
    hover: { y: -4, scale: 1.01, boxShadow: 'var(--tw-shadow-hover)' },
  }
  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className="bg-surfaceLight dark:bg-surfaceDark rounded-2xl overflow-hidden shadow-card transition-shadow"
    >
      <div className="relative w-full h-40">
        <Image
          src={review.coverImage}
          alt={review.title}
          fill
          className="object-cover"
        />
        <button
          onClick={toggleBookmark}
          aria-label="Bookmark"
          className="absolute top-2 right-2 p-1 bg-surfaceLight/60 dark:bg-surfaceDark/60 rounded-full"
        >
          <Bookmark size={16} className={bookmarks.includes(review.id) ? 'text-primary' : 'text-muted-foreground'} />
        </button>
      </div>
      <div className="p-4 space-y-2">
        <span className="text-xs text-accent font-medium">{review.category}</span>
        <h3 className="text-lg font-semibold text-primary line-clamp-1">{review.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{review.excerpt}</p>
        <RatingStars rating={review.rating} />
        <Link
          href={`/reviews/${review.slug}`}
          className="inline-flex items-center text-primary hover:underline text-sm font-medium"
        >
          View more
          <span className="ml-1">→</span>
        </Link>
      </div>
    </motion.article>
  )
}

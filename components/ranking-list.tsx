"use client"

import Link from 'next/link'
import RatingStars from '@/components/rating-stars'
import { motion } from 'framer-motion'

interface Item {
  rank: number
  title: string
  slug: string
  rating: number
}

interface Props {
  items: Item[]
}

export default function RankingList({ items }: Props) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <motion.li
          key={item.rank}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: item.rank * 0.05 }}
          className="flex items-center gap-3 p-3 rounded-lg bg-surfaceLight dark:bg-surfaceDark shadow-card hover:shadow-hover"
        >
          <span className="text-xl font-bold text-primary w-6 text-center">{item.rank}</span>
          <div className="flex-1">
            <Link href={`/reviews/${item.slug}`} className="font-medium hover:underline">
              {item.title}
            </Link>
            <RatingStars rating={item.rating} />
          </div>
        </motion.li>
      ))}
    </ul>
  )
}

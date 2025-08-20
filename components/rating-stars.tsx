"use client"

import { Star, StarHalf, Star as StarEmpty } from 'lucide-react'

interface Props {
  rating: number
}

export default function RatingStars({ rating }: Props) {
  // round to nearest half
  const rounded = Math.round(rating * 2) / 2
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rounded)) {
      stars.push(<Star key={i} size={16} className="text-accent inline" aria-hidden="true" />)
    } else if (i - 0.5 === rounded) {
      stars.push(<StarHalf key={i} size={16} className="text-accent inline" aria-hidden="true" />)
    } else {
      stars.push(<StarEmpty key={i} size={16} className="text-muted-foreground inline" aria-hidden="true" />)
    }
  }
  return (
    <span className="inline-flex items-center" aria-label={`${rating} out of 5`}>{stars}</span>
  )
}

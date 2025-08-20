"use client"

import { Review } from '@/lib/mock'
import { motion } from 'framer-motion'
import ReviewCard from '@/components/review-card'
import { useEffect, useRef, useState } from 'react'

interface Props {
  items: Review[]
  full?: boolean
}

export default function HotCarousel({ items, full }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (!containerRef.current) return
    const scrollWidth = containerRef.current.scrollWidth
    const clientWidth = containerRef.current.clientWidth
    setWidth(scrollWidth - clientWidth)
  }, [items])
  return (
    <motion.div
      ref={containerRef}
      className={`flex space-x-4 overflow-hidden cursor-grab ${full ? 'flex-wrap' : ''}`}
      drag="x"
      dragConstraints={{ left: -width, right: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      {items.map((item) => (
        <div key={item.id} className={`${full ? 'w-full md:w-1/2 lg:w-1/3' : 'min-w-[280px]'}`}>
          <ReviewCard review={item} compact />
        </div>
      ))}
    </motion.div>
  )
}

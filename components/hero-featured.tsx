"use client"

import Image from 'next/image'
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion'
import Link from 'next/link'
import RatingStars from '@/components/rating-stars'
import { Review } from '@/lib/mock'
import { useRef } from 'react'

interface Props {
  reviews: Review[]
}

export default function HeroFeatured({ reviews }: Props) {
  const featured = reviews.slice(0, 2)
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Parallax scaling from 1.05 to 1.0
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  return (
    <section ref={ref} className="relative h-[70vh] mb-12">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={featured[0].coverImage}
          alt={featured[0].title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </motion.div>
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Discover Kathmandu’s Best
        </h1>
        <p className="max-w-xl text-lg text-white/90">
          Honest reviews and stories from Nepal's vibrant capital.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {featured.map((item) => (
            <Link
              key={item.id}
              href={`/reviews/${item.slug}`}
              className="bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md p-4 rounded-2xl shadow-card hover:shadow-hover transition-all w-full md:w-1/2"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-accent font-medium">{item.category}</span>
                <h3 className="text-lg font-semibold text-primary dark:text-accent">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
                <RatingStars rating={item.rating} />
                <span className="text-sm underline text-primary">View more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useMotionValue, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

/**
 * Simple parallax hook using Framer Motion. Pass a ref to the element you want to
 * animate and it will return a style object with a scale transform that
 * interpolates from 1.05 to 1.0 as the user scrolls.
 */
export default function useParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  return { ref, style: { scale } }
}

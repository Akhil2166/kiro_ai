'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'

const ToothScene = dynamic(() => import('@/components/ToothScene'), { ssr: false })

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lenis: any = null
    let rafId: number

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      })

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <main ref={mainRef} className="relative">
      <ToothScene />
      <Hero />
    </main>
  )
}

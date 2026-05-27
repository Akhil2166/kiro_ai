'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

const ToothScene = dynamic(() => import('@/components/ToothScene'), { ssr: false })

export default function Home() {
  return (
    <main className="relative">
      <ToothScene />
      <Hero />
    </main>
  )
}

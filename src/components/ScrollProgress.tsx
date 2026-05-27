'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) setProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[101]">
      <div className="h-full bg-primary transition-[width] duration-100 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

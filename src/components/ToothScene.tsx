'use client'

import { useEffect, useRef, useState, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function ToothModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/scene.gltf')

  // Clone the scene to avoid mutation issues
  const clonedScene = useMemo(() => scene.clone(), [scene])

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#e8e8e8'),
          roughness: 0.35,
          metalness: 0.05,
          envMapIntensity: 0.5,
        })
        mesh.material = mat
      }
    })
  }, [clonedScene])

  useFrame((state) => {
    if (!groupRef.current) return

    const t = state.clock.elapsedTime

    // === SCROLL-DRIVEN ANIMATION (like Six B) ===
    // The tooth continuously rotates as user scrolls through the entire page
    // It also scales and shifts position at different scroll stages

    // Continuous Y rotation driven by scroll (multiple full rotations across page)
    groupRef.current.rotation.y = scrollProgress * Math.PI * 8

    // X-axis tilt that oscillates based on scroll position
    groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI * 3) * 0.4 + 0.1

    // Z rotation - slight wobble
    groupRef.current.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.1

    // SCALE: starts medium in hero, grows as you scroll into page, then shrinks toward bottom
    // Creates the "maximize/minimize" effect
    const scalePhase = Math.sin(scrollProgress * Math.PI) // peaks at 50% scroll
    const baseScale = 1.4
    const scaleVariation = 0.6
    const scale = baseScale + scalePhase * scaleVariation
    groupRef.current.scale.setScalar(scale)

    // POSITION Y: tooth moves down as user scrolls, matching content flow
    const yOffset = -scrollProgress * 3.5

    // POSITION X: slight horizontal drift at certain scroll points
    const xOffset = Math.sin(scrollProgress * Math.PI * 2) * 0.3

    groupRef.current.position.set(xOffset, yOffset, 0)

    // Gentle idle float animation (always present, subtle)
    groupRef.current.position.y += Math.sin(t * 1.2) * 0.02
  })

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  )
}

export default function ToothScene() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting - clean, soft, studio-like */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 6, 4]} intensity={0.9} color="#ffffff" />
          <directionalLight position={[-3, 2, 3]} intensity={0.3} color="#88c9f7" />
          <pointLight position={[0, -2, 3]} intensity={0.2} color="#ffffff" />

          <ToothModel scrollProgress={scrollProgress} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

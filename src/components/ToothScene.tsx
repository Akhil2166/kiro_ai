'use client'

import { useEffect, useRef, useState, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function ToothModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/scene.gltf')
  const clonedScene = useMemo(() => scene.clone(), [scene])

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#f0f0f0'),
          roughness: 0.4,
          metalness: 0.02,
          envMapIntensity: 0.4,
        })
      }
    })
  }, [clonedScene])

  useFrame(() => {
    if (!groupRef.current) return

    // === EXACT SIX B BEHAVIOR ===
    // PURELY scroll-driven. No idle animation. Stops when user stops scrolling.

    // ROTATION Y: 5 full spins across entire page (0° → 1800°)
    groupRef.current.rotation.y = scrollProgress * Math.PI * 10

    // ROTATION X: gentle oscillating tilt ±15° (gives organic tumbling feel)
    groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI * 3) * 0.26 + 0.15

    // ROTATION Z: very subtle wobble
    groupRef.current.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.06

    // SCALE: bell curve — medium at start, largest at 50% scroll, small at end
    // sin(scroll * PI) gives 0→1→0 curve
    const scaleCurve = Math.sin(scrollProgress * Math.PI)
    const scale = 1.2 + scaleCurve * 0.6 // range: 1.2 → 1.8 → 1.2
    groupRef.current.scale.setScalar(scale)

    // POSITION: stays centered, only very subtle Y drift downward
    const yPos = -scrollProgress * 1.0
    groupRef.current.position.set(0, yPos, 0)
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
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
          <directionalLight position={[-3, 3, 3]} intensity={0.25} color="#88c9f7" />
          <ToothModel scrollProgress={scrollProgress} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

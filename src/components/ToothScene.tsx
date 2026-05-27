'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function ToothModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/scene.gltf')
  const { viewport } = useThree()

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          if (mesh.material) {
            const mat = mesh.material as THREE.MeshStandardMaterial
            mat.color = new THREE.Color('#f5f5f5')
            mat.roughness = 0.3
            mat.metalness = 0.05
            mat.envMapIntensity = 0.6
          }
        }
      })
    }
  }, [scene])

  useFrame((state) => {
    if (!groupRef.current) return

    // Scroll-driven rotation exactly like Six B
    groupRef.current.rotation.y = scrollProgress * Math.PI * 6
    groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI * 2) * 0.15 + 0.2

    // Gentle idle float
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.03

    // Scale based on scroll
    const baseScale = 1.6
    const scrollScale = Math.max(0.7, 1 - scrollProgress * 0.4)
    groupRef.current.scale.setScalar(baseScale * scrollScale)
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive object={scene} />
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
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      setScrollProgress(Math.min(progress, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-3, 2, 4]} intensity={0.4} color="#88c9f7" />
          <pointLight position={[0, 3, 2]} intensity={0.3} color="#ffffff" />
          <ToothModel scrollProgress={scrollProgress} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function ToothModel({ mouse, scrollProgress }: { mouse: { x: number; y: number }; scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/scene.gltf')
  const clonedScene = useMemo(() => scene.clone(), [scene])
  const current = useRef({ rotX: 0.15, rotY: 0, rotZ: 0, posX: 0, posY: 0, scale: 1.6 })

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#faf8f5'),
          roughness: 0.12,
          metalness: 0.0,
          clearcoat: 0.6,
          clearcoatRoughness: 0.2,
          reflectivity: 0.6,
          envMapIntensity: 0.9,
          sheen: 0.1,
          sheenRoughness: 0.3,
          sheenColor: new THREE.Color('#f0ebe4'),
        })
      }
    })
  }, [clonedScene])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    const c = current.current
    const lf = 0.015

    // Scroll-linked perspective (NOT spinning)
    const scrollRotY = scrollProgress * 0.5
    const scrollRotX = Math.sin(scrollProgress * Math.PI) * 0.12
    const scrollScale = 1.6 + Math.sin(scrollProgress * Math.PI * 0.8) * 0.15

    // Mouse parallax
    const mouseRotY = mouse.x * 0.12
    const mouseRotX = mouse.y * 0.06
    const mousePosX = mouse.x * 0.06
    const mousePosY = mouse.y * -0.03

    // Atmospheric drift
    const driftY = Math.sin(t * 0.4) * 0.03
    const driftX = Math.cos(t * 0.35) * 0.01
    const driftZ = Math.sin(t * 0.25) * 0.008

    // Targets
    const targetRotY = scrollRotY + mouseRotY
    const targetRotX = 0.15 + scrollRotX + mouseRotX
    const targetRotZ = driftZ
    const targetPosX = mousePosX + driftX
    const targetPosY = driftY + mousePosY
    const targetScale = scrollScale

    // Luxury interpolation
    c.rotX += (targetRotX - c.rotX) * lf
    c.rotY += (targetRotY - c.rotY) * lf
    c.rotZ += (targetRotZ - c.rotZ) * lf
    c.posX += (targetPosX - c.posX) * lf
    c.posY += (targetPosY - c.posY) * lf
    c.scale += (targetScale - c.scale) * lf

    groupRef.current.rotation.set(c.rotX, c.rotY, c.rotZ)
    groupRef.current.position.set(c.posX, c.posY, 0)
    groupRef.current.scale.setScalar(c.scale)
  })

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  )
}

export default function ToothScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) setScrollProgress(window.scrollY / total)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 6 }}>
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? [1, 1] : [1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 5, 4]} intensity={0.9} color="#fff8f0" />
          <directionalLight position={[-3, 2, 3]} intensity={0.3} color="#e8f0ff" />
          <directionalLight position={[0, -2, -3]} intensity={0.15} color="#ffffff" />
          <ToothModel mouse={mouse} scrollProgress={scrollProgress} />
          <ContactShadows position={[0, -1.2, 0]} opacity={0.12} scale={4} blur={2.5} far={2} color="#1d1a16" />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

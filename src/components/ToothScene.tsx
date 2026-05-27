'use client'

import { useEffect, useRef, useState, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function ToothModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/scene.gltf')
  const clonedScene = useMemo(() => scene.clone(), [scene])

  // Target values for smooth interpolation
  const targetRotation = useRef({ x: 0.15, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Ceramic material — realistic glossy white dental ceramic
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#faf8f5'),
          roughness: 0.18,
          metalness: 0.0,
          clearcoat: 0.4,
          clearcoatRoughness: 0.2,
          reflectivity: 0.6,
          envMapIntensity: 0.7,
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

    // === CINEMATIC BEHAVIOR ===
    // NO continuous spinning. Only subtle drift + mouse parallax.

    // Mouse parallax — tooth follows cursor gently
    targetRotation.current.y = mouse.x * 0.15
    targetRotation.current.x = 0.15 + mouse.y * 0.08

    // Smooth interpolation (luxury easing)
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.03
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.03

    // Very slow minimal Z wobble (barely perceptible)
    groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.015

    // Subtle drift — floating in space (slow, cinematic)
    const driftY = Math.sin(t * 0.5) * 0.04
    const driftX = Math.cos(t * 0.4) * 0.015

    targetPosition.current.x = mouse.x * 0.08 + driftX
    targetPosition.current.y = driftY + mouse.y * -0.04

    groupRef.current.position.x += (targetPosition.current.x - groupRef.current.position.x) * 0.02
    groupRef.current.position.y += (targetPosition.current.y - groupRef.current.position.y) * 0.02

    // Static scale — no breathing, just presence
    groupRef.current.scale.setScalar(1.6)
  })

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  )
}

export default function ToothScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 6 }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Studio lighting — soft, cinematic, product-commercial style */}
          <ambientLight intensity={0.4} />

          {/* Key light — warm, from upper right */}
          <directionalLight
            position={[4, 5, 4]}
            intensity={0.9}
            color="#fff8f0"
          />

          {/* Fill light — cool, from left */}
          <directionalLight
            position={[-3, 2, 3]}
            intensity={0.3}
            color="#e8f0ff"
          />

          {/* Rim light — subtle edge definition */}
          <directionalLight
            position={[0, -2, -3]}
            intensity={0.15}
            color="#ffffff"
          />

          <ToothModel mouse={mouse} />

          {/* Soft contact shadow underneath */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.12}
            scale={4}
            blur={2.5}
            far={2}
            color="#1d1a16"
          />

          {/* HDRI studio reflections */}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

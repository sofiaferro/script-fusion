'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { vertexShader, fragmentShader } from '@/lib/shaders'

const PARTICLE_COUNT = 10000
const PARTICLE_SIZE = 50

export function ParticleFlow() {
  const meshRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const [positions, scales, velocities] = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const scales = new Float32Array(PARTICLE_COUNT)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      velocities[i3] = (Math.random() - 0.5) * 0.2
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.2
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.2

      scales[i] = Math.random()
    }

    return [positions, scales, velocities]
  }, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: PARTICLE_SIZE },
      uOpacity: { value: 0.6 },
    }),
    []
  )

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={PARTICLE_COUNT}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aVelocity"
          count={PARTICLE_COUNT}
          array={velocities}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}


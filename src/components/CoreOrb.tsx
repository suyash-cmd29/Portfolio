'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Points>(null);
  const points = useMemo(() => {
    const p = new Float32Array(900);
    for (let i = 0; i < 900; i += 3) {
      const r = 1.9 + Math.random() * 0.8;
      const t = Math.random() * Math.PI * 2;
      const u = Math.acos(2 * Math.random() - 1);
      p[i] = r * Math.sin(u) * Math.cos(t);
      p[i + 1] = r * Math.sin(u) * Math.sin(t);
      p[i + 2] = r * Math.cos(u);
    }
    return p;
  }, []);

  useFrame((state) => {
    if (mesh.current) mesh.current.rotation.y = state.clock.elapsedTime * 0.18;
    if (halo.current) halo.current.rotation.y = -state.clock.elapsedTime * 0.1;
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.2, 20]} />
          <MeshDistortMaterial color="#7dd3fc" roughness={0.08} metalness={0.9} distort={0.26} speed={1.6} emissive="#67e8f9" emissiveIntensity={0.18} />
        </mesh>
      </Float>
      <Points ref={halo} positions={points} stride={3} frustumCulled>
        <PointMaterial transparent color="#c4b5fd" size={0.018} sizeAttenuation depthWrite={false} opacity={0.7} />
      </Points>
    </>
  );
}

export default function CoreOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 2, 4]} intensity={12} color="#a78bfa" />
      <pointLight position={[-3, -2, 2]} intensity={8} color="#22d3ee" />
      <Orb />
    </Canvas>
  );
}

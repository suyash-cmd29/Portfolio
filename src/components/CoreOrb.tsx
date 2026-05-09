'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 20]} />
        <MeshDistortMaterial color="#7dd3fc" roughness={0.05} metalness={0.9} distort={0.3} speed={2} />
      </mesh>
    </Float>
  );
}

export default function CoreOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.7]}>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 3, 4]} intensity={16} color="#a78bfa" />
      <Orb />
    </Canvas>
  );
}

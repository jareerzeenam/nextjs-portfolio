'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import type { MotionValue } from 'framer-motion';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Flag, INK, ISLAND_TOP, hash3, rockGeometry, useMaterials } from './Scene';

/* Level 8 on its own: the flag island turns as the visitor scrolls into the close. */
function Island({ progress, still }: { progress: MotionValue<number>; still: boolean }) {
  const m = useMaterials();
  const group = useRef<THREE.Group>(null);
  const rock = useMemo(() => rockGeometry(29.6), []);
  const path = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.5, -0.6, 2.4),
      new THREE.Vector3(-2.4, 1.6, 1.8),
      new THREE.Vector3(-0.6, ISLAND_TOP + 0.04, 0.9),
    ]);
    return curve.getSpacedPoints(26);
  }, []);
  const dots = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    const p = progress.get();
    if (group.current) {
      const idle = still ? 0 : Math.sin(clock.elapsedTime * 0.6) * 0.06;
      group.current.rotation.y = -0.9 + p * 1.6;
      group.current.position.y = idle - (1 - p) * 0.6;
    }
    if (dots.current) {
      // the path arrives at the flag as the section scrolls in
      const shown = Math.round(p * path.length);
      path.forEach((pt, i) => {
        dummy.position.copy(pt);
        dummy.scale.setScalar(i < shown ? 1 : 0.0001);
        dummy.updateMatrix();
        dots.current!.setMatrixAt(i, dummy.matrix);
      });
      dots.current.instanceMatrix.needsUpdate = true;
    }
  });

  const trees: [number, number][] = [
    [-0.95, 0.55],
    [0.9, -0.6],
  ];

  return (
    <group ref={group}>
      <mesh geometry={rock} material={m.rock} />
      <mesh material={m.moss} position={[0, 1.0, 0]}>
        <cylinderGeometry args={[1.52, 1.46, 0.3, 7]} />
      </mesh>
      {trees.map(([x, z], i) => (
        <group key={i} position={[x, ISLAND_TOP, z]} scale={0.9 + hash3(8, i, 9) * 0.4}>
          <mesh material={m.mossDark} position={[0, 0.32, 0]}>
            <coneGeometry args={[0.2, 0.55, 5]} />
          </mesh>
        </group>
      ))}
      <group position={[0.2, ISLAND_TOP, -0.1]}>
        <Flag m={m} still={still} />
      </group>
      <instancedMesh ref={dots} args={[undefined, undefined, path.length]}>
        <sphereGeometry args={[0.05, 6, 4]} />
        <meshBasicMaterial color={INK.ochre} />
      </instancedMesh>
    </group>
  );
}

/* Keep the camera aimed at the island's middle, flag included. */
function Aim() {
  useFrame(({ camera }) => camera.lookAt(0, 1.15, 0));
  return null;
}

export default function FlagIsland({
  progress,
  still,
  running,
}: {
  progress: MotionValue<number>;
  still: boolean;
  running: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={still ? 'demand' : running ? 'always' : 'never'}
      camera={{ fov: 26, position: [0, 2.9, 8.6] }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden
    >
      <hemisphereLight args={['#8FA6C8', '#141C2B', 1.1]} />
      <directionalLight position={[-6, 8, 6]} intensity={2.6} color="#FFD7A1" />
      <directionalLight position={[6, 3, -5]} intensity={0.6} color="#6E86B5" />
      <Aim />
      <Island progress={progress} still={still} />
    </Canvas>
  );
}

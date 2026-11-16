'use client';

import type { Landmark } from '@/data';
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';

/* Four flat inks over the dusk sky. Toon-shaded, no gloss. */
export const INK = {
  sky: '#141C2B',
  bone: '#ECE3CF',
  moss: '#6E9A73',
  mossDark: '#4C7353',
  ochre: '#E3A93B',
  clay: '#C8553D',
  rock: '#2B3449',
  rockLight: '#3D4964',
};

/* Island centres, oldest at the front, the next level at the back. */
export const ISLANDS: [number, number, number][] = [
  [-1.9, 0, 6.2],
  [2.4, 0.35, 4.3],
  [-2.3, -0.1, 1.4],
  [3.3, 0.4, -1.1],
  [-2.9, 0.2, -3.9],
  [2.5, 0, -6.4],
  [-1.7, 0.5, -9.0],
  [3.1, 0.8, -11.6],
];

export const ISLAND_TOP = 1.15;

type SceneProps = {
  landmarks: Landmark[];
  selected: number | null;
  hovered: number | null;
  still: boolean;
  running: boolean;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
  onReady?: () => void;
};

/* ---------- helpers ---------- */

export function hash3(x: number, y: number, z: number) {
  const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return s - Math.floor(s);
}

export function rockGeometry(seed: number) {
  const g = new THREE.CylinderGeometry(1.45, 0.18, 1.7, 7, 3);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    if (y > 0.84) continue; // keep the top rim flush with the grass
    const r = hash3(x + seed, y, z);
    const r2 = hash3(z, x + seed, y);
    pos.setXYZ(i, x * (0.82 + r * 0.32), y + (r2 - 0.5) * 0.28, z * (0.82 + r2 * 0.32));
  }
  g.computeVertexNormals();
  return g;
}

function useToonRamp() {
  return useMemo(() => {
    const data = new Uint8Array([70, 70, 70, 255, 150, 150, 150, 255, 255, 255, 255, 255]);
    const tex = new THREE.DataTexture(data, 3, 1, THREE.RGBAFormat);
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }, []);
}

export type Mats = Record<'bone' | 'moss' | 'mossDark' | 'clay' | 'ochre' | 'rock' | 'rockLight', THREE.Material>;

export function useMaterials(): Mats {
  const ramp = useToonRamp();
  return useMemo(() => {
    const toon = (color: string) =>
      new THREE.MeshToonMaterial({ color, gradientMap: ramp });
    return {
      bone: toon(INK.bone),
      moss: toon(INK.moss),
      mossDark: toon(INK.mossDark),
      clay: toon(INK.clay),
      ochre: new THREE.MeshBasicMaterial({ color: INK.ochre }),
      rock: toon(INK.rock),
      rockLight: toon(INK.rockLight),
    };
  }, [ramp]);
}

/* A critically-near spring with a little overshoot: mass, stiffness, damping. */
function springStep(x: THREE.Vector3, v: THREE.Vector3, target: THREE.Vector3, dt: number, k = 26, c = 9) {
  const ax = k * (target.x - x.x) - c * v.x;
  const ay = k * (target.y - x.y) - c * v.y;
  const az = k * (target.z - x.z) - c * v.z;
  v.x += ax * dt;
  v.y += ay * dt;
  v.z += az * dt;
  x.x += v.x * dt;
  x.y += v.y * dt;
  x.z += v.z * dt;
}

/* ---------- landmarks ---------- */

function House({ m }: { m: Mats }) {
  return (
    <group>
      <mesh material={m.bone} position={[0, 0.3, 0]}>
        <boxGeometry args={[0.9, 0.6, 0.7]} />
      </mesh>
      <mesh material={m.clay} position={[0, 0.85, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.72, 0.5, 4]} />
      </mesh>
      <mesh material={m.rock} position={[0.15, 0.18, 0.36]}>
        <boxGeometry args={[0.18, 0.34, 0.02]} />
      </mesh>
      <mesh material={m.ochre} position={[-0.22, 0.38, 0.36]}>
        <boxGeometry args={[0.16, 0.14, 0.02]} />
      </mesh>
    </group>
  );
}

function Mast({ m, still }: { m: Mats; still: boolean }) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (still || !ring.current) return;
    const t = (clock.elapsedTime % 2.4) / 2.4;
    ring.current.scale.setScalar(0.4 + t * 1.6);
    (ring.current.material as THREE.MeshBasicMaterial).opacity = 1 - t;
  });
  return (
    <group>
      <mesh material={m.bone} position={[0, 0.28, 0]}>
        <boxGeometry args={[0.7, 0.56, 0.6]} />
      </mesh>
      <mesh material={m.bone} position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.035, 0.07, 1.4, 5]} />
      </mesh>
      <mesh material={m.ochre} position={[0, 1.95, 0]}>
        <sphereGeometry args={[0.1, 8, 6]} />
      </mesh>
      <mesh ref={ring} position={[0, 1.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.25, 0.012, 4, 24]} />
        <meshBasicMaterial color={INK.ochre} transparent />
      </mesh>
    </group>
  );
}

function Cluster({ m }: { m: Mats }) {
  const blocks: [number, number, number, number, keyof Mats][] = [
    [-0.38, -0.22, 1.7, 0.42, 'bone'],
    [0.22, -0.32, 1.15, 0.4, 'bone'],
    [-0.05, 0.32, 0.75, 0.42, 'clay'],
    [0.45, 0.26, 1.35, 0.34, 'bone'],
    [-0.5, 0.36, 0.5, 0.3, 'bone'],
  ];
  return (
    <group>
      {blocks.map(([x, z, h, w, mat], i) => (
        <mesh key={i} material={m[mat]} position={[x, h / 2, z]}>
          <boxGeometry args={[w, h, w]} />
        </mesh>
      ))}
      {/* the links between services */}
      <mesh material={m.ochre} position={[-0.08, 1.0, -0.27]}>
        <boxGeometry args={[0.5, 0.03, 0.03]} />
      </mesh>
      <mesh material={m.ochre} position={[0.33, 0.62, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 0.03, 0.03]} />
      </mesh>
    </group>
  );
}

function Windmill({ m, still }: { m: Mats; still: boolean }) {
  const blades = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!still && blades.current) blades.current.rotation.z -= dt * 1.1;
  });
  return (
    <group>
      <mesh material={m.bone} position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.22, 0.42, 1.3, 6]} />
      </mesh>
      <mesh material={m.clay} position={[0, 1.47, 0]}>
        <coneGeometry args={[0.32, 0.38, 6]} />
      </mesh>
      <group ref={blades} position={[0, 1.25, 0.34]}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} material={m.bone} rotation={[0, 0, (i * Math.PI) / 2]}>
            <boxGeometry args={[0.13, 1.0, 0.02]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Observatory({ m, still }: { m: Mats; still: boolean }) {
  const dome = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!still && dome.current) dome.current.rotation.y += dt * 0.35;
  });
  return (
    <group>
      <mesh material={m.bone} position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.55, 0.62, 0.6, 8]} />
      </mesh>
      <group ref={dome} position={[0, 0.6, 0]}>
        <mesh material={m.clay}>
          <sphereGeometry args={[0.56, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
        <mesh material={m.ochre} position={[0, 0.32, 0.38]} rotation={[-0.7, 0, 0]}>
          <boxGeometry args={[0.12, 0.5, 0.04]} />
        </mesh>
      </group>
    </group>
  );
}

function Clinic({ m }: { m: Mats }) {
  return (
    <group>
      <mesh material={m.bone} position={[0, 0.36, 0]}>
        <boxGeometry args={[1.05, 0.72, 0.7]} />
      </mesh>
      <mesh material={m.rockLight} position={[0, 0.76, 0]}>
        <boxGeometry args={[1.15, 0.08, 0.8]} />
      </mesh>
      <mesh material={m.clay} position={[0, 0.42, 0.36]}>
        <boxGeometry args={[0.38, 0.12, 0.02]} />
      </mesh>
      <mesh material={m.clay} position={[0, 0.42, 0.36]}>
        <boxGeometry args={[0.12, 0.38, 0.02]} />
      </mesh>
    </group>
  );
}

function Teapot({ m, still }: { m: Mats; still: boolean }) {
  const geo = useMemo(() => new TeapotGeometry(0.4, 6), []);
  const steam = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (still || !steam.current) return;
    steam.current.children.forEach((puff, i) => {
      const t = ((clock.elapsedTime * 0.45 + i / 3) % 1 + 1) % 1;
      puff.position.set(0.62 + t * 0.25, 0.72 + t * 0.9, Math.sin(t * 6 + i) * 0.05);
      puff.scale.setScalar(0.05 + t * 0.09);
      const mat = (puff as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(t * Math.PI) * 0.85;
    });
  });
  return (
    <group rotation={[0, -0.5, 0]}>
      <mesh geometry={geo} material={m.clay} position={[0, 0.4, 0]} />
      <group ref={steam}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0.62, 0.8 + i * 0.3, 0]} scale={0.08}>
            <icosahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color={INK.bone} transparent opacity={0.6} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export function Flag({ m, still }: { m: Mats; still: boolean }) {
  const cloth = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(0.66, 0.4, 8, 2);
    g.translate(0.33, 0, 0);
    return g;
  }, []);
  const base = useMemo(() => Float32Array.from(geo.attributes.position.array), [geo]);
  useFrame(({ clock }) => {
    if (still || !cloth.current) return;
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      pos.setZ(i, Math.sin(x * 7 - clock.elapsedTime * 4) * 0.06 * x * 1.8);
    }
    pos.needsUpdate = true;
  });
  return (
    <group>
      <mesh material={m.bone} position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 1.7, 5]} />
      </mesh>
      <mesh ref={cloth} geometry={geo} position={[0.03, 1.48, 0]}>
        <meshBasicMaterial color={INK.ochre} side={THREE.DoubleSide} />
      </mesh>
      <mesh material={m.bone} position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.06, 6]} />
      </mesh>
    </group>
  );
}

function LandmarkModel({ kind, m, still }: { kind: Landmark; m: Mats; still: boolean }) {
  switch (kind) {
    case 'house':
      return <House m={m} />;
    case 'mast':
      return <Mast m={m} still={still} />;
    case 'cluster':
      return <Cluster m={m} />;
    case 'windmill':
      return <Windmill m={m} still={still} />;
    case 'observatory':
      return <Observatory m={m} still={still} />;
    case 'clinic':
      return <Clinic m={m} />;
    case 'teapot':
      return <Teapot m={m} still={still} />;
    case 'flag':
      return <Flag m={m} still={still} />;
  }
}

/* ---------- islands ---------- */

const TREE_SPOTS: [number, number][] = [
  [-0.95, 0.55],
  [0.9, -0.6],
  [-0.7, -0.85],
  [1.05, 0.35],
];

function Island({
  index,
  kind,
  m,
  still,
  selected,
  hovered,
  onSelect,
  onHover,
}: {
  index: number;
  kind: Landmark;
  m: Mats;
  still: boolean;
  selected: boolean;
  hovered: boolean;
  onSelect: (i: number) => void;
  onHover: (i: number | null) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const rock = useMemo(() => rockGeometry(index * 3.7), [index]);
  const base = ISLANDS[index];
  const lift = useRef({ y: 0, v: 0 });
  const trees = useMemo(
    () => TREE_SPOTS.filter((_, i) => hash3(index, i, 2) > 0.3).slice(0, kind === 'flag' ? 1 : 3),
    [index, kind]
  );

  useFrame(({ clock }, dt) => {
    if (!group.current) return;
    const step = Math.min(dt, 1 / 30);
    const target = selected ? 0.35 : hovered ? 0.18 : 0;
    if (still) {
      lift.current.y = target;
    } else {
      const a = 30 * (target - lift.current.y) - 8 * lift.current.v;
      lift.current.v += a * step;
      lift.current.y += lift.current.v * step;
    }
    const bob = still ? 0 : Math.sin(clock.elapsedTime * 0.7 + index * 1.3) * 0.07;
    group.current.position.set(base[0], base[1] + bob + lift.current.y, base[2]);
    if (ring.current) {
      const on = selected || hovered;
      const s = ring.current.scale.x + ((on ? 1 : 0.001) - ring.current.scale.x) * Math.min(1, step * 12);
      ring.current.scale.setScalar(s);
      ring.current.visible = s > 0.01;
    }
  });

  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(index);
    document.body.style.cursor = 'pointer';
  };
  const out = () => {
    onHover(null);
    document.body.style.cursor = '';
  };
  const click = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(index);
  };

  return (
    <group ref={group} position={base} onPointerOver={over} onPointerOut={out} onClick={click}>
      <mesh geometry={rock} material={m.rock} />
      <mesh material={kind === 'flag' ? m.rockLight : m.moss} position={[0, 1.0, 0]}>
        <cylinderGeometry args={[1.52, 1.46, 0.3, 7]} />
      </mesh>
      <mesh ref={ring} position={[0, ISLAND_TOP + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <ringGeometry args={[1.18, 1.32, 7]} />
        <meshBasicMaterial color={INK.ochre} />
      </mesh>
      {trees.map(([x, z], i) => (
        <group key={i} position={[x, ISLAND_TOP, z]} scale={0.8 + hash3(index, i, 9) * 0.5}>
          <mesh material={m.mossDark} position={[0, 0.32, 0]}>
            <coneGeometry args={[0.2, 0.55, 5]} />
          </mesh>
          <mesh material={m.rock} position={[0, 0.03, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.08, 4]} />
          </mesh>
        </group>
      ))}
      <group position={[0, ISLAND_TOP, 0]}>
        <LandmarkModel kind={kind} m={m} still={still} />
      </group>
    </group>
  );
}

/* ---------- the dotted path ---------- */

const DOTS = 190;

function Path({ still }: { still: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { points, futureFrom } = useMemo(() => {
    const ctrl: THREE.Vector3[] = [];
    ISLANDS.forEach((p, i) => {
      const top = new THREE.Vector3(p[0], p[1] + ISLAND_TOP + 0.03, p[2] + 0.95);
      ctrl.push(top);
      const next = ISLANDS[i + 1];
      if (next) {
        const nTop = new THREE.Vector3(next[0], next[1] + ISLAND_TOP + 0.03, next[2] + 0.95);
        ctrl.push(top.clone().lerp(nTop, 0.5).add(new THREE.Vector3(0, 0.9, 0)));
      }
    });
    const curve = new THREE.CatmullRomCurve3(ctrl, false, 'centripetal');
    const pts = curve.getSpacedPoints(DOTS - 1);
    // where the path crosses into the last (future) island
    const last = ctrl[ctrl.length - 3];
    let idx = 0;
    let best = Infinity;
    pts.forEach((p, i) => {
      const d = p.distanceToSquared(last);
      if (d < best) {
        best = d;
        idx = i;
      }
    });
    return { points: pts, futureFrom: idx };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colors = useMemo(() => {
    const c = new Float32Array(DOTS * 3);
    const done = new THREE.Color(INK.ochre);
    const todo = new THREE.Color(INK.bone).multiplyScalar(0.55);
    for (let i = 0; i < DOTS; i++) {
      (i <= futureFrom ? done : todo).toArray(c, i * 3);
    }
    return c;
  }, [futureFrom]);

  useEffect(() => {
    if (!mesh.current) return;
    mesh.current.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
  }, [colors]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const head = still ? -1 : (clock.elapsedTime / 7) % 1;
    for (let i = 0; i < DOTS; i++) {
      const u = i / (DOTS - 1);
      const d = u - head;
      const pulse = still ? 0 : Math.exp(-(d * d) / 0.0006);
      dummy.position.copy(points[i]);
      dummy.scale.setScalar(1 + pulse * 1.3);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, DOTS]}>
      <sphereGeometry args={[0.045, 6, 4]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
}

/* ---------- clouds and stars ---------- */

function Stars() {
  const geo = useMemo(() => {
    const n = 260;
    const p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      p[i * 3] = (hash3(i, 7, 1) - 0.5) * 90;
      p[i * 3 + 1] = 4 + hash3(i, 7, 2) * 30;
      p[i * 3 + 2] = -22 - hash3(i, 7, 3) * 20;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    return g;
  }, []);
  return (
    <points geometry={geo}>
      <pointsMaterial color={INK.bone} size={0.12} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

/* ---------- camera ---------- */

const OVERVIEW_TARGET = new THREE.Vector3(0, 0.6, -2.7);

function CameraRig({ selected, still }: { selected: number | null; still: boolean }) {
  const { camera, size, invalidate } = useThree();
  const portrait = size.width < size.height;
  const pos = useRef(new THREE.Vector3(0, 22, 30));
  const vel = useRef(new THREE.Vector3());
  const look = useRef(OVERVIEW_TARGET.clone());
  const lookVel = useRef(new THREE.Vector3());
  const goalPos = useMemo(() => new THREE.Vector3(), []);
  const goalLook = useMemo(() => new THREE.Vector3(), []);

  // Leave room for the HTML: the map sits right of the copy on wide screens,
  // above it on phones.
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    const w = size.width;
    const h = size.height;
    if (portrait) cam.setViewOffset(w, h, 0, h * 0.33, w, h);
    else if (w >= 1024) cam.setViewOffset(w, h, -w * 0.22, h * 0.16, w, h);
    else cam.setViewOffset(w, h, 0, h * 0.14, w, h);
    cam.updateProjectionMatrix();
    invalidate();
  }, [camera, size.width, size.height, portrait, invalidate]);

  useEffect(() => {
    invalidate();
  }, [selected, invalidate]);

  useFrame((_, dt) => {
    if (selected === null) {
      const far = portrait ? 1.75 : size.width < 1024 ? 1.3 : 1.1;
      goalPos.set(0, 13.5 * far, 22 * far - 2.7);
      goalLook.copy(OVERVIEW_TARGET);
    } else {
      const p = ISLANDS[selected];
      const near = portrait ? 1.55 : 1;
      goalLook.set(p[0], p[1] + 0.7, p[2]);
      goalPos.set(p[0] + 1.2 * near, p[1] + 10.5 * near, p[2] + 6.2 * near);
    }
    if (still) {
      pos.current.copy(goalPos);
      look.current.copy(goalLook);
    } else {
      const step = Math.min(dt, 1 / 30);
      springStep(pos.current, vel.current, goalPos, step);
      springStep(look.current, lookVel.current, goalLook, step);
    }
    camera.position.copy(pos.current);
    camera.lookAt(look.current);
  });
  return null;
}

/* ---------- scene ---------- */

function World({ landmarks, selected, hovered, still, onSelect, onHover, onReady }: SceneProps) {
  const m = useMaterials();
  const ready = useRef(false);
  useFrame(() => {
    if (!ready.current) {
      ready.current = true;
      onReady?.();
    }
  });
  return (
    <>
      <fog attach="fog" args={[INK.sky, 26, 58]} />
      <hemisphereLight args={['#8FA6C8', '#141C2B', 1.1]} />
      <directionalLight position={[-8, 10, 7]} intensity={2.6} color="#FFD7A1" />
      <directionalLight position={[9, 4, -6]} intensity={0.6} color="#6E86B5" />
      <CameraRig selected={selected} still={still} />
      <Stars />
      <Path still={still} />
      {landmarks.map((kind, i) => (
        <Island
          key={i}
          index={i}
          kind={kind}
          m={m}
          still={still}
          selected={selected === i}
          hovered={hovered === i && selected !== i}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </>
  );
}

export default function Scene(props: SceneProps) {
  const { still, running } = props;
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.75]}
      frameloop={still ? 'demand' : running ? 'always' : 'never'}
      camera={{ fov: 36, near: 0.1, far: 120, position: [0, 22, 30] }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onPointerMissed={() => props.onHover(null)}
      aria-hidden
    >
      <World {...props} />
    </Canvas>
  );
}

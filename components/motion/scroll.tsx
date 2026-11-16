'use client';

/*
 * Scroll-scrubbed motion. One grammar for the page: the camera travels over the
 * world, so things arrive from depth along a perspective, tied to scroll position
 * (they reverse when you scroll back). Only `transform` and `opacity` move, set as
 * full transform strings so they stay on the compositor. Reduced motion renders
 * everything at rest.
 */

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * True when content should render at rest: before mount (server HTML, slow JS,
 * no JS) and whenever the visitor prefers reduced motion. Scroll motion attaches
 * only after mount, so the first paint is always fully visible and the client's
 * first render matches the server's.
 */
export function useReducedAfterMount() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return !mounted || Boolean(reduce);
}

type Offset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

/* A light spring on scroll progress: Apple-style inertia without lag. */
const SCROLL_SPRING = { stiffness: 170, damping: 32, mass: 0.5 };

export function useScrub(ref: React.RefObject<HTMLElement | null>, offset: Offset) {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return useSpring(scrollYProgress, SCROLL_SPRING);
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
/* Strong ease-out, cubic-bezier(0.23, 1, 0.32, 1)'s shape as a power curve. */
export const easeOut = (t: number) => 1 - Math.pow(1 - clamp01(t), 3);

/** Remap progress into a sub-window [from, to] then ease it. */
export const windowed = (p: number, from: number, to: number) => easeOut((p - from) / (to - from));

type ArriveProps = {
  children: ReactNode;
  className?: string;
  /** Start of this element's window inside the shared progress, for staggers. */
  delay?: number;
  /** Tilt back around X (degrees): a tile lifting off the map plane. */
  tilt?: number;
  /** Swing around Y (degrees): cards swinging into an inventory. */
  swing?: number;
  /** Distance travelled toward the camera (px). */
  depth?: number;
  /** Sideways travel (px): rows sliding in like a pause menu. */
  slide?: number;
  rise?: number;
  origin?: string;
};

/** An element that arrives from depth as it scrolls into view. */
export function Arrive({
  children,
  className,
  delay = 0,
  tilt = 0,
  swing = 0,
  depth = 160,
  slide = 0,
  rise = 48,
  origin = '50% 100%',
}: ArriveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedAfterMount();
  const p = useScrub(ref, ['start 100%', 'start 58%']);
  const transform = useTransform(p, (v) => {
    const k = 1 - windowed(v, delay, Math.min(1, delay + 0.75));
    return `perspective(1200px) translate3d(${k * slide}px, ${k * rise}px, ${-k * depth}px) rotateX(${k * tilt}deg) rotateY(${k * swing}deg)`;
  });
  const opacity = useTransform(p, (v) => 0.12 + 0.88 * windowed(v, delay, Math.min(1, delay + 0.55)));

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
  return (
    <motion.div ref={ref} className={className} style={{ transform, opacity, transformOrigin: origin }}>
      {children}
    </motion.div>
  );
}

/** Words that light up as the reader scrolls through them. */
export function ScrubWords({
  text,
  className,
  prefix,
  suffix,
}: {
  text: string;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}) {
  // Measured on a block element: an inline span that wraps over several lines
  // reports an unreliable box, which left the last words unlit.
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedAfterMount();
  const p = useScrub(ref, ['start 90%', 'end 66%']);
  const words = text.split(' ');
  return (
    <span ref={ref} className={`block ${className ?? ''}`}>
      {prefix}
      {reduce
        ? text
        : words.map((w, i) => (
            <Word key={i} p={p} from={(i / words.length) * 0.92} to={((i + 1) / words.length) * 0.92}>
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </Word>
          ))}
      {suffix}
    </span>
  );
}

function Word({ p, from, to, children }: { p: MotionValue<number>; from: number; to: number; children: ReactNode }) {
  const opacity = useTransform(p, [from, to], [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

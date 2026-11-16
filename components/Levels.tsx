'use client';

import { levels } from '@/data';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Arrive, useScrub, useReducedAfterMount } from './motion/scroll';
import type { Level } from '@/data';
import { ArrowIcon, FlagIcon } from './icons';

const played = levels.filter((l) => l.kind !== 'next');

export default function Levels() {
  const list = useRef<HTMLOListElement>(null);
  const reduce = useReducedAfterMount();
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 75%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.6 });
  const clip = useTransform(progress, (v) => `inset(0 0 ${(1 - v) * 100}% 0)`);

  return (
    <section id="levels" className="scroll-mt-16 py-24 sm:py-32">
      <div className="wrap">
        <h2 className="h2 max-w-[14ch]">Seven levels, 2018 to 2026</h2>
        <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-bone-dim">
          The map, stop by stop: five companies, a part-time role and a master&apos;s degree, with
          what I built at each one.
        </p>

        <ol ref={list} className="relative mt-16 sm:mt-20">
          {/* The overworld path: dim dots for the whole route, ochre dots drawn as you read. */}
          <span
            aria-hidden
            className="absolute bottom-0 left-[21px] top-2 w-[2px] bg-[radial-gradient(circle,#ECE3CF_1px,transparent_1.4px)] bg-[length:2px_9px] opacity-25"
          />
          <motion.span
            aria-hidden
            style={reduce ? undefined : { clipPath: clip }}
            className="absolute bottom-0 left-[21px] top-2 w-[2px] bg-[radial-gradient(circle,#E3A93B_1px,transparent_1.4px)] bg-[length:2px_9px]"
          />

          {played.map((l, i) => (
            <LevelItem key={l.id} level={l} index={i} />
          ))}

          <li className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-x-5 sm:gap-x-8 lg:grid-cols-[44px_13rem_minmax(0,1fr)] lg:gap-x-10">
            <span aria-hidden className="grid h-11 w-11 place-items-center bg-ochre text-sky">
              <FlagIcon className="h-4 w-4" />
            </span>
            <p className="hud pt-3 text-[0.8rem] text-ochre">Available now</p>
            <div className="col-start-2 mt-4 lg:col-start-3 lg:mt-0">
              <h3 className="display text-[1.9rem] sm:text-[2.4rem]">Level 8</h3>
              <a href="#contact" className="link mt-3 font-semibold">
                Open to work: get in touch
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

/* A level lifts off the map plane like a tile, and its node lights when the path reaches it. */
function LevelItem({ level: l, index: i }: { level: Level; index: number }) {
  const node = useRef<HTMLSpanElement>(null);
  const reduce = useReducedAfterMount();
  const lit = useScrub(node, ['start 72%', 'start 58%']);
  const bg = useTransform(lit, [0, 1], ['#141C2B', '#E3A93B']);
  const fg = useTransform(lit, [0, 1], ['#E3A93B', '#141C2B']);
  const scale = useTransform(lit, (v) => `scale(${1 + Math.sin(Math.min(1, v) * Math.PI) * 0.12})`);

  return (
    <li
      id={`level-${l.id}`}
      className="relative grid scroll-mt-24 grid-cols-[44px_minmax(0,1fr)] gap-x-5 pb-16 sm:gap-x-8 lg:grid-cols-[44px_13rem_minmax(0,1fr)] lg:gap-x-10"
    >
      <motion.span
        ref={node}
        aria-hidden
        style={reduce ? undefined : { backgroundColor: bg, color: fg, transform: scale }}
        className={`hud relative grid h-11 w-11 place-items-center border border-ochre text-[0.9rem] ${reduce ? 'bg-ochre text-sky' : 'bg-sky text-ochre'}`}
      >
        {i + 1}
      </motion.span>

      <div className="pt-2.5 lg:pt-3">
        <p className="hud text-[0.8rem] text-ochre">{l.dates}</p>
        <p className="mt-1 text-sm text-bone-mute">{l.place}</p>
      </div>

      <Arrive tilt={26} depth={140} rise={40} origin="50% 0%" className="col-start-2 mt-4 lg:col-start-3 lg:mt-0">
        <h3 className="display text-[1.9rem] sm:text-[2.4rem]">{l.company}</h3>
        <p className="mt-2 text-base font-semibold text-bone">{l.role}</p>
        <ul className="mt-5 max-w-[42rem] space-y-3">
          {l.points.map((p) => (
            <li key={p} className="grid grid-cols-[14px_1fr] gap-3 text-[0.98rem] leading-relaxed text-bone-dim">
              <span aria-hidden className="mt-[0.6em] h-[5px] w-[5px] bg-moss" />
              {p}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
          {l.stack.map((s) => (
            <li key={s} className="hud border border-bone/15 px-2.5 py-1 text-[0.75rem] text-bone-dim">
              {s}
            </li>
          ))}
        </ul>
      </Arrive>
    </li>
  );
}

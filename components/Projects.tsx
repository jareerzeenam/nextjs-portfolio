'use client';

import { profile, projects } from '@/data';
import { motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowIcon, ExternalIcon } from './icons';
import { Arrive, useScrub, windowed, useReducedAfterMount } from './motion/scroll';

export default function Projects() {
  const [lead, ...rest] = projects;
  return (
    <section id="projects" className="scroll-mt-16 border-t border-bone/10 py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h2 max-w-[13ch]">Side projects on GitHub</h2>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link shrink-0 font-semibold">
            All repositories
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <LeadReveal p={lead} />

        <ul className="mt-20 space-y-16 sm:space-y-20">
          {rest.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={p.id}>
                {/* Smaller plays of the lead: screenshot and text alternate sides. */}
                <Arrive depth={220} rise={50} tilt={12} swing={flip ? -10 : 10} origin={flip ? '100% 100%' : '0% 100%'}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-6 transition-transform duration-300 ease-out hover:-translate-y-0.5 md:grid-cols-12 md:items-center md:gap-10"
                  >
                    <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                      <Shot src={p.img} alt={`${p.title} screenshot`} />
                    </div>
                    <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
                      <ProjectText p={p} />
                    </div>
                  </a>
                </Arrive>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/*
 * The lead project opens like a laptop lid: the screen starts tipped back in
 * perspective and lands flat and full size. On desktop the stage is pinned
 * while it opens; on phones it plays as the block scrolls through.
 */
function LeadReveal({ p }: { p: (typeof projects)[number] }) {
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedAfterMount();
  const prog = useScrub(track, ['start 85%', 'end end']);
  const screen = useTransform(prog, (v) => {
    const e = windowed(v, 0, 0.62);
    const k = 1 - e;
    return `perspective(1600px) translate3d(0, ${k * 70}px, 0) rotateX(${k * 42}deg) scale(${0.8 + 0.2 * e})`;
  });
  const shade = useTransform(prog, (v) => 0.55 * (1 - windowed(v, 0, 0.62)));
  const text = useTransform(prog, (v) => {
    const k = 1 - windowed(v, 0.4, 0.8);
    return `translate3d(${k * 40}px, 0, 0)`;
  });
  const textOpacity = useTransform(prog, (v) => 0.1 + 0.9 * windowed(v, 0.4, 0.75));

  return (
    <div ref={track} className={`relative mt-14 ${reduce ? '' : 'lg:h-[150vh]'}`}>
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid gap-8 lg:sticky lg:top-[18vh] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-12"
      >
        <motion.div style={reduce ? undefined : { transform: screen, transformOrigin: '50% 100%' }}>
          <div className="relative">
            <Shot src={p.img} alt={`${p.title} screenshot`} priority />
            {!reduce && (
              <motion.span
                aria-hidden
                style={{ opacity: shade }}
                className="pointer-events-none absolute inset-0 bg-sky"
              />
            )}
          </div>
        </motion.div>
        <motion.div style={reduce ? undefined : { transform: text, opacity: textOpacity }}>
          <ProjectText p={p} large />
        </motion.div>
      </a>
    </div>
  );
}

function Shot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-bone/15 bg-sky-raised">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 60vw, (min-width: 768px) 33vw, 100vw"
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

function ProjectText({ p, large = false }: { p: (typeof projects)[number]; large?: boolean }) {
  return (
    <div>
      <h3 className={`display ${large ? 'text-[2.2rem] sm:text-[2.8rem]' : 'text-[1.9rem]'}`}>{p.title}</h3>
      <p className={`mt-3 leading-relaxed text-bone-dim ${large ? 'text-lg' : 'text-[0.98rem]'}`}>{p.description}</p>
      <p className="hud mt-4 text-[0.75rem] text-bone-mute">{p.stack.join(' / ')}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bone transition-colors group-hover:text-ochre">
        View the code
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </span>
    </div>
  );
}

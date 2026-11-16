'use client';

import { levels, profile } from '@/data';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowIcon, FlagIcon } from '../icons';

const Scene = dynamic(() => import('./Scene'), { ssr: false });

type Mode = 'pending' | 'live' | 'still' | 'off';

function pickMode(): Mode {
  if (typeof window === 'undefined') return 'pending';
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return 'off';
  } catch {
    return 'off';
  }
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return 'off';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'still';
  if ((nav.deviceMemory ?? 8) <= 2) return 'still';
  return 'live';
}

const landmarks = levels.map((l) => l.landmark);

export default function Overworld() {
  const section = useRef<HTMLElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const [mode, setMode] = useState<Mode>('pending');
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setMode(pickMode());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setMode(pickMode());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Stop rendering when the map is scrolled away.
  useEffect(() => {
    const el = section.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.02,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = useCallback((i: number | null) => {
    setSelected((cur) => (i === null || cur === i ? null : i));
  }, []);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onSelectorKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const from = selected ?? (e.key === 'ArrowRight' ? -1 : levels.length);
    const next = Math.max(0, Math.min(levels.length - 1, from + (e.key === 'ArrowRight' ? 1 : -1)));
    setSelected(next);
    buttons.current[next]?.focus();
  };

  const shown = hovered ?? selected;
  const level = shown === null ? null : levels[shown];

  return (
    <section
      ref={section}
      id="top"
      aria-label="Introduction and career map"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* The sky: the scene's own ground, painted behind a transparent canvas. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_62%_108%,#3B2F35_0%,#22283A_38%,#141C2B_72%)]" />
      {mode !== 'off' && mode !== 'pending' && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${ready ? 'opacity-100' : 'opacity-0'}`}
        >
          <Scene
            landmarks={landmarks}
            selected={selected}
            hovered={hovered}
            still={mode === 'still'}
            running={visible}
            onSelect={(i) => select(i)}
            onHover={setHovered}
            onReady={() => setReady(true)}
          />
        </div>
      )}

      {/* Phones: the copy sits below the map; fade the sky in behind it so it stays legible. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-sky from-55% to-transparent lg:hidden"
      />

      <div className="pointer-events-none relative mt-auto">
        <div className="wrap grid gap-8 pb-8 pt-28 sm:pb-10 lg:grid-cols-[minmax(0,37rem)_23rem] lg:items-end lg:justify-between lg:gap-12 lg:pb-12">
          <div className="enter pointer-events-auto min-w-0 max-w-[40rem] lg:plate lg:p-6 xl:p-8">
            <h1>
              <span className="display block text-[3.1rem] sm:text-[5.2rem] lg:text-[3.6rem] xl:text-[4.75rem]">Jareer Zeenam</span>
              <span className="mt-3 block text-xl font-semibold text-bone sm:text-2xl">
                Full-stack software engineer, London
              </span>
            </h1>
            <p
              className={`mt-4 max-w-[34rem] text-base leading-relaxed text-bone-dim sm:text-lg ${
                selected !== null ? 'max-lg:hidden' : ''
              }`}
            >
              Six years of experience developing and architecting APIs, platforms and client sites
              in Laravel, Node.js, GraphQL and Next.js, across healthcare, education and e-commerce.
            </p>
            {/* Phones: the picked level takes the paragraph's place, so nothing shifts. */}
            {selected !== null && (
              <div className="plate mt-4 p-4 lg:hidden">
                <StageCard index={selected} compact />
              </div>
            )}
            <p className="hud mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8rem] text-bone">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 bg-moss" />
                Open to work
              </span>
              <span aria-hidden className="text-bone-mute">/</span>
              <span>Available now</span>
              <span aria-hidden className="text-bone-mute">/</span>
              <span>Open to relocation</span>
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Email me
              </a>
              <a href="/resume" className="btn-secondary">
                Read my resume
              </a>
            </div>
          </div>

          <div className="enter enter-late pointer-events-auto min-w-0">
            <div
              aria-live="polite"
              className="plate hidden min-h-[11.5rem] p-5 lg:block"
            >
              {level ? (
                <StageCard index={shown!} />
              ) : (
                <div>
                  <p className="display text-[1.7rem]">Fly to any level</p>
                  <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                    Every island is a job or degree. Pick a level to fly there, or scroll for the
                    full story.
                  </p>
                </div>
              )}
            </div>

            <div
              role="group"
              aria-label="Career levels, oldest first"
              onKeyDown={onSelectorKey}
              className="relative mt-3 flex items-center justify-between"
            >
              <span aria-hidden className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,#E3A93B_0_3px,transparent_3px_8px)] bg-[length:8px_1px] opacity-70" />
              {levels.map((l, i) => {
                const active = selected === i;
                const isNext = l.kind === 'next';
                return (
                  <button
                    key={l.id}
                    ref={(el) => {
                      buttons.current[i] = el;
                    }}
                    type="button"
                    aria-pressed={active}
                    aria-label={`Level ${i + 1}: ${l.company}, ${l.dates}`}
                    onClick={() => select(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className={`hud relative grid h-11 w-9 shrink-0 place-items-center border min-[400px]:w-11 text-[0.85rem] transition-[background-color,color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 active:scale-95 ${
                      active
                        ? 'border-ochre bg-ochre text-sky'
                        : 'border-bone/30 bg-sky-deep text-bone hover:border-ochre hover:text-ochre'
                    }`}
                  >
                    {isNext ? <FlagIcon className="h-4 w-4" /> : i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageCard({ index, compact = false }: { index: number; compact?: boolean }) {
  const l = levels[index];
  const href = l.kind === 'next' ? '#contact' : `#level-${l.id}`;
  return (
    <div key={l.id} className="stage-swap">
      <div className="flex items-baseline justify-between gap-4">
        <p className={`display ${compact ? 'text-[1.35rem]' : 'text-[1.7rem]'}`}>{l.company}</p>
        <p className="hud shrink-0 text-[0.78rem] text-ochre">
          {l.kind === 'next' ? 'L8 / next' : `L${index + 1} / ${l.years}`}
        </p>
      </div>
      <p className="mt-1 text-sm text-bone-dim">{l.role}</p>
      {!compact && <p className="mt-2 text-sm leading-relaxed text-bone">{l.headline}</p>}
      <a href={href} className="link mt-3 text-sm font-semibold">
        {l.kind === 'next' ? 'Get in touch' : 'Read this level'}
        <ArrowIcon className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

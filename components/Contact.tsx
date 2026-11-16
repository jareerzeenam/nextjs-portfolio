'use client';

import { navItems, profile, socialMedia } from '@/data';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon, ExternalIcon } from './icons';
import {
  useScrub,
  windowed,
  useReducedAfterMount,
} from './motion/scroll';

const FlagIsland = dynamic(() => import('./overworld/FlagIsland'), {
  ssr: false,
});

function canRender3D() {
  try {
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    if (nav.connection?.saveData) return false;
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const reduce = useReducedAfterMount();
  const p = useScrub(stage, ['start 95%', 'start 35%']);
  const rest = useMotionValue(1);
  // The close zooms through: the headline arrives from just past the camera.
  const headline = useTransform(p, (v) => {
    const k = 1 - windowed(v, 0, 0.85);
    return `perspective(1200px) translate3d(0, ${k * 30}px, ${k * 260}px)`;
  });
  const headlineOpacity = useTransform(
    p,
    (v) => 0.15 + 0.85 * windowed(v, 0.05, 0.6),
  );

  const [show3D, setShow3D] = useState(false);
  const [near, setNear] = useState(false);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    setShow3D(canRender3D());
    const el = stage.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setNear(e.isIntersecting);
        if (e.isIntersecting) setSeen(true);
      },
      { rootMargin: '300px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-16 border-t border-bone/10"
    >
      <div
        ref={stage}
        className="wrap grid items-center gap-10 py-24 sm:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]"
      >
        <div>
          <motion.h2
            className="display origin-left text-[3rem] sm:text-[5rem] lg:text-[6rem]"
            style={
              reduce
                ? undefined
                : { transform: headline, opacity: headlineOpacity }
            }
          >
            Next level:
            <br />
            <span className="text-ochre">your team.</span>
          </motion.h2>
          <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-bone-dim">
            I&apos;m looking for a full-stack or back-end role in
            London, or anywhere I can relocate to, and I can start
            straight away. Email is the quickest way to reach me.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary"
            >
              Email me
            </a>
            <a
              href={profile.resume}
              download
              className="btn-secondary"
            >
              Download my resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-bone">{profile.email}</span>
            <button
              type="button"
              onClick={copy}
              className="hud inline-flex min-h-11 items-center gap-2 text-[0.8rem] text-bone-dim transition-colors hover:text-ochre"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-moss" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
              <span aria-live="polite">
                {copied ? 'Copied' : 'Copy address'}
              </span>
            </button>
          </div>
        </div>

        <div
          aria-hidden
          className="relative mx-auto aspect-square w-full max-w-[22rem] lg:max-w-none"
        >
          {show3D && seen && (
            <FlagIsland
              progress={reduce ? rest : p}
              still={Boolean(reduce)}
              running={near}
            />
          )}
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-20">
          <div>
            <p className="font-semibold">Jareer Zeenam</p>
            <p className="mt-1 text-sm text-bone-mute">
              Full-stack software engineer, London
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
              {navItems.map((n) => (
                <li key={n.link}>
                  <a
                    href={n.link}
                    className="link min-h-11 text-sm text-bone-dim"
                  >
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-1">
            {socialMedia.map((s) => (
              <li key={s.name}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link min-h-11 text-sm text-bone-dim"
                >
                  {s.name}
                  <ExternalIcon className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="wrap pb-10 text-sm text-bone-mute">
          © 2026 Jareer Zeenam.
        </p>
      </div>
    </footer>
  );
}

'use client';

import { navItems } from '@/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MenuIcon } from './icons';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'border-b border-bone/10 bg-sky/95' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ochre focus:px-4 focus:py-2 focus:font-semibold focus:text-sky"
      >
        Skip to content
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex min-h-11 items-center gap-3" aria-label="Jareer Zeenam, back to the top">
          <Image
            src="/jareer.webp"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 border border-bone/25 object-cover"
          />
          <span className="hidden text-sm font-semibold sm:block">Jareer Zeenam</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.link}>
                <a href={item.link} className="link text-sm text-bone-dim hover:text-bone">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/resume" className="btn-secondary hidden min-h-10 px-4 text-sm lg:inline-flex">
            Resume
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon open={open} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-sky lg:hidden"
        >
          <ul className="wrap flex flex-col pt-6">
            {navItems.map((item) => (
              <li key={item.link} className="border-b border-bone/10">
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="display flex min-h-16 items-center text-3xl"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-8">
              <a href="/resume" className="btn-primary w-full">
                Read my resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

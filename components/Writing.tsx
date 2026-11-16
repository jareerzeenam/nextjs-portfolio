'use client';

import { blogs, profile } from '@/data';
import { ArrowIcon, ExternalIcon } from './icons';
import { Arrive } from './motion/scroll';

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-16 border-t border-bone/10 py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h2 max-w-[13ch]">Writing on Medium</h2>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="link shrink-0 font-semibold">
            All articles
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <ul className="mt-14 border-t border-bone/15">
          {blogs.map((b, i) => (
            <li key={b.link} className="border-b border-bone/15">
              <Arrive slide={i % 2 ? 80 : -80} rise={0} depth={120} swing={i % 2 ? -8 : 8} origin={i % 2 ? '100% 50%' : '0% 50%'}>
              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-10"
              >
                <span>
                  <span className="block text-xl font-semibold leading-snug text-bone transition-colors duration-200 group-hover:text-ochre sm:text-2xl">
                    {b.title}
                  </span>
                  <span className="mt-2 block max-w-[60ch] text-bone-dim">{b.description}</span>
                </span>
                <ArrowIcon className="hidden h-5 w-5 text-bone-mute transition-[transform,color] duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-ochre sm:block" />
              </a>
              </Arrive>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

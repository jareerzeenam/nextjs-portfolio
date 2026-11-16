'use client';

import { profile, testimonials } from '@/data';
import Image from 'next/image';
import { ExternalIcon } from './icons';
import { Arrive, ScrubWords } from './motion/scroll';

type T = (typeof testimonials)[number];

export default function Recommendations() {
  const [lead, ...rest] = testimonials;
  return (
    <section id="recommendations" className="scroll-mt-16 border-t border-bone/10 bg-sky-deep py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h2 max-w-[14ch]">What my teammates say</h2>
          <a
            href={`${profile.linkedin}details/recommendations/`}
            target="_blank"
            rel="noopener noreferrer"
            className="link shrink-0 font-semibold"
          >
            Recommendations on LinkedIn
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <figure className="mt-14 max-w-[58rem]">
          <blockquote className="display text-[1.75rem] !font-bold !leading-[1.15] sm:text-[2.4rem]">
            <span aria-hidden className="text-ochre">“</span>
            <ScrubWords text={lead.excerpt} />
            <span aria-hidden className="text-ochre">”</span>
          </blockquote>
          <Person t={lead} />
          <FullText t={lead} />
        </figure>

        <ul className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {rest.map((t, i) => (
            <li key={t.name}>
              <Arrive depth={220} rise={60} delay={(i % 3) * 0.12} className="border-t border-bone/15 pt-6">
              <figure>
                <blockquote className="text-lg leading-relaxed text-bone">“{t.excerpt}”</blockquote>
                <Person t={t} />
                <FullText t={t} />
              </figure>
              </Arrive>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Person({ t }: { t: T }) {
  return (
    <figcaption className="mt-6 flex items-center gap-4">
      <Image
        src={t.image}
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 object-cover grayscale-[35%]"
      />
      <span>
        <span className="block font-semibold text-bone">{t.name}</span>
        {t.title && <span className="block text-sm text-bone-mute">{t.title}</span>}
      </span>
    </figcaption>
  );
}

function FullText({ t }: { t: T }) {
  return (
    <details className="group mt-4">
      <summary className="link min-h-11 cursor-pointer list-none text-sm font-semibold text-bone-dim [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Read the full recommendation</span>
        <span className="hidden group-open:inline">Hide the full recommendation</span>
      </summary>
      <p className="mt-2 max-w-[65ch] text-[0.95rem] leading-relaxed text-bone-dim">{t.quote}</p>
    </details>
  );
}

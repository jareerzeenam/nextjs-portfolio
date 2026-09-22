'use client';

import { testimonials } from '@/data';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import Title from './ui/Title';

const linkedInRecommendations =
  'https://www.linkedin.com/in/jareer-zeenam/#:~:text=all%2089%20skills-,Recommendations,-Recommendations';

const Clients = () => {
  return (
    <section className="scroll-mt-28 py-16 md:py-24" id="testimonials">
      <Title primary="Kind Words From" secondary="Colleagues" />
      <div className="mt-8 md:mt-10">
        <MobileTestimonials />
        <div className="hidden md:block">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

const MobileTestimonials = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const updateActive = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = [...scroller.querySelectorAll('article')];
    const position = scroller.scrollLeft;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - position);
      if (distance < nearestDistance) {
        nearest = index;
        nearestDistance = distance;
      }
    });

    setActive(nearest);
  };

  const scrollToCard = (index: number) => {
    const scroller = scrollerRef.current;
    const cards = scroller?.querySelectorAll('article');
    const card = cards?.[index];
    const first = cards?.[0];
    if (!scroller || !card || !first) return;

    scroller.scrollTo({
      left: card.offsetLeft - first.offsetLeft,
      behavior: 'smooth',
    });
  };

  return (
    <div className="md:hidden">
      <div
        ref={scrollerRef}
        onScroll={updateActive}
        className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 scroll-pr-4 items-start gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1 [scrollbar-width:none] sm:-mx-6 sm:scroll-pl-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item, index) => {
          const isOpen = expanded === index;

          return (
            <article
              key={item.name}
              className="flex w-[calc(100%-2.75rem)] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-[#04071d] p-5"
            >
              <p className={`text-sm leading-relaxed text-white ${isOpen ? '' : 'line-clamp-6'}`}>
                {item.quote}
              </p>
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : index)}
                className="mt-3 min-h-11 self-start text-sm font-medium text-purple"
              >
                {isOpen ? 'Show less' : 'Read more'}
              </button>

              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <Image
                  src={item.image}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full border border-white/20 object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-white">{item.name}</p>
                  <p className="text-xs leading-snug text-white-200">{item.title}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show recommendation from ${item.name}`}
            onClick={() => scrollToCard(index)}
            className={`h-2.5 rounded-full transition-all ${
              active === index ? 'w-6 bg-purple' : 'w-2.5 bg-white/25'
            }`}
          />
        ))}
      </div>

      <a
        href={linkedInRecommendations}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-4 flex min-h-11 w-max items-center text-sm text-white-200 underline-offset-4 hover:text-white hover:underline"
      >
        All recommendations on LinkedIn
      </a>
    </div>
  );
};

export default Clients;

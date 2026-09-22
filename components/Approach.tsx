'use client';

import { approach } from '@/data';
import { motion } from 'framer-motion';
import Title from './ui/Title';

const Approach = () => {
  return (
    <section id="approach" className="scroll-mt-28 py-16 md:py-24">
      <Title primary="My" secondary="approach" />
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white-200 sm:text-base">
        How a piece of work goes from a conversation to something in production.
      </p>

      <div className="relative mt-12 md:mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16%] right-[16%] top-5 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
        />
        <ol className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {approach.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex h-full flex-col"
            >
              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center self-start rounded-full border border-white/15 bg-black-100 text-sm font-semibold text-white lg:self-center">
                0{item.id}
              </div>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">
                  {item.order}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#C1C2D3] sm:text-base">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-white-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Approach;

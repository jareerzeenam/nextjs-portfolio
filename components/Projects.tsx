'use client';
import React from 'react';
import { EvervaultCard, Icon } from './ui/evervaultCard';
import { approach } from '@/data';
import Title from './ui/Title';

const Projects = () => {
  return (
    <div>
      <Title primary="My" secondary="Approach" />

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        {approach.map((item) => (
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative lg:h-[35rem]"
            key={item.id}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard
              text={item.title}
              className={item.className}
            />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              {item.description}
            </h2>

            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-1xl font-bold text-white backdrop-blur-3xl">
                {item.order}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

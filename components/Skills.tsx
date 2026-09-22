'use client';

import { skills } from '@/data';
import { cn } from '@/lib/utils';
import Title from './ui/Title';

const midpoint = Math.ceil(skills.length / 2);
const rows = [skills.slice(0, midpoint), skills.slice(midpoint)];

const SkillRow = ({
  items,
  reverse = false,
}: {
  items: typeof skills;
  reverse?: boolean;
}) => {
  const loop = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
      <ul
        className={cn(
          'flex w-max min-w-full shrink-0 animate-scroll gap-3 py-2 hover:[animation-play-state:paused]'
        )}
        style={{
          animationDirection: reverse ? 'reverse' : 'forwards',
          ['--animation-duration' as string]: '70s',
        }}
      >
        {loop.map((skill, index) => (
          <li
            key={`${skill.title}-${index}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white"
          >
            <img src={skill.img} alt="" className="h-5 w-5 object-contain" />
            <span className="whitespace-nowrap">{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="scroll-mt-28 py-16 md:py-24" id="skills">
      <Title primary="My" secondary="skills" />
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white-200 sm:text-base">
        The tools I use most often across backend, frontend, and delivery.
      </p>
      <div className="mt-10 flex flex-col gap-3">
        <SkillRow items={rows[0]} />
        <SkillRow items={rows[1]} reverse />
      </div>
    </section>
  );
};

export default Skills;

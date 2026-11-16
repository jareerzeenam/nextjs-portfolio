'use client';

import { skillGroups } from '@/data';
import { Arrive } from './motion/scroll';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-bone/10 py-24 sm:py-32">
      <div className="wrap">
        <h2 className="h2 max-w-[14ch]">Skills and tools</h2>
        <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-bone-dim">
          A PHP and Laravel specialist who works across the stack, from the database to the
          interface.
        </p>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Arrive
              key={g.title}
              depth={260}
              rise={30}
              swing={[22, 0, -22][i % 3]}
              delay={(i % 3) * 0.1}
              origin={['100% 50%', '50% 100%', '0% 50%'][i % 3]}
              className="border-t border-bone/15 pt-5"
            >
              <h3 className="hud text-[0.85rem] text-ochre">{g.title}</h3>
              <ul className="mt-4 space-y-1">
                {g.skills.map((s) => (
                  <li key={s.name} className="flex min-h-9 items-center gap-3 text-[0.98rem] text-bone">
                    {s.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.icon} alt="" width={20} height={20} className="icon-ink h-5 w-5 object-contain" />
                    ) : (
                      <span aria-hidden className="grid h-5 w-5 place-items-center">
                        <span className="h-[5px] w-[5px] bg-bone-mute" />
                      </span>
                    )}
                    {s.name}
                  </li>
                ))}
              </ul>
            </Arrive>
          ))}
        </div>
      </div>
    </section>
  );
}

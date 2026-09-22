'use client';

import { projects } from '@/data';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { BackgroundGradient } from './ui/background-gradient';
import MagicButton from './ui/MagicButton';
import Title from './ui/Title';

const RecentProjects = () => {
  return (
    <section className="scroll-mt-28 py-16 md:py-24" id="projects">
      <Title primary="A small selection of" secondary="recent projects" />
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((item) => (
          <BackgroundGradient
            key={item.id}
            containerClassName="h-full rounded-3xl"
            className="flex h-full flex-col rounded-[22px] bg-black-100 p-4 sm:p-5"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#13162D]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <h2 className="mt-5 text-lg font-semibold text-white sm:text-xl">{item.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#BEC1DD] sm:text-base">
                {item.des}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => {
                    const src = icon.startsWith('/') ? icon : `/${icon}`;
                    return (
                      <div
                        key={src}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black"
                        style={{ transform: `translateX(-${index * 8}px)` }}
                      >
                        <Image src={src} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                      </div>
                    );
                  })}
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm text-purple">
                  GitHub
                  <FaGithub />
                </span>
              </div>
            </a>
          </BackgroundGradient>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="https://github.com/jareerzeenam" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="More on GitHub"
            icon={<FaGithub />}
            position="right"
            className="md:mt-0 md:w-56"
          />
        </a>
      </div>
    </section>
  );
};

export default RecentProjects;

import { FaLocationArrow } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';

const words = ['reliable software.', 'clear interfaces.', 'shipped products.'];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[70vh] w-[40vw]" fill="purple" />
        <Spotlight className="left-1/2 top-24 h-[60vh] w-[40vw]" fill="blue" />
        <AuroraBackground className="h-full" />
        <div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-blue-100 sm:text-xs">
          Software Engineer · London, UK
        </p>

        <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Turning complex problems into
          <span className="relative mt-2 flex min-h-[1.3em] items-center justify-center sm:mt-3">
            <FlipWords words={words} className="text-purple" />
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white-200 sm:text-lg">
          I&apos;m Jareer, a full-stack engineer. I design and build APIs, websites, and
          applications, with equal care for how they look and how they hold up in
          production.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <a href="#projects" className="w-full sm:w-auto">
            <MagicButton
              title="View projects"
              icon={<FaLocationArrow />}
              position="right"
              className="md:mt-0 md:w-52"
            />
          </a>
          <a href="/resume" className="w-full sm:w-auto">
            <MagicButton
              title="Resume"
              icon={<ImProfile />}
              position="left"
              className="md:mt-0 md:w-52"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

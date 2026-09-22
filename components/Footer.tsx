import { navItems, socialMedia } from '@/data';
import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundBeams } from './ui/BackgroundBeam';
import MagicButton from './ui/MagicButton';

const email = 'jareerzeenam.28@gmail.com';

const Footer = () => {
  return (
    <footer className="scroll-mt-28 pb-8 pt-8 md:pb-12" id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <BackgroundBeams />
        <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-purple">
                Software Developer · Teapot Creative
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s build something <span className="text-purple">worth shipping</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white-200 sm:text-base">
                Based in London. If you want to talk about a project or just say hello, email is the best way to reach me.
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm text-white underline-offset-4 hover:underline sm:text-base"
              >
                {email}
              </a>
              <div className="mt-6">
                <a href={`mailto:${email}`}>
                  <MagicButton
                    title="Get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                    className="md:mt-0 md:w-52"
                  />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white-200">
                  Explore
                </p>
                <ul className="mt-4 space-y-1">
                  {navItems.map((item) => (
                    <li key={item.link}>
                      <a
                        href={item.link}
                        className="inline-flex min-h-11 items-center text-sm text-white hover:text-purple"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white-200">
                  Connect
                </p>
                <ul className="mt-4 space-y-1">
                  {socialMedia.map((profile) => (
                    <li key={profile.id}>
                      <a
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm text-white hover:text-purple"
                      >
                        <img src={profile.img} alt="" className="h-4 w-4 object-contain" />
                        {profile.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white-200 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>&copy; 2026 Jareer Zeenam</p>
            <a href="#top" className="inline-flex min-h-11 items-center hover:text-white sm:min-h-0">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

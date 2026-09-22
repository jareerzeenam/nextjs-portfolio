import { workExperience } from '@/data';
import Title from './ui/Title';
import { Timeline } from './ui/timeline';

const Experience = () => {
  const data = workExperience.map((card) => ({
    title: card.company,
    content: (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
        <div className="flex items-start gap-4">
          <img src={card.thumbnail} alt="" className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple">
                {card.area}
              </p>
              {card.current && (
                <span className="rounded-full border border-purple/40 bg-purple/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-purple">
                  Present
                </span>
              )}
            </div>
            <h3 className="mt-1 text-lg font-semibold text-white">{card.title}</h3>
            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-white-200 underline-offset-4 hover:text-white hover:underline"
              >
                {card.link.replace(/^https?:\/\//, '')}
              </a>
            )}
            <p className="mt-3 text-sm leading-relaxed text-[#C1C2D3] sm:text-base">{card.desc}</p>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section className="scroll-mt-28 py-16 md:py-24" id="experience">
      <Title primary="My" secondary="work experience" />
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white-200 sm:text-base">
        Product engineering across backend systems, APIs, and the interfaces in front of them.
      </p>
      <div className="mt-6">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;

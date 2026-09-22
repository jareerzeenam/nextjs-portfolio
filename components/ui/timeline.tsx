'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      setHeight(element.getBoundingClientRect().height);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 60%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn('relative w-full font-sans', className)} ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-5xl pb-4">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex justify-start pt-10 md:gap-10 md:pt-24"
          >
            <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:max-w-sm md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black-100">
                <div className="h-4 w-4 rounded-full border border-white/20 bg-neutral-800" />
              </div>
              <h3 className="hidden text-xl font-semibold text-neutral-500 md:block md:pl-20 md:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-16 pr-1 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-semibold text-neutral-400 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + 'px' }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#CBACF9] via-[#3b82f6] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

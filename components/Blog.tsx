'use client';

import { FaMedium } from 'react-icons/fa';
import { HoverEffect } from './ui/Card';
import { blogs } from '@/data';
import Title from './ui/Title';
import MagicButton from './ui/MagicButton';

const Blogs = () => {
  return (
    <section className="scroll-mt-28 py-16 md:py-24">
      <Title primary="Recent" secondary="Blogs" />
      <HoverEffect items={blogs} />
      <div className="mt-10 flex justify-center">
        <a href="https://medium.com/@jareerzeenam" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="More on Medium"
            icon={<FaMedium />}
            position="right"
            className="md:mt-0 md:w-56"
          />
        </a>
      </div>
    </section>
  );
};

export default Blogs;

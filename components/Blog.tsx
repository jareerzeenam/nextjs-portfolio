'use client';

import { HoverEffect } from './ui/Card';
import { blogs } from '@/data';
import Title from './ui/Title';

const Blogs = () => {
  return (
    <div className="max-w-1xl mx-auto px-8 pb-10">
      <Title primary="Recent" secondary="Blogs" />
      <HoverEffect items={blogs} />
    </div>
  );
};

export default Blogs;

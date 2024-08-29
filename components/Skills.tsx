import React from 'react';
import Title from './ui/Title';
import { skills } from '@/data';

const Skills = () => {
  return (
    <div>
      <Title primary="My" secondary="Skills" />

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-4 gap-y-4 my-10">
        {skills.map((skill, index) => (
          <div
            className=" gap-2 font-bold flex items-center justify-center border border-white/[.2] rounded bg-black p-4"
            key={index}
          >
            <img src={skill.img} alt={skill.title} />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';
import Title from './ui/Title';
import { skills } from '@/data';
import { Boxes } from './ui/BackgroundBoxes';
import { BackgroundBeams } from './ui/BackgroundBeam';

const Skills = () => {
  return (
    <div id="skills">
      <Title primary="My" secondary="Skills" />
      <div className="mt-4 h-200 relative w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-200 bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        {/* <BackgroundBeams /> */}
        <div className="z-20">
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-4 gap-y-4 my-10">
            {/* <Boxes /> */}
            {skills.map((skill, index) => (
              <div
                className="z-10 gap-2 font-bold flex items-center justify-center border border-white/[.2] rounded bg-black-100 p-4"
                key={index}
              >
                <img src={skill.img} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

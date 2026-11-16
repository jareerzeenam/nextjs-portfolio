import Contact from '@/components/Contact';
import Levels from '@/components/Levels';
import Overworld from '@/components/overworld/Overworld';
import Projects from '@/components/Projects';
import Recommendations from '@/components/Recommendations';
import SiteHeader from '@/components/SiteHeader';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';

export default function Home() {
  return (
    <>
      <SiteHeader />
      {/* Clip sideways overflow from scroll motion here; on <body> it leaks to the viewport. */}
      <div className="overflow-x-clip">
      <main id="main">
        <Overworld />
        <Levels />
        <Projects />
        <Recommendations />
        <Skills />
        <Writing />
      </main>
      <Contact />
      </div>
    </>
  );
}

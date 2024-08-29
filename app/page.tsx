import Approach from '@/components/Approach';
import Blogs from '@/components/Blog';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import ApproachTwo from '@/components/ApproachTwo';
import RecentProjects from '@/components/RecentProjects';
import Skills from '@/components/Skills';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        {/* <ApproachTwo /> */}
        <Approach />
        <Blogs />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}

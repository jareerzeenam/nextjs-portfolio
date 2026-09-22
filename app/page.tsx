import Approach from '@/components/Approach';
import Blogs from '@/components/Blog';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import SiteNavbar from '@/components/Navbar';
import RecentProjects from '@/components/RecentProjects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="bg-black-100 text-white">
      <SiteNavbar />
      <main className="overflow-x-clip">
        <Hero />
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Blogs />
          <Skills />
          <Footer />
        </div>
      </main>
    </div>
  );
}

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Career from '@/components/sections/Career';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import GithubActivity from '@/components/sections/GithubActivity';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Career />
      <Skills />
      <Projects />
      <GithubActivity />
      <Contact />
    </>
  );
}

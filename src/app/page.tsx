import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import GithubProjects from '@/components/sections/GithubProjects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Portfolio />
      <GithubProjects />
      <Contact />
    </div>
  );
}

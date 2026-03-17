import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Contact />
    </div>
  );
}

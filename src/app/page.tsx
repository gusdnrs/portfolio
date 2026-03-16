import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Work from '@/components/sections/Work';
import ConnectingLine from '@/components/common/ConnectingLine';

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <ConnectingLine />
      <Hero />
      <About />
      <Expertise />
      <Work />
    </div>
  );
}

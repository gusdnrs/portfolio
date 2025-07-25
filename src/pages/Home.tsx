import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import { projects } from '../data/Projects';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero 섹션 */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              <span className="text-yellow-300">현욱</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              병원 홈페이지 만드는 개발자
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button color="primary">
              프로젝트 보기
            </Button>
            <Button color="secondary">
              About Me
            </Button>
          </div>
        </div>
      </section>

      {/* About 섹션 (임시) */}
      <Section id="about" title="About Me">
          <p className='text-lg text-slate-600'>
            여기에 자기소개가 들어갈 예정입니다.
          </p>
      </Section>

      {/* Projects 섹션 (임시) */}
      <Section id="projects" title="Projects" backgroundColor='gray'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </Section>

      {/* Contact 섹션 (임시) */}
      <Section id="contact" title="Contact">
          <p className='text-lg text-slate-600'>
            연락처 정보가 들어갈 예정입니다.
          </p>
          <Button color="blue">연락하기</Button>
      </Section>
    </div>
  );
};

export default Home;

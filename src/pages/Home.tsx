import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero 섹션 */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              안녕하세요! 👋
              <br />
              <span className="text-blue-600 dark:text-blue-400">현욱</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              코딩을 사랑하는 개발자의 이야기
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              프로젝트 보기
            </button>
            <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition-colors">
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* About 섹션 (임시) */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            여기에 자기소개가 들어갈 예정입니다.
          </p>
        </div>
      </section>

      {/* Projects 섹션 (임시) */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 프로젝트 카드들이 들어갈 자리 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                프로젝트 1
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                프로젝트 설명이 들어갈 자리입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact 섹션 (임시) */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12">
            Contact
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            연락처 정보가 들어갈 예정입니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

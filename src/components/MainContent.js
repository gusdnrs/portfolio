import React from 'react';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import SectionPreview from './sections/SectionPreview';


function MainContent({ sidebarExpanded, activeSection, setActiveSection }) {
  const sections = [
    { id: 'about', title: '소개', icon: 'fas fa-user' },
    { id: 'skills', title: '기술 스택', icon: 'fas fa-code' },
    { id: 'projects', title: '프로젝트', icon: 'fas fa-laptop-code' },
    { id: 'experience', title: '경험', icon: 'fas fa-briefcase' }
  ];

  // 오른쪽 컬럼에 표시할 활성 섹션 컴포넌트
  const renderActiveSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      default:
        return <About />;
    }
  };

  return (
    <main className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <div className="content-column nav-column">
        <div className="section-nav">
          {sections.map(section => (
            <div 
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="nav-item-header">
                <i className={section.icon}></i>
                <h3>{section.title}</h3>
              </div>
              <div className="nav-item-preview">
                <SectionPreview id={section.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content-column detail-column">
        {renderActiveSection()}
      </div>
    </main>
  );
}


export default MainContent;

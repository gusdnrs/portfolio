import React from 'react';

function SectionPreview({ id }) {
  switch(id) {
    case 'about':
      return (
        <div className="preview-content">
          <p>프론트엔드 개발자로서 사용자 경험을 중시하는 웹 애플리케이션 개발에 열정을 가지고 있습니다.</p>
          <img src="/profile-thumbnail.jpg" alt="프로필 미리보기" className="preview-image" />
        </div>
      );
    case 'skills':
      return (
        <div className="preview-content">
          <div className="skills-preview">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">HTML</span>
          </div>
        </div>
      );
    case 'projects':
      return (
        <div className="preview-content">
          <div className="projects-preview">
            <div className="mini-project">
              <span className="project-dot"></span>
              <span>프로젝트 1</span>
            </div>
            <div className="mini-project">
              <span className="project-dot"></span>
              <span>프로젝트 2</span>
            </div>
          </div>
        </div>
      );
    case 'experience':
      return (
        <div className="preview-content">
          <div className="experience-preview">
            <p>2023 - 현재: 프론트엔드 개발자</p>
            <p>2022: 웹 개발 부트캠프 수료</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default SectionPreview;
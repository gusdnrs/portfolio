import React from 'react';

function About() {
  return (
    <section id="about" className="detail-section">
      <h2>소개 <span className="section-subtitle">About Me</span></h2>
      <div className="about-content">
        <div className="profile-image-container">
          <img src="/profile-image.jpg" alt="프로필 사진" className="profile-image" />
          <div className="profile-links">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="about-text">
          <p className="about-intro">안녕하세요, 프론트엔드 개발자 임현욱입니다.</p>
          <p>사용자 중심의 직관적인 웹 인터페이스를 만드는 것에 열정을 가지고 있습니다. 
            React, JavaScript, CSS를 활용한 반응형 웹 애플리케이션 개발에 특화되어 있으며, 
            최신 웹 기술 트렌드를 지속적으로 학습하고 적용하고 있습니다.</p>
          <p>문제 해결 능력과 협업 능력을 바탕으로 팀원들과 효율적으로 소통하며 
            프로젝트를 성공적으로 이끌어낸 경험이 있습니다.</p>
          <p>현재는 더 나은 사용자 경험을 제공하는 웹 애플리케이션 개발에 관심을 두고 있으며, 
            특히 성능 최적화와 접근성 향상에 중점을 두고 있습니다.</p>
        </div>
      </div>
      <div className="personal-info">
        <h3>인적 정보</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">출생년도</span>
            <span className="info-value">1995년</span>
          </div>
          <div className="info-item">
            <span className="info-label">거주지</span>
            <span className="info-value">서울특별시 강남구</span>
          </div>
          <div className="info-item">
            <span className="info-label">전공</span>
            <span className="info-value">컴퓨터공학</span>
          </div>
          <div className="info-item">
            <span className="info-label">직무</span>
            <span className="info-value">프론트엔드 개발자</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
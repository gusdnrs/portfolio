import React from 'react';

function Sidebar({ expanded, onMouseEnter, onMouseLeave }) {
  return (
    <aside 
      className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="sidebar-content">
        <div className="logo">
          <span className="logo-text">임현욱</span>
        </div>
        
        {expanded ? (
          <div className="expanded-content">
            <div className="contact-info">
              <h3>연락처</h3>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:example@email.com">example@email.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+8210000000000">010-0000-0000</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">github.com/username</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">linkedin.com/in/username</a>
              </div>
            </div>
            
            <div className="location-info">
              <h3>위치</h3>
              <p>서울특별시 강남구</p>
            </div>
            
            <div className="availability-info">
              <h3>업무 가능 시간</h3>
              <p>평일 09:00 - 18:00</p>
            </div>
            
            <div className="download-resume">
              <a href="/resume.pdf" download className="download-btn">
                <i className="fas fa-download"></i> 이력서 다운로드
              </a>
            </div>

            <div className="contact-form-mini">
              <h3>빠른 메시지</h3>
              <input type="email" placeholder="이메일" />
              <textarea placeholder="메시지를 입력하세요"></textarea>
              <button type="submit">보내기</button>
            </div>
            
            <div className="sidebar-footer">
              <p className="copyright">© 2025 임현욱. All rights reserved.</p>
            </div>
          </div>
        ) : (
          <div className="collapsed-content">
            <div className="icon-container">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="icon-container">
              <i className="fas fa-phone"></i>
            </div>
            <div className="icon-container">
              <i className="fab fa-github"></i>
            </div>
            <div className="expand-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

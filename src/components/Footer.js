import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 임현욱. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:example@email.com">이메일</a>
          <a href="https://open.kakao.com/username" target="_blank" rel="noopener noreferrer">카카오톡</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* 더 많은 소셜 아이콘 추가 */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
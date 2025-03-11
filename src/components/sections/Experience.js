import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>경험 (Experience)</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2023 - 현재</div>
          <div className="timeline-content">
            <h3>직무 경험</h3>
            <p>직무 내용과 성과에 대한 설명</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>교육 프로그램</h3>
            <p>참여한 부트캠프나 교육 프로그램에 대한 설명</p>
          </div>
        </div>
      </div>
      <div className="certifications">
        <h3>인증서 / 수상 내역</h3>
        <ul>
          <li>인증서 1</li>
          <li>수상 내역 1</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
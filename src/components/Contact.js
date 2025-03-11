import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>연락처 (Contact)</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">메시지</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">보내기</button>
      </form>
    </section>
  );
}

export default Contact;
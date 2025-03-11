import React from 'react';

function Skills() {
  const skillCategories = [
    {
      name: "프론트엔드",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      name: "백엔드",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "MongoDB", level: 60 }
      ]
    },
    {
      name: "개발 도구",
      skills: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "Jest", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="detail-section">
      <h2>기술 스택 <span className="section-subtitle">My Skills</span></h2>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.name}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="additional-skills">
        <h3>추가 기술 및 역량</h3>
        <div className="tags-container">
          <span className="tag">Responsive Design</span>
          <span className="tag">UI/UX</span>
          <span className="tag">RESTful API</span>
          <span className="tag">SASS/SCSS</span>
          <span className="tag">Figma</span>
          <span className="tag">Adobe XD</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
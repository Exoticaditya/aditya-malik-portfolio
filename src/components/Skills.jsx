import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Tailwind"]
    },
    {
      title: "Backend Core",
      icon: "⚡",
      skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "REST APIs"]
    },
    {
      title: "Database & Tools",
      icon: "💾",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Postman"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical <span className="highlight">Arsenal</span></h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

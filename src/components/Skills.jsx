import '../styles/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Web",
      skills: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Front-End",
      skills: ["React.js", "Next.js", "Advanced JS", "Decision-making Logic"]
    },
    {
      title: "Back-End",
      skills: ["Java EE", "Spring", "Spring Boot", "Hibernate", "RESTful APIs"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP (PIE)", "Arrays", "Strings", "Web Programming"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "Maven/Gradle", "SQL", "Agile (Scrum)", "Unit Testing (JUnit)"]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
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

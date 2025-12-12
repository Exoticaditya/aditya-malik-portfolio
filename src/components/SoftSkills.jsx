import '../styles/SoftSkills.css'

const SoftSkills = () => {
  const softSkills = [
    {
      title: "Team Collaboration",
      icon: "👥",
      description: "Collaborated effectively in agile environments, actively participating in peer code reviews to maintain code quality and share knowledge.",
      level: 5,
      highlights: ["Agile", "Code Reviews", "Peer Learning"]
    },
    {
      title: "Problem Solving",
      icon: "🧩",
      description: "Demonstrated strong problem-solving skills by debugging complex academic and project-level issues and optimizing algorithms for improved performance.",
      level: 5,
      highlights: ["Debugging", "Optimization", "Analysis"]
    },
    {
      title: "Adaptability",
      icon: "🚀",
      description: "Quickly adapted to new technologies by rapidly learning frameworks like Next.js and Spring Boot, applying them to real-world projects.",
      level: 4,
      highlights: ["Fast Learning", "New Tech", "Innovation"]
    }
  ]

  return (
    <section id="soft-skills" className="soft-skills-section">
      <div className="container">
        <h2 className="section-title">Soft Skills & Achievements</h2>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-card">
              <div className="skill-icon-wrapper">
                <span className="skill-icon">{skill.icon}</span>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-level">
                <span className="level-label">Proficiency:</span>
                <div className="level-indicator">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`level-dot ${i < skill.level ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="skill-highlights">
                {skill.highlights.map((highlight, highlightIndex) => (
                  <span key={highlightIndex} className="skill-tag">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills

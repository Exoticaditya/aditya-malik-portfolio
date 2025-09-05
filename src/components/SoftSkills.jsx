import '../styles/SoftSkills.css'

const SoftSkills = () => {
  const softSkills = [
    {
      title: "Team Collaboration",
      description: "Collaborated effectively in agile environments, actively participating in peer code reviews to maintain code quality and share knowledge."
    },
    {
      title: "Problem Solving",
      description: "Demonstrated strong problem-solving skills by debugging complex academic and project-level issues and optimizing algorithms for improved performance."
    },
    {
      title: "Adaptability",
      description: "Quickly adapted to new technologies by rapidly learning frameworks like Next.js and Spring Boot, applying them to real-world projects."
    }
  ]

  return (
    <section id="soft-skills" className="soft-skills-section">
      <div className="container">
        <h2 className="section-title">Soft Skills & Achievements</h2>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-card">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills

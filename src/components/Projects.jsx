import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Zpluse.com",
      subtitle: "Freelance Project | Full-Stack Business Management Website",
      description: [
        "Developed a full-stack business management website for a startup, including a public-facing site (www.zpluse.com) and an admin panel for business operations (www.zpluse.com/index).",
        "Utilized HTML5, CSS3, and JavaScript for the front-end, crafting a responsive user interface designed for both customer and administrative use.",
        "Engineered the back-end using Spring Boot to handle business logic, data processing, and user authentication, integrated with a PostgreSQL database.",
        "Optimized the admin panel's performance to ensure efficient data retrieval and management for business users."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Spring Boot", "PostgreSQL"]
    },
    {
      title: "Full-Stack Expense Tracker",
      subtitle: "React, Next.js, Spring Boot, Hibernate",
      description: [
        "Developed responsive UI with Next.js/React; implemented decision-making and state logic.",
        "Built REST API using Spring Boot and integrated Hibernate with database schemas.",
        "Applied OOP and MVC design patterns; boosted data-fetch performance.",
        "Implemented unit tests and designed modular, maintainable code structure."
      ],
      technologies: ["React.js", "Next.js", "Spring Boot", "Hibernate", "REST API"]
    },
    {
      title: "Online Forum Platform",
      subtitle: "Java EE: Servlets & JSP",
      description: [
        "Created login, posting, and commenting modules with session management.",
        "Employed DAO and MVC architectural patterns; processed inputs via arrays/strings.",
        "Ensured input validation, error handling, and code consistency."
      ],
      technologies: ["Java EE", "Servlets", "JSP", "DAO Pattern", "MVC"]
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <ul className="project-description">
                {project.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

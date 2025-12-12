import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Z-Management",
      subtitle: "Enterprise Management System",
      icon: "💼",
      description: [
        "Custom enterprise solution streamlining workflows.",
        "Backend with Spring Boot & PostgreSQL.",
        "Secure admin panel for business operations."
      ],
      technologies: ["Spring Boot", "PostgreSQL", "React", "JWT"],
      github: "https://github.com/Exoticaditya/Z-Management",
      live: "https://www.zpluse.com",
      color: "var(--primary-color)"
    },
    {
      title: "ShopSphere",
      subtitle: "Full-Stack E-Commerce",
      icon: "🌐",
      description: [
        "Responsive platform for browsing & checkout.",
        "Real-time data with Spring Boot backend.",
        "Secure payment processing integration."
      ],
      technologies: ["React.js", "Spring Boot", "MySQL", "Redux"],
      github: "https://github.com/Exoticaditya/Ecommerce-web-App",
      live: null,
      color: "var(--secondary-color)"
    },
    {
      title: "CommerceCore",
      subtitle: "Backend API System",
      icon: "⚙️",
      description: [
        "Robust RESTful APIs for order management.",
        "Role-based access control with JWT.",
        "Comprehensive API documentation."
      ],
      technologies: ["Spring Boot", "Hibernate", "PostgreSQL", "Swagger"],
      github: "https://github.com/Exoticaditya/aditya-ecommerce-backend",
      live: null,
      color: "var(--tertiary-color)"
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Verified <span className="highlight">Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--card-accent': project.color }}>
              <div className="card-inner">
                <div className="card-header">
                  <div className="project-icon-wrapper">
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <div className="project-title-group">
                    <h3 className="project-title">{project.title}</h3>
                    <h4 className="project-subtitle">{project.subtitle}</h4>
                  </div>
                </div>

                <div className="card-body">
                  <ul className="project-points">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-code">
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

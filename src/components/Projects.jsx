import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "💼 Z-Management",
      subtitle: "Freelance Enterprise Management System",
      icon: "💼",
      description: [
        "Delivered a custom enterprise management solution for a client firm, streamlining business workflows for their customers.",
        "Developed backend services with Spring Boot and PostgreSQL, integrated frontend operations, and implemented data reporting and client-specific processes.",
        "Created both public-facing website and comprehensive admin panel for business operations.",
        "Optimized performance for efficient data retrieval and management for business users."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/Exoticaditya/Z-Management",
      live: "https://www.zpluse.com"
    },
    {
      title: "🌐 ShopSphere",
      subtitle: "Full-Stack E-Commerce Platform",
      icon: "🌐",
      description: [
        "Developed a responsive, full-stack e-commerce platform using React, HTML, CSS, and JavaScript, enabling smooth product browsing, cart management, and checkout.",
        "Integrated with a Spring Boot backend to ensure efficient data handling and real-time updates.",
        "Implemented user authentication, product search, and secure payment processing.",
        "Optimized for performance and scalability with modern web technologies."
      ],
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Spring Boot"],
      github: "https://github.com/Exoticaditya/Ecommerce-web-App",
      live: null
    },
    {
      title: "⚙️ CommerceCore",
      subtitle: "Backend System for E-Commerce",
      icon: "⚙️",
      description: [
        "Engineered a robust backend with Spring Boot, Hibernate, and PostgreSQL, implementing RESTful APIs for authentication, catalog, and order management.",
        "Ensured security with JWT, role-based access, and optimized database operations for scalability.",
        "Developed comprehensive API documentation and testing suites.",
        "Implemented advanced features like inventory management and analytics."
      ],
      technologies: ["Spring Boot", "Hibernate", "PostgreSQL", "JWT", "REST API"],
      github: "https://github.com/Exoticaditya/aditya-ecommerce-backend",
      live: null
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                </div>
              </div>
              
              <div className="project-content">
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
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

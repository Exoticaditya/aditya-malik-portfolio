import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-malik-015520273/',
      icon: 'fab fa-linkedin-in',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Exoticaditya',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/_exoti.aditya_',
      icon: 'fab fa-instagram',
      color: '#e4405f'
    },
    {
      name: 'Email',
      url: 'mailto:adityamalik2206950100018@gmail.com',
      icon: 'fas fa-envelope',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const technologies = [
    'Java', 'Spring Boot', 'React.js', 'PostgreSQL', 
    'JavaScript', 'Hibernate', 'HTML5', 'CSS3'
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-grid"></div>
        <div className="footer-glow"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="logo-icon">
                  <span className="logo-text">AM</span>
                  <div className="logo-pulse"></div>
                </div>
              </div>
              <h3 className="brand-name">Aditya Malik</h3>
              <p className="brand-title">Java Full Stack Developer</p>
              <p className="brand-description">
                Crafting next-generation web experiences with cutting-edge technologies. 
                Passionate about clean code, scalable architecture, and innovative solutions.
              </p>
              <div className="brand-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2026</span>
                  <span className="stat-label">Graduation</span>
                </div>
              </div>
            </div>

            {/* Navigation & Contact */}
            <div className="footer-nav">
              <div className="nav-section">
                <h4 className="nav-title">Navigate</h4>
                <ul className="nav-list">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="nav-item">
                      <a 
                        href={`#${link.id}`}
                        onClick={(e) => handleSmoothScroll(e, link.id)}
                        className="nav-link"
                      >
                        <span className="nav-icon">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav-section">
                <h4 className="nav-title">Technologies</h4>
                <div className="tech-grid">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="nav-section">
                <h4 className="nav-title">Connect</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      style={{'--social-color': social.color}}
                    >
                      <div className="social-icon">
                        <i className={social.icon}></i>
                      </div>
                      <span className="social-name">{social.name}</span>
                      <div className="social-glow"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider">
              <div className="divider-line"></div>
              <div className="divider-glow"></div>
            </div>
            
            <div className="footer-copyright">
              <div className="copyright-content">
                <div className="copyright-text">
                  <span className="year">{new Date().getFullYear()}</span>
                  <span className="separator">•</span>
                  <span className="name">Aditya Malik</span>
                  <span className="separator">•</span>
                  <span className="rights">All rights reserved</span>
                </div>
                <div className="made-with">
                  <span>Engineered with</span>
                  <div className="heart-container">
                    <i className="fas fa-heart heart-icon"></i>
                  </div>
                  <span>using React.js & modern web technologies</span>
                </div>
              </div>
              
              <div className="footer-signature">
                <div className="signature-line"></div>
                <span className="signature-text">// End of transmission</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

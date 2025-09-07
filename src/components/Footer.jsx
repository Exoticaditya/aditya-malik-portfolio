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
      color: '#00ff88'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Exoticaditya',
      icon: 'fab fa-github',
      color: '#00ff88'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/_exoti.aditya_',
      icon: 'fab fa-instagram',
      color: '#00ff88'
    },
    {
      name: 'Email',
      url: 'mailto:adityamalik2206950100018@gmail.com',
      icon: 'fas fa-envelope',
      color: '#00ff88'
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
    <footer className="futuristic-footer">
      <div className="footer-container">
        {/* Main Horizontal Section */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="hologram-circle">
                <span className="brand-initials">AM</span>
                <div className="rotating-ring"></div>
              </div>
            </div>
            <h2 className="brand-name">Aditya Malik</h2>
            <p className="brand-tagline">Java Full Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <h3 className="nav-title">Quick Navigation</h3>
            <div className="nav-links">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="nav-link"
                >
                  <span className="link-text">{link.name}</span>
                  <div className="link-hover-effect"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="footer-tech">
            <h3 className="tech-title">Tech Stack</h3>
            <div className="tech-items">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3 className="social-title">Connect</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <i className={social.icon}></i>
                  <div className="social-glow"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="holographic-line"></div>
          <div className="footer-credits">
            <div className="copyright">
              <span className="year">{new Date().getFullYear()}</span>
              <span className="separator">•</span>
              <span className="name">Aditya Malik</span>
              <span className="separator">•</span>
              <span className="rights">All Rights Reserved</span>
            </div>
            <div className="made-with">
              <span>Crafted with</span>
              <div className="heart-pulse">
                <i className="fas fa-heart"></i>
              </div>
              <span>& Future Tech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Aditya Malik</h3>
              <p>Java Full Stack Developer</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#certifications">Certifications</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="https://linkedin.com/in/aditya-malik-java" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <i className="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/aditya-malik-java" target="_blank" rel="noopener noreferrer" className="social-link github">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a href="https://instagram.com/_exoti.aditya_" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              
              <div className="footer-section">
                <h4>Get In Touch</h4>
                <div className="contact-info">
                  <a href="mailto:your.email@example.com" className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>Email Me</span>
                  </a>
                  <a href="tel:+1234567890" className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>Call Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Aditya Malik. All rights reserved.</p>
              <p className="footer-tagline">Crafted with <i className="fas fa-heart"></i> and modern web technologies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [text, setText] = useState('');
  const fullText = "Java Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header" id="home">
      <div className="container header-container">
        <div className="hero-content">
          <div className="glitch-wrapper">
             <h1 className="name glitch" data-text="Aditya Malik">Aditya Malik</h1>
          </div>
          <h2 className="title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="location">
            <span className="icon">📍</span> Noida, India
          </p>
          
          <div className="contact-glass-bar">
            <a href="tel:+917417992490" className="glass-link">
              <span className="icon">📞</span>
              <span className="text">+91 7417992490</span>
            </a>
            <a href="mailto:adityamalik2206950100018@gmail.com" className="glass-link">
              <span className="icon">✉️</span>
              <span className="text">Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/aditya-malik-015520273/" target="_blank" rel="noopener noreferrer" className="glass-link">
              <span className="icon">💼</span>
              <span className="text">LinkedIn</span>
            </a>
            <a href="#resume" className="glass-link highlight-link">
              <span className="icon">📄</span>
              <span className="text">Resume</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
           <div className="glowing-orb"></div>
        </div>
      </div>
    </header>
  )
}

export default Header

import '../styles/Header.css'
import profilePhoto from '../assets/profile-photo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src={profilePhoto} 
                  alt="Aditya Malik" 
                />
              </div>
              <div className="profile-ring"></div>
            </div>
          </div>
          
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hi, I'm</span>
            </div>
            <h1 className="name">
              <span className="first-name">Aditya</span>
              <span className="last-name">Malik</span>
            </h1>
            <h2 className="title">
              <span className="creative">Creative</span>
              <span className="developer">Java Full Stack Developer</span>
            </h2>
            <p className="description">
              Passionate developer crafting scalable web solutions with modern technologies. 
              Specialized in Java, Spring Boot, and React.js with a keen eye for clean code and user experience.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">
                <span>Get In Touch</span>
                <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#projects" className="btn-secondary">
                <span>View Projects</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
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
      
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow"></div>
      </div>
    </header>
  )
}

export default Header

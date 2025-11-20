import '../styles/About.css'
import profilePhoto from '../assets/profile-photo.png'
// import resumeFile from '../assets/Aditya-malik-cse (2).pdf' // Add this file to assets folder

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="hero-section">
          {/* Profile Photo and Info Side */}
          <div className="profile-side">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <div className="hexagon-frame">
                  <div className="hexagon-inner">
                    <img src={profilePhoto} alt="Aditya Malik" className="profile-image" />
                  </div>
                  <div className="hexagon-border"></div>
                </div>
                <div className="glow-effect"></div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">PROJECTS</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item highlighted">
                <div className="stat-number">5+</div>
                <div className="stat-label">TECHNOLOGIES</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">2026</div>
                <div className="stat-label">GRADUATION</div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="content-side">
            <div className="hero-text">
              <div className="greeting">
                <span className="wave">👋</span>
                <span className="hi-text">Hi, I'm</span>
              </div>
              <h1 className="hero-name">
                Aditya
                <br />
                <span className="name-highlight">Malik</span>
              </h1>
              <div className="role-container">
                <span className="role-prefix">Creative</span>
                <h2 className="role-title">Java Full Stack Developer</h2>
              </div>
              <p className="hero-description">
                Passionate developer crafting scalable web solutions with modern technologies. 
                Specialized in Java, Spring Boot, and React.js with a keen eye for clean code and user experience.
              </p>
              
              {/* Contact Information */}
              <div className="contact-section">
                <div className="location-info">
                  <span className="location-icon">📍</span>
                  <span className="location-text">Noida, India</span>
                </div>
                <div className="contact-links">
                  <a href="tel:+917417992490" className="contact-btn">
                    <span className="contact-icon">📞</span>
                    <span>+91 7417992490</span>
                  </a>
                  <a href="mailto:adityamalik2206950100018@gmail.com" className="contact-btn">
                    <span className="contact-icon">✉️</span>
                    <span>Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/aditya-malik-015520273/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                    <span className="contact-icon">💼</span>
                    <span>LinkedIn</span>
                  </a>
                  {/* Resume download will be enabled once you add the PDF file to assets folder */}
                  {/* <a href={resumeFile} download="Aditya-Malik-Resume.pdf" className="resume-btn">
                    <span className="resume-icon">📄</span>
                    <span>Download Resume</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

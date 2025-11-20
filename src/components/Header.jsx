import '../styles/Header.css'
// import resume from '../assets/Aditya-malik-cse (2).pdf' // Add your resume PDF to assets folder

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="hero-content">
          <h1 className="name">Aditya Malik</h1>
          <h2 className="title">Java Full Stack Developer</h2>
          <p className="location">📍 Noida, India</p>
          <div className="contact-info">
            <a href="tel:+917417992490" className="contact-link">📞 +91 7417992490</a>
            <a href="mailto:adityamalik2206950100018@gmail.com" className="contact-link">✉️ Email</a>
            <a href="https://www.linkedin.com/in/aditya-malik-015520273/" target="_blank" rel="noopener noreferrer" className="contact-link">💼 LinkedIn</a>
            <a href={resume} download="Aditya-Malik-Resume.pdf" className="contact-link resume-link">📄 Download Resume</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

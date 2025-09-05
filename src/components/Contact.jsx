import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and development.
          </p>
          <div className="contact-links">
            <a href="mailto:adityamalik2206950100018@gmail.com" className="contact-button">
              Send Email
            </a>
            <a href="https://www.linkedin.com/in/aditya-malik-015520273/" target="_blank" rel="noopener noreferrer" className="contact-button">
              Connect on LinkedIn
            </a>
            <a href="tel:+917417992490" className="contact-button">
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

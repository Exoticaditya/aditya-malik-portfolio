import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>

        <div className="contact-wrapper">
          <div className="contact-card">
            <h3 className="contact-heading">Let's Build Something Amazing</h3>
            <p className="contact-text">
              I'm currently looking for new opportunities as a Java Full Stack Developer.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="contact-methods">
              <a href="mailto:adityamalik2206950100018@gmail.com" className="contact-item">
                <span className="icon">✉️</span>
                <div className="details">
                  <span className="label">Email</span>
                  <span className="value">adityamalik2206950100018@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917417992490" className="contact-item">
                <span className="icon">📞</span>
                <div className="details">
                  <span className="label">Phone</span>
                  <span className="value">+91 7417992490</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/aditya-malik-015520273/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="icon">💼</span>
                <div className="details">
                  <span className="label">LinkedIn</span>
                  <span className="value">Aditya Malik</span>
                </div>
              </a>
            </div>

            <div className="action-area">
              <a href="mailto:adityamalik2206950100018@gmail.com" className="btn-primary-glow">
                Say Hello 👋
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

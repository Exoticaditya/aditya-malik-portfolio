import '../styles/Contact.css'

const Contact = () => {
  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'Send Message',
      href: 'mailto:adityamalik2206950100018@gmail.com',
      color: '#00ff88'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect',
      href: 'https://www.linkedin.com/in/aditya-malik-015520273/',
      color: '#00ff88'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: 'Call Now',
      href: 'tel:+917417992490',
      color: '#00ff88'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'View Profile',
      href: 'https://github.com/Exoticaditya',
      color: '#00ff88'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="contact-grid"></div>
        <div className="contact-glow"></div>
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <div className="header-badge">
              <span className="badge-icon">📡</span>
              <span className="badge-text">Let's Connect</span>
            </div>
            <h2 className="contact-title">
              Ready to Build Something
              <span className="title-highlight"> Extraordinary?</span>
            </h2>
            <p className="contact-description">
              I'm always excited to discuss new opportunities, innovative projects, 
              and cutting-edge technologies. Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-card"
                style={{'--method-color': method.color}}
              >
                <div className="card-icon">
                  <span className="emoji-icon">{method.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-label">{method.label}</h3>
                  <p className="card-value">{method.value}</p>
                </div>
                <div className="card-arrow">
                  <span className="arrow-emoji">→</span>
                </div>
                <div className="card-hover-effect"></div>
              </a>
            ))}
          </div>

          <div className="contact-footer">
            <div className="availability-indicator">
              <div className="status-dot"></div>
              <span className="status-text">Available for new opportunities</span>
            </div>
            <div className="response-time">
              <span className="clock-emoji">🕒</span>
              <span>Typically responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

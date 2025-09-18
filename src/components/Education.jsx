import '../styles/Education.css'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Training</h2>
        <div className="education-content">
          <div className="education-item featured">
            <div className="education-header">
              <span className="education-icon">💼</span>
              <div className="education-info">
                <h3 className="degree">Java Full Stack Development Training</h3>
                <p className="institution">Ducat India, Noida</p>
                <p className="duration">Professional Training Program</p>
              </div>
            </div>
            <div className="training-details">
              <h4>Training Modules:</h4>
              <p>Core Java, Advanced Java, Spring Framework, Spring Boot, Hibernate, React.js, MySQL, REST APIs, Microservices, Project Development</p>
              <div className="skills-covered">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Hibernate</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Microservices</span>
              </div>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <span className="education-icon">🎓</span>
              <div className="education-info">
                <h3 className="degree">B. Tech Computer Science</h3>
                <p className="institution">Dr. A.P.J. Abdul Kalam Technical University, Lucknow, UP</p>
                <p className="graduation">Expected Graduation: May 2026</p>
              </div>
            </div>
            <div className="coursework">
              <h4>Relevant Coursework:</h4>
              <p>Java Fundamentals & EE, Advanced JavaScript, React.js, Next.js, Web Programming, Design Patterns, Spring, Hibernate</p>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <span className="education-icon">📚</span>
              <div className="education-info">
                <h3 className="degree">Intermediate</h3>
                <p className="institution">Saraswati Vidya Mandir Inter College, Shamli, UP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

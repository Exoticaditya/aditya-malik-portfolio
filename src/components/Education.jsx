import '../styles/Education.css'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <h3 className="degree">B. Tech Computer Science</h3>
            <p className="institution">Dr. A.P.J. Abdul Kalam Technical University, Lucknow, UP</p>
            <p className="graduation">Expected Graduation: May 2026</p>
            <div className="coursework">
              <h4>Relevant Coursework:</h4>
              <p>Java Fundamentals & EE, Advanced JavaScript, React.js, Next.js, Web Programming, Design Patterns, Spring, Hibernate</p>
            </div>
          </div>
          <div className="education-item">
            <h3 className="degree">Intermediate</h3>
            <p className="institution">Saraswati Vidya Mandir Inter College, Shamli, UP</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

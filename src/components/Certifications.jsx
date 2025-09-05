import '../styles/Certifications.css'
import javaDukeCert from '../assets/java-Duke-unniversity Cetificate.pdf'
import emailEtiquetteCert from '../assets/tcs ion -email ettiquette.pdf'
import presentationSkillsCert from '../assets/tcs ion -Presentation skills.pdf'
import communicationSkillsCert from '../assets/tcs ion communication skills.pdf'
import gdCert from '../assets/tcs ion -gd.pdf'

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming: Solving Problems with Software – Duke University",
      file: javaDukeCert
    },
    {
      title: "Databricks Lakehouse AI Fundamentals",
      isExternal: true,
      externalLink: "https://credentials.databricks.com/b15f22ef-ada0-4325-bfb8-04c8772c9d94"
    },
    {
      title: "Email Etiquette – TCS iON",
      file: emailEtiquetteCert
    },
    {
      title: "Presentation Skills - TCS iON",
      file: presentationSkillsCert
    },
    {
      title: "Communication Skills - TCS iON",
      file: communicationSkillsCert
    },
    {
      title: "Group Discussion Skills - TCS iON",
      file: gdCert
    }
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="cert-content">
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">
                    {cert.title.includes('Duke') ? 'Duke University' : 
                     cert.title.includes('Databricks') ? 'Databricks' : 'TCS iON'}
                  </p>
                </div>
                <div className="cert-actions">
                  {cert.isExternal ? (
                    <a 
                      href={cert.externalLink} 
                      className="download-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Certificate
                    </a>
                  ) : (
                    <a 
                      href={cert.file} 
                      download 
                      className="download-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-download"></i>
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

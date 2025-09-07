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
              <span className="cert-icon">🏆</span>
              <div className="cert-content">
                <p className="cert-title">{cert.title}</p>
                <a 
                  href={cert.file} 
                  download 
                  className="cert-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📥 Download Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

import { Link } from "react-router-dom"
import { CuboidIcon as Cube, Github, Twitter, DiscIcon as Discord } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import "../styles/footer.css"
import mojang from "../assets/logo-mojang.png"
import xbox from "../assets/logo-xbox.png"
import classification from "../assets/classification.svg"

interface FooterLink {
  text: string
  href: string
  isHashLink?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Enlaces",
      links: [
        { text: "Inicio", href: "/", isHashLink: false },
        { text: "Características", href: "#features", isHashLink: true },
        { text: "Galería", href: "#gallery", isHashLink: true },
        { text: "Comunidad", href: "#community", isHashLink: true },
        { text: "Descargar", href: "#download", isHashLink: true },
      ],
    },
    {
      title: "Recursos",
      links: [
        { text: "Wiki", href: "#", isHashLink: false },
        { text: "Tutoriales", href: "#", isHashLink: false },
        { text: "Base de Mods", href: "#", isHashLink: false },
        { text: "Soporte", href: "#", isHashLink: false },
        { text: "Preguntas Frecuentes", href: "#", isHashLink: false },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Política de Privacidad", href: "#", isHashLink: false },
        { text: "Términos de Servicio", href: "#", isHashLink: false },
        { text: "Política de Cookies", href: "#", isHashLink: false },
        { text: "EULA", href: "#", isHashLink: false },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Discord className="social-icon" />, name: "Discord", href: "#" },
    { icon: <Twitter className="social-icon" />, name: "Twitter", href: "#" },
    { icon: <Github className="social-icon" />, name: "GitHub", href: "#" },
  ]

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <div className="footer-branding">
            <div className="logo">
              <Cube className="logo-icon" />
              <span className="logo-text">Mineraft</span>
            </div>
            <p className="footer-description">
              Un juego de aventuras y construcción con bloques donde tu imaginación es el único límite.
            </p>
            <img src={xbox} alt="Mojang logo" style={{width: "200px"}}/>
            <img src={mojang} alt="Mojang logo" style={{width: "200px"}}/>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="footer-section">
              <h3 className="footer-heading">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isHashLink ? (
                      <HashLink to={link.href} className="footer-link">
                        {link.text}
                      </HashLink>
                    ) : (
                      <Link to={link.href} className="footer-link">
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        {/* Mueve la imagen fuera del grid y usa una clase para alinearla a la derecha */}
        <img
          src={classification}
          alt="classification"
          style={{ width: "150px" }}
          className="footer-classification-img"
        />
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} BlockCraft. Todos los derechos reservados.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <Link key={index} to={social.href} className="social-link">
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

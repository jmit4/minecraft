import { Link } from "react-router-dom"
import { CuboidIcon as Cube, Github, Twitter, DiscIcon as Discord } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import "../styles/footer.css"

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
      title: "Links",
      links: [
        { text: "Home", href: "/", isHashLink: false },
        { text: "Features", href: "#features", isHashLink: true },
        { text: "Gallery", href: "#gallery", isHashLink: true },
        { text: "Community", href: "#community", isHashLink: true },
        { text: "Download", href: "#download", isHashLink: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Wiki", href: "#", isHashLink: false },
        { text: "Tutorials", href: "#", isHashLink: false },
        { text: "Mod Database", href: "#", isHashLink: false },
        { text: "Support", href: "#", isHashLink: false },
        { text: "FAQ", href: "#", isHashLink: false },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#", isHashLink: false },
        { text: "Terms of Service", href: "#", isHashLink: false },
        { text: "Cookie Policy", href: "#", isHashLink: false },
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
              <span className="logo-text">BlockCraft</span>
            </div>
            <p className="footer-description">
              A block-building adventure game where your imagination is the only limit.
            </p>
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

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} BlockCraft. All rights reserved.</p>
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

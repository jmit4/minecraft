import { CuboidIcon as Cube } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import "../styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Cube className="logo-icon" />
          <span className="logo-text">BlockCraft</span>
        </div>
        <nav className="nav-menu">
          <HashLink to="#features" className="nav-link">
            Features
          </HashLink>
          <HashLink to="#gallery" className="nav-link">
            Gallery
          </HashLink>
          <HashLink to="#community" className="nav-link">
            Community
          </HashLink>
          <HashLink to="#download" className="nav-link">
            Download
          </HashLink>
        </nav>
        <div>
          <button className="button primary-button">Play Now</button>
        </div>
      </div>
    </header>
  )
}

export default Header

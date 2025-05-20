// import { CuboidIcon as Cube } from "lucide-react"
import { HashLink } from "react-router-hash-link";
import "../styles/header.css";
import minecraft from "../assets/minecraft.png";
import creeper from "../assets/creeper.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={creeper} alt="Creeper" style={{ width: "30px" }} />
          <img src={minecraft} alt="Minecraft logo" style={{ width: "20%" }} />
        </div>
        <nav className="nav-menu">
          <HashLink to="#features" className="nav-link">
            Características
          </HashLink>
          <HashLink to="#gallery" className="nav-link">
            Galería
          </HashLink>
          <HashLink to="#community" className="nav-link">
            Comunidad
          </HashLink>
          {/* <HashLink to="#download" className="nav-link">
            Descargar
          </HashLink> */}
        </nav>
        <HashLink to="#download" className="nav-link">
          <button className="button primary-button">Descargar</button>
        </HashLink>
      </div>
    </header>
  );
};

export default Header;

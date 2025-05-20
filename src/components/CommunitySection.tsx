import type React from "react"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"
import "../styles/community-section.css"

interface CommunityPlatform {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
  iconClass: string
}

const CommunitySection = () => {
  const platforms: CommunityPlatform[] = [
    {
      icon: <Discord className="platform-icon" />,
      title: "Discord",
      description: "Únete a nuestro servidor de Discord con más de 500,000 miembros para chatear, compartir construcciones y encontrar amigos.",
      buttonText: "Unirse a Discord",
      iconClass: "discord-icon",
    },
    {
      icon: <Twitter className="platform-icon" />,
      title: "Twitter",
      description: "Síguenos en Twitter para conocer las últimas noticias, actualizaciones y novedades de la comunidad.",
      buttonText: "Síguenos",
      iconClass: "twitter-icon",
    },
    {
      icon: <Github className="platform-icon" />,
      title: "Comunidad de Mods",
      description: "Explora nuestros repositorios en GitHub para contribuir a mods o crear tus propios complementos.",
      buttonText: "Explorar Mods",
      iconClass: "github-icon",
    },
  ]

  return (
    <section id="community" className="community-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Únete a Nuestra Comunidad</h2>
          <p className="section-description">Conéctate con millones de jugadores de BlockCraft alrededor del mundo.</p>
        </div>

        <div className="community-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="community-card">
              <div className={platform.iconClass}>{platform.icon}</div>
              <h3 className="community-title">{platform.title}</h3>
              <p className="community-description">{platform.description}</p>
              <button className="button outline-button">{platform.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunitySection

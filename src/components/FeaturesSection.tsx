import type React from "react"
import { CuboidIcon as Cube, Users, Sword, Map, Download, ChevronRight } from "lucide-react"
import "../styles/features-section.css"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconClass: string
}

const FeatureCard = ({ icon, title, description, iconClass }: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${iconClass}`}>{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <Cube className="icon" />,
      title: "Creación sin límites",
      description: "Construye todo lo que imagines con cientos de bloques y materiales únicos.",
      iconClass: "emerald-icon",
    },
    {
      icon: <Map className="icon" />,
      title: "Exploración inmensa",
      description: "Descubre mundos generados proceduralmente con biomas, cuevas y estructuras únicas.",
      iconClass: "amber-icon",
    },
    {
      icon: <Sword className="icon" />,
      title: "Aventuras épicas",
      description: "Enfréntate a monstruos, crea armas y embárcate en misiones a lo largo del mundo.",
      iconClass: "red-icon",
    },
    {
      icon: <Users className="icon" />,
      title: "Multijugador",
      description: "Juega con amigos para construir, explorar y sobrevivir juntos en mundos compartidos.",
      iconClass: "blue-icon",
    },
    {
      icon: <Download className="icon" />,
      title: "Mods y complementos",
      description: "Personaliza tu experiencia con modificaciones y complementos creados por la comunidad.",
      iconClass: "purple-icon",
    },
    {
      icon: <ChevronRight className="icon" />,
      title: "Actualizaciones regulares",
      description: "Disfruta de nuevo contenido, bloques y funciones con nuestras frecuentes actualizaciones.",
      iconClass: "orange-icon",
    },
  ]

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Características del juego</h2>
          <p className="section-description">
            Descubre qué hace de BlockCraft una experiencia única en el mundo de los juegos de construcción con bloques.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

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
      title: "Endless Creation",
      description: "Build anything you can imagine with hundreds of unique blocks and materials.",
      iconClass: "emerald-icon",
    },
    {
      icon: <Map className="icon" />,
      title: "Vast Exploration",
      description: "Discover procedurally generated worlds with unique biomes, caves, and structures.",
      iconClass: "amber-icon",
    },
    {
      icon: <Sword className="icon" />,
      title: "Epic Adventures",
      description: "Battle monsters, craft weapons, and embark on quests across the land.",
      iconClass: "red-icon",
    },
    {
      icon: <Users className="icon" />,
      title: "Multiplayer",
      description: "Play with friends to build, explore, and survive together in shared worlds.",
      iconClass: "blue-icon",
    },
    {
      icon: <Download className="icon" />,
      title: "Mods & Add-ons",
      description: "Customize your experience with community-created modifications and add-ons.",
      iconClass: "purple-icon",
    },
    {
      icon: <ChevronRight className="icon" />,
      title: "Regular Updates",
      description: "Enjoy new content, blocks, and features with our frequent game updates.",
      iconClass: "orange-icon",
    },
  ]

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Game Features</h2>
          <p className="section-description">
            Discover what makes BlockCraft a unique experience in the world of block-building games.
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

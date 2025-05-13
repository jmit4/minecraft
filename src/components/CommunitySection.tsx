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
      description: "Join our Discord server with over 500,000 members to chat, share builds, and find friends.",
      buttonText: "Join Discord",
      iconClass: "discord-icon",
    },
    {
      icon: <Twitter className="platform-icon" />,
      title: "Twitter",
      description: "Follow us on Twitter for the latest news, updates, and community highlights.",
      buttonText: "Follow Us",
      iconClass: "twitter-icon",
    },
    {
      icon: <Github className="platform-icon" />,
      title: "Mod Community",
      description: "Explore our GitHub repositories to contribute to mods or create your own add-ons.",
      buttonText: "Explore Mods",
      iconClass: "github-icon",
    },
  ]

  return (
    <section id="community" className="community-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-description">Connect with millions of BlockCraft players around the world.</p>
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

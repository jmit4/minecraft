import "../styles/hero-section.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-image-container">
        <img src="/placeholder.svg?height=600&width=1200" alt="BlockCraft world" className="hero-image" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Build. Explore. <span className="highlight">Survive.</span>
          </h1>
          <p className="hero-description">
            Embark on an epic adventure in a world made of blocks. Create anything you can imagine, explore vast
            landscapes, and survive the dangers of the night.
          </p>
          <div className="hero-buttons">
            <button className="button primary-button large-button">Get Started</button>
            <button className="button outline-button large-button">Watch Trailer</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

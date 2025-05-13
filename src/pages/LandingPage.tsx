import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import GallerySection from "../components/GallerySection"
import CommunitySection from "../components/CommunitySection"
import DownloadSection from "../components/DownloadSection"
import Footer from "../components/Footer"
import "../styles/landing-page.css"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main className="main-content">
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <CommunitySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage

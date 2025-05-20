import "../styles/gallery-section.css"
import gallery1 from "../assets/gallery/gallery1.jpg"
import gallery2 from "../assets/gallery/gallery2.jpg"
import gallery3 from "../assets/gallery/gallery3.jpg"
import gallery4 from "../assets/gallery/gallery4.jpg"
import gallery5 from "../assets/gallery/gallery5.png"
import gallery6 from "../assets/gallery/gallery6.jpg"

interface GalleryImage {
  src: string
  alt: string
}

const GallerySection = () => {
  const images: GalleryImage[] = [
    { src: gallery1, alt: "Captura de pantalla de BlockCraft 1" },
    { src: gallery2, alt: "Captura de pantalla de BlockCraft 2" },
    { src: gallery3, alt: "Captura de pantalla de BlockCraft 3" },
    { src: gallery4, alt: "Captura de pantalla de BlockCraft 4" },
    { src: gallery5, alt: "Captura de pantalla de BlockCraft 5" },
    { src: gallery6, alt: "Captura de pantalla de BlockCraft 6" },
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Galería del Juego</h2>
          <p className="section-description">
            Echa un vistazo al mundo de bloques de BlockCraft y a las aventuras que te esperan.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection

import "../styles/gallery-section.css"

interface GalleryImage {
  src: string
  alt: string
}

const GallerySection = () => {
  const images: GalleryImage[] = [
    { src: "/placeholder.svg?height=300&width=400", alt: "BlockCraft screenshot 1" },
    { src: "/placeholder.svg?height=300&width=400", alt: "BlockCraft screenshot 2" },
    { src: "/placeholder.svg?height=300&width=400", alt: "BlockCraft screenshot 3" },
    { src: "/placeholder.svg?height=300&width=400", alt: "BlockCraft screenshot 4" },
    { src: "/placeholder.svg?height=300&width=400", alt: "BlockCraft screenshot 5" },
    { src: "/placeholder.svg?height=300&width=400", alt: "BlockCraft screenshot 6" },
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Game Gallery</h2>
          <p className="section-description">
            Take a peek at the blocky world of BlockCraft and the adventures that await.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection

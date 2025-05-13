import "../styles/download-section.css"

interface DownloadOption {
  platform: string
  buttonText: string
}

const DownloadSection = () => {
  const downloadOptions: DownloadOption[] = [
    { platform: "Windows", buttonText: "Download for Windows" },
    { platform: "Mac", buttonText: "Download for Mac" },
    { platform: "Linux", buttonText: "Download for Linux" },
  ]

  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ready to Play?</h2>
          <p className="section-description">
            Download BlockCraft now and start your adventure in a world limited only by your imagination.
          </p>
        </div>

        <div className="download-buttons">
          {downloadOptions.map((option, index) => (
            <button key={index} className="button download-button">
              {option.buttonText}
            </button>
          ))}
        </div>

        <div className="download-info">
          <p>
            Available on PC, Mac, Linux, and mobile devices. <br />
            Minimum requirements: 4GB RAM, 2GHz processor, 2GB storage
          </p>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection

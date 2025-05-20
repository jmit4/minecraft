import React, { useEffect, useState } from "react";
import "../styles/hero-section.css";
import image1 from "../assets/image1.jpg";
import { HashLink } from "react-router-hash-link";

// Establece el END_DATE a 47 minutos y 32 segundos desde ahora
const END_DATE = new Date();
END_DATE.setMinutes(END_DATE.getMinutes() + 23);
END_DATE.setSeconds(END_DATE.getSeconds() + 32);

function getTimeLeft() {
  const now = new Date();
  const difference = END_DATE.getTime() - now.getTime();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-image-container">
        <img src={image1} alt="BlockCraft" className="hero-image" />
      </div>
      <div className="container hero-content">
        {/* Oferta llamativa */}
        <div className="hero-offer">
          <HashLink
            to="#download"
            className="offer-badge"
            style={{ textDecoration: "none" }}
          >
            ¡OFERTA ESPECIAL! Obtén Minecraft GRATIS por tiempo limitado
            <br />
            <span
              style={{
                fontSize: "0.95em",
                display: "block",
                marginTop: "0.2em",
              }}
            >
              Termina en: {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </span>
          </HashLink>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Construye. Explora. Sobrevive.</h1>
          <p className="hero-description">
            Embárcate en una aventura épica en un mundo hecho de bloques. Crea
            todo lo que puedas imaginar, explora vastos paisajes y sobrevive a
            los peligros de la noche.
          </p>
          <div className="hero-buttons">
            <HashLink to="#download" className="nav-link">
              <button className="button primary-button large-button">
                Comenzar
              </button>
            </HashLink>
            <a
              href="https://www.youtube.com/watch?v=Rla3FUlxJdE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button outline-button large-button">
                Ver Tráiler
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

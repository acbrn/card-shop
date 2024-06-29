// src/components/MainContent.js
import React, { useState, useEffect } from "react";
import MLB from "../images/MLB.png";
import NFL from "../images/NFL.png";
import Pokemon from "../images/Pokemon.png";
import MTG from "../images/MTG.png";
import Yugioh from "../images/yugioh.png";
import "./MainContent.css";

const images = [
  { src: MLB, alt: "MLB", link: "/mlb" },
  { src: NFL, alt: "NFL", link: "/nfl" },
  { src: Pokemon, alt: "Pokemon", link: "/pokemon" },
  { src: MTG, alt: "Magic The Gathering", link: "/mtg" },
  { src: Yugioh, alt: "Yu-Gi-Oh", link: "/yugioh" },
];

const MainContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <main className="main-content">
      <div className="main-content-div">Look at what we carry</div>
      <div className="card-logo">
        <a href={currentImage.link}>
          <img src={currentImage.src} alt={currentImage.alt} />
        </a>
      </div>
    </main>
  );
};

export default MainContent;

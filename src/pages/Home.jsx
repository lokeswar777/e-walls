import React from 'react';
import "../css/Home.css";
import Card from '../components/Card';

function Home() {
  const featuredWallpapers = [
    { imageSrc: "/walls/homebg.jpg", title: "Elegant Nature", description: "A tranquil blend of color and calm." },
    { imageSrc: "/walls/placeholder1.jpg", title: "Modern Vibes", description: "Minimalist geometry and cool tones." },
    { imageSrc: "/walls/placeholder2.jpg", title: "Retro Feel", description: "A blast from the design past." },
    { imageSrc: "/walls/placeholder3.jpg", title: "Digital Dreams", description: "High-res for high hopes." },
    { imageSrc: "/walls/placeholder4.jpg", title: "Oceanic Glow", description: "Ride the waves of aesthetic." },
    { imageSrc: "/walls/placeholder5.jpg", title: "Urban Jungle", description: "Where nature meets city lights." },
  ];

  return (
    <div className="home-container">
      <h1 className="pagename"><span>E</span>-Walls</h1>
      <p className="page-description">Explore a wide range of wallpapers to personalize your device.</p>
      
      <div className="cards-container">
        {featuredWallpapers.map((wallpaper, index) => (
          <Card
            key={index}
            imageSrc={wallpaper.imageSrc}
            title={wallpaper.title}
            description={wallpaper.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

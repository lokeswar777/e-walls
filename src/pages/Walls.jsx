// src/pages/Walls.jsx
import React, { useEffect, useState } from 'react';
import Wall from '../components/Wall';
import '../css/Walls.css';

const PEXELS_API_KEY = 'tnpIXA0aLTQ2gFTCSpir2NksY9W5gU6NNYULN2R7nPObF18JEooaAuAb'; // 🔐 Replace with your actual key

function Walls() {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=wallpaper&per_page=20', {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        setWallpapers(data.photos);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching wallpapers from Pexels:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading wallpapers...</p>;

  return (
    <div className="wall-container">
      {wallpapers.map((wall) => (
        <Wall
          key={wall.id}
          imageUrl={wall.src.medium}
          altText={wall.alt || 'Wallpaper'}
          photographer={wall.photographer}
        />
      ))}
    </div>
  );
}

export default Walls;

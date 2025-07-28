import React from 'react';
import Card from '../components/Card';
import '../css/Card.css';

function All() {
  const wallpapers = [
    "/walls/homebg.jpg",
    "/walls/placeholder1.jpg",
    "/walls/placeholder2.jpg",
    "/walls/placeholder3.jpg"
  ];

  return (
    <div className="card-container">
      {wallpapers.map((imageSrc, index) => (
        <Card 
          key={index}
          imageSrc={imageSrc}
          title={`Wallpaper ${index + 1}`}
          description="A beautifully rendered scene to elevate your digital canvas."
        />
      ))}
    </div>
  );
}

export default All;

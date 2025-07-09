
import React from 'react';
import '../css/Wall.css';

function Wall({ imageUrl, altText, photographer }) {
  return (
    <div className="wallpaper-card">
      <img src={imageUrl} alt={altText} />
      <p className="wallpaper-author">📷 {photographer}</p>
    </div>
  );
}

export default Wall;

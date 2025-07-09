// src/components/Card.jsx
import React from 'react';
import '../css/Card.css';

function Card({ imageUrl, altText, photographer, showButtons = false, onRemove, index }) {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...cart, { imageUrl, altText, photographer }]));
  };

  const handleAddToFavourites = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    localStorage.setItem("favourites", JSON.stringify([...favs, { imageUrl, altText, photographer }]));
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={altText || "Wallpaper"} className="card-image" />
      <div className="card-content">
        <p className="card-photographer">📷 {photographer || "Unknown"}</p>
        {showButtons && (
          <div className="card-buttons">
            <button onClick={handleAddToFavourites}>❤️ Favourite</button>
            <button onClick={handleAddToCart}>🛒 Cart</button>
            {onRemove && (
              <button className="remove-btn" onClick={() => onRemove(index)}>🗑️ Remove</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

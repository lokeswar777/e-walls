import React from 'react';
import Card from '../components/Card';
import '../css/Card.css';

function All() {
  const wallpapers = [/* array of wallpapers */];

  return (
    <div className="card-container">
      {wallpapers.map((item, index) => (
        <Card
          
        />
      ))}
    </div>
  );
}

export default All;

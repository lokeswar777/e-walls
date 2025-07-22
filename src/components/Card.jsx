import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        <img src={imageSrc} alt={title} style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '75%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  textContainer: {
    width: '25%',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
};

export default Card;

import React, { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '10px',
      backgroundColor: '#fff',
      marginBottom: '1.5rem'
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p>
        {readMore ? info : `${info.substring(0, 100)}... `}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <button
        onClick={() => onRemove(id)}
        style={{ background: 'red', color: 'white', padding: '0.5rem', border: 'none' }}
      >
        Not Interested
      </button>
    </article>
  );
};

export default TourCard;

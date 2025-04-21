import React, { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p>
        {showFull ? info : `${info.substring(0, 150)}...`}
        <button onClick={() => setShowFull(!showFull)}>
          {showFull ? ' Show Less' : ' Read More'}
        </button>
      </p>
      <button onClick={() => onRemove(id)}>Not Interested</button>
    </article>
  );
};

export default TourCard;

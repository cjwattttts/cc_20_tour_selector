import React, { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  // toggle state to show full tour description
  const [showFull, setShowFull] = useState(false);

  return (
    <article>
      {/* tour image */}
      <img src={image} alt={name} />

      {/* tour name and price */}
      <h2>{name}</h2>
      <h4>${price}</h4>

      {/* tour description with read more toggle */}
      <p>
        {showFull ? info : `${info.substring(0, 150)}...`}
        <button className="read-more" onClick={() => setShowFull(!showFull)}>
          {showFull ? ' show less' : ' read more'}
        </button>
      </p>

      {/* button to remove the tour */}
      <button className="not-interested" onClick={() => onRemove(id)}>not interested</button>
    </article>
  );
};

export default TourCard;

import React, { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p>
        {readMore ? info : `${info.substring(0, 100)}... `}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <button onClick={() => onRemove(id)}>Not Interested</button>
    </article>
  );
};

export default TourCard;

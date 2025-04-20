import React from 'react';

const DestinationSelector = ({ tours, selected, setSelected }) => {
  // If no tours yet, don't render anything
  if (!tours || tours.length === 0) return null;

  const unique = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {unique.map((name, idx) => (
          <option key={idx} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;

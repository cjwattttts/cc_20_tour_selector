import React from 'react';

const DestinationSelector = ({ tours, selected, setSelected }) => {
  if (!tours || tours.length === 0) return null;

  const unique = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '0.5rem' }}>Choose a tour:</label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
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

import React from 'react';

const DestinationSelector = ({ tours, selected, setSelected }) => {
  if (!tours || tours.length === 0) return null;

  const unique = ['All', ...new Set(
    tours.map((tour) => {
      const name = tour.name.toLowerCase();
      if (name.includes('paris')) return 'Paris';
      if (name.includes('ireland')) return 'Ireland';
      if (name.includes('europe')) return 'Europe';
      return tour.name.split(' ')[0];
    })
  )];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '0.5rem' }}>Choose a destination:</label>
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

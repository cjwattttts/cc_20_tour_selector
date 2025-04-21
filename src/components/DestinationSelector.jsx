import React from 'react';

const DestinationSelector = ({ tours, selected, setSelected }) => {
  // if no tours, don't show anything
  if (!tours || tours.length === 0) return null;

  // create a list of unique tour names, plus 'all'
  const unique = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* label for the dropdown */}
      <label style={{ marginRight: '0.5rem' }}>choose a tour:</label>

      {/* dropdown menu to select a tour */}
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

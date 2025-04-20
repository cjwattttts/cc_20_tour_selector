import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading tours.</h2>;

  if (tours.length === 0) {
    return (
      <section>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </section>
    );
  }

  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;

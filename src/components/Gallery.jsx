import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
  // show loading message while data is loading
  if (loading) return <h2>loading...</h2>;

  // show error if fetch fails
  if (error) return <h2>error loading tours.</h2>;

  // if no tours left, show refresh button
  if (tours.length === 0) {
    return (
      <section>
        <h2>no tours left. refresh to reload.</h2>
        <button onClick={onRefresh}>refresh</button>
      </section>
    );
  }

  // show each tour card
  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;

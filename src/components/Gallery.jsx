import React, { useState, useEffect } from 'react';
import TourCard from './TourCard.jsx';

const url = 'https://course-api.com/react-tours-project';

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (tours.length === 0) {
    return (
      <section>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </section>
    );
  }

  return (
    <section>
      <h1>Available Tours</h1>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={removeTour} />
      ))}
    </section>
  );
};

export default Gallery;

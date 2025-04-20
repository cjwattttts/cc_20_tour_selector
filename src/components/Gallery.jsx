import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('/api/react-tours-project'); // using proxy
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setTours(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(true);
    }
    setLoading(false);
  };

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading tours.</h2>;
  if (tours.length === 0) {
    return (
      <section>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={fetchTours}>Refresh</button>
      </section>
    );
  }

  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={removeTour} />
      ))}
    </section>
  );
};

export default Gallery;

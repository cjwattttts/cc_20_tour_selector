import React, { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import DestinationSelector from './components/DestinationSelector';

const url = '/api/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState('All');

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setTours(data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    if (
      selected !== 'All' &&
      !updatedTours.some((tour) => tour.name.toLowerCase() === selected.toLowerCase())
    ) {
      setSelected('All');
    }
  };

  const filteredTours =
    selected === 'All'
      ? tours
      : tours.filter(
          (tour) => tour.name.toLowerCase() === selected.toLowerCase()
        );

  console.log('Selected:', selected);
  console.log('Tour names:', tours.map(t => t.name));
  console.log('Filtered:', filteredTours.map(t => t.name));

  return (
    <main>
      <DestinationSelector
        tours={tours}
        selected={selected}
        setSelected={setSelected}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={removeTour}
        onRefresh={fetchTours}
      />
    </main>
  );
};

export default App;

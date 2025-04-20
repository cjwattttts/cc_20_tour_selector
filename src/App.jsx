import React, { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import DestinationSelector from './components/DestinationSelector';

const url = 'https://course-api.com/react-tours-project';

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
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  const filteredTours =
    selected === 'All'
      ? tours
      : tours.filter((tour) => tour.name === selected);

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

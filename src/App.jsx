import React, { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import DestinationSelector from './components/DestinationSelector';

const url = '/api/react-tours-project';

const App = () => {
  // state for tours
  const [tours, setTours] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // error state if fetch fails
  const [error, setError] = useState(false);

  // this tracks which tour is selected
  const [selected, setSelected] = useState('All');

  // this fetches the data from the api
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

  // runs when the app first loads
  useEffect(() => {
    fetchTours();
  }, []);

  // removes the tour when button is clicked
  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);

    // reset filter if selected tour was removed
    if (
      selected !== 'All' &&
      !updatedTours.some((tour) => tour.name.includes(selected))
    ) {
      setSelected('All');
    }
  };

  // this filters the tours based on dropdown
  const filteredTours =
    selected === 'All'
      ? tours
      : tours.filter((tour) => tour.name.includes(selected));

  return (
    <main>
      <h1>tour app</h1> {/* title at the top of the page */}
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

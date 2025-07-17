import { useState } from 'react';
import SearchForm from './SearchForm';
import FlightList from './FlightList';

function App() {
  const [flights, setFlights] = useState([]);

  return (
    <div>
      <h1>Recherche de Vols</h1>
      <SearchForm onResults={setFlights} />
      <FlightList flights={flights} />
    </div>
  );
}

export default App;
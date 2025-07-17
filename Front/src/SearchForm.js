import { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onResults }) => {
  const [from, setFrom] = useState('ALG');
  const [to, setTo] = useState('PAR');
  const [date, setDate] = useState('2025-07-17');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:3001/api/search', {
        params: { from, to, date },
      });
      onResults(res.data.data);
    } catch (err) {
      alert('Erreur lors de la recherche.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={from} onChange={e => setFrom(e.target.value)} placeholder="Ville de départ" />
      <input value={to} onChange={e => setTo(e.target.value)} placeholder="Ville d'arrivée" />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchForm;
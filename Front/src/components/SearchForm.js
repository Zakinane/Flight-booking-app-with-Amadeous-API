import { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

const SearchForm = ({ onResults }) => {
  const [from, setFrom] = useState("France");
  const [to, setTo] = useState("Spain");
  const [date, setDate] = useState("2025-08-17");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //AMADEUS
      // const res = await axios.get('http://localhost:3001/api/search', {
      //   params: { from, to, date },
      // });
      // onResults(res.data.data);

      const response = await fetch("/flights.json");
      const allFlights = await response.json();

      // Filter
      const filteredFlights = allFlights.filter((flight) => {
        return (
          (!from ||
            flight.origin_country.toLowerCase() === from.toLowerCase()) &&
          (!to ||
            flight.destination_country.toLowerCase() === to.toLowerCase()) &&
          (!date || flight.departure_date === date)
        );
      });
      onResults(filteredFlights);
    } catch (err) {
      alert("Erreur lors de la recherche.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="'/Pays'/ de départ"
      />
      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="'/Pays'/ d'arrivée"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchForm;

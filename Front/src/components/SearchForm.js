import { useState } from "react";
import axios from "axios";
import "./SearchForm.css";


import CountrySelect from "./MaterialUI/CountrySelect";
import DatePicker from "./MaterialUI/DatePicker";
import Button from "@mui/material/Button";


import flights from "../data/flights.json";

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

      const allFlights = flights;
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
    <div className="SearchForm">
      <h1>Recherche de Vols</h1>
      <form onSubmit={handleSubmit}>
        <CountrySelect value={from} onChange={setFrom} label="From" />
        <CountrySelect value={to} onChange={setTo} label="To" />
        <DatePicker date={date} setDate={setDate} />

        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchForm;

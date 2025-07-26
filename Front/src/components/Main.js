import { useState } from "react";
import "./Main.css";
import SearchForm from "./SearchForm";
import FlightList from "./FlightList";

function Main() {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState(false);

  return (
    <div className="Main">
      <SearchForm onResults={setFlights} onSearch={setSearch} />
      <FlightList flights={flights} search={search} />
    </div>
  );
}
export default Main;

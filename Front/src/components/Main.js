import { useState } from "react";
import "./Main.css";
import SearchForm from "./SearchForm";
import FlightList from "./FlightList";

function Main() {
  const [flights, setFlights] = useState([]);

  return (
    <div className="Main">
      <SearchForm onResults={setFlights} />
      <FlightList flights={flights} />
    </div>
  );
}
export default Main;

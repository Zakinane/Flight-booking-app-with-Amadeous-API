import "./FlightList.css";

function FlightList({ flights }) {
  console.log(flights); 
  return (
    <div className="flight">
      {flights.map((f, index) => (
        <div key={index}>
          {/* OLD WITH AMADEUS */}
          {/* <h3>
            {f.itineraries[0].segments[0].departure.iataCode} →{" "}
            {f.itineraries[0].segments[0].arrival.iataCode}
            <p>Départ : {f.itineraries[0].segments[0].departure.at}</p>
            <p>
            Prix : {f.price.total} {f.price.currency}
            </p>
            </h3> */}

          {/* MOCK DATA */}
          <h3>
            {f.from} → {f.to}
            <p>Départ : {f.time}</p>
            <p>Prix : {f.price}$</p>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default FlightList;

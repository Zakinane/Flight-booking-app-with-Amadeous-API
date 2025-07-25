import "./FlightList.css";

function FlightList({ flights }) {
  // console.log(flights); 
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
            {f.origin_country} → {f.destination_country}
          </h3>
          <p><strong>Compagnie :</strong> {f.airline}</p>
          <p><strong>Départ :</strong> {f.departure_date} à {f.departure_time}</p>
          <p><strong>Arrivée :</strong> {f.landing_date} à {f.landing_time}</p>
          <p><strong>Durée :</strong> {f.duration}</p>
          <p><strong>Prix :</strong> {f.price} $</p>
          <p><strong>Places disponibles :</strong> {f.available_seats}</p>
        </div>
      ))}
    </div>
  );
}

export default FlightList;

function FlightList({ flights }) {
    console.log(flights);
  return (
    <div className="flight">
      {flights.map((f, index) => (
        <div key={index}>
          <h3>{f.itineraries[0].segments[0].departure.iataCode} → {f.itineraries[0].segments[0].arrival.iataCode}</h3>
          <p>Départ : {f.itineraries[0].segments[0].departure.at}</p>
          <p>Prix : {f.price.total} {f.price.currency}</p>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
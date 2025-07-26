import "./Flight.css";
import { Link } from "react-router-dom";
import flights from "../data/flights.json";
import { useParams } from "react-router-dom";

function Flight({ addToHistory }) {
  const { id } = useParams();
  const f = flights.find((flight) => String(flight.id) === id);

  const handleConfirm = () => {
    addToHistory(f);
  };

  return (
    <div className="flight">
      <div className="card">
        <h3>
          {f.origin_country} → {f.destination_country}
        </h3>
        <p>
          <strong>Compagnie :</strong> {f.airline}
        </p>
        <p>
          <strong>Départ :</strong> {f.departure_date} à {f.departure_time}
        </p>
        <p>
          <strong>Arrivée :</strong> {f.landing_date} à {f.landing_time}
        </p>
        <p>
          <strong>Durée :</strong> {f.duration}
        </p>

        <p>
          <strong>Places disponibles :</strong> {f.available_seats}
        </p>

        <section className="buy">
          <p>
            <strong>Prix :</strong> {f.price} $
          </p>
          <Link to={`/confirmation`}>
            <button onClick={handleConfirm}>Confirmer</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Flight;

import "./Account.css";

function Account({ history }) {
  return (
    <div className="account-page">
      <div className="info-container">
        <h2>Historique de réservations</h2>
        {history.length === 0 ? (
          <p>Aucune réservation pour le moment.</p>
        ) : (
          <ul>
            {history.map((f, index) => (
              <li key={index}>
                {f.origin_country} → {f.destination_country} ({f.departure_date}
                )
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Account;

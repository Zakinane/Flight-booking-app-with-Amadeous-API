import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div className="message">
        <h1>Error 404 - Wrong plane !</h1>
        <img src={require("../img/kevin.png")} alt="KEVIN!" />
      </div>
    </div>
  );
}

export default Error;

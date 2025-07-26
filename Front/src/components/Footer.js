import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Data partially from the{" "}
        <a
          href="https://developers.amadeus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amadeus
        </a>{" "}
        API
      </p>
      <p>
        Project available on{" "}
        <a
          href="https://github.com/Zakinane/Flight-booking-app-with-Amadeus-API"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        Made by{" "}
        <a
          href="https://github.com/Zakinane"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zak
        </a>{" "}
        &{" "}
        <a
          href="https://github.com/Marinoune"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mari
        </a>
      </p>
    </footer>
  );
}

export default Footer;

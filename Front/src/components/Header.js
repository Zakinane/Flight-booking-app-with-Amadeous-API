import "./Header.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header>
      <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
        <div className="logo">
          <img src={require("../img/logo.png")} alt="Logo" />
          <h2>Flight Finder</h2>
        </div>
      </Link>

      <Link  to={"/Account"} style={{ color: "black", textDecoration: "none" }}>
        <div className="account">
          <AccountCircleIcon style={{ scale: 2 }} />
          Account
        </div>
      </Link>
    </header>
  );
}

export default Header;

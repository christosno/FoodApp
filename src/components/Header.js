import { Link } from "react-router-dom";
import "./Header.css";

const Title = () => {
  return (
    <h1 id="title" key="h2">
      Food App
    </h1>
  );
};

const Header = ({ isLogedIn, setIsLogedin }) => {
  return (
    <div className="header-container">
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul className="nav-links">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Cart</Link>
            </li>
            {isLogedIn ? (
              <li
                className="nav-item"
                onClick={() => {
                  console.log("logout");
                  setIsLogedin(false);
                }}
              >
                <Link>Logout</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

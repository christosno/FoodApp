import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <h1 id="title" key="h2">
      Food App
    </h1>
  );
};

const Header = ({ isLogedIn, setIsLogedin }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="header">
        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Title />
        <div className="hamburger-two" onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-items ${navOpen ? "navOpen" : ""}`}>
          <ul className={`nav-links ${navOpen ? "navOpen" : ""}`}>
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

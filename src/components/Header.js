import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 id="title" key="h2">
      Food App
    </h1>
  );
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const loginHandler = () => {
    setIsLogedIn(isLogedIn ? false : true);
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <li onClick={loginHandler}>{isLogedIn ? "Logout" : "Login"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

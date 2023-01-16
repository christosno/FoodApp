import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <li onClick={loginHandler}>{isLogedIn ? "Logout" : "Login"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

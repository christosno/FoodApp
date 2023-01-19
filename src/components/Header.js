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
            {isLogedIn ? (
              <li
                onClick={() => {
                  console.log("logout");
                  setIsLogedin(false);
                }}
              >
                Logout
              </li>
            ) : (
              <Link to={"/login"}>
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

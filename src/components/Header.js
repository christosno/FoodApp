import { Link } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({ isLogedIn, setIsLogedin }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-sky-400 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link to={"/"}>
            <h1 id="title" key="h2">
              Food App
            </h1>
          </Link>
          <div
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-sky-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transistion-all duration-500 ease-in ${
            navIsOpen ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-200 duration-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-200 duration-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-200 duration-500">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-200 duration-500">
            <Link>Cart</Link>
          </li>
          {isLogedIn ? (
            <Link to={"/"}>
              <Button margin="ml-8 mr-2">Logout</Button>
            </Link>
          ) : (
            // <li
            //   className="md:ml-8 text-xl hover:text-gray-400 duration-500"
            //   onClick={() => {
            //     console.log("logout");
            //     setIsLogedin(false);
            //   }}
            // >
            //   <Link>Logout</Link>
            // </li>
            <Link to={"/login"}>
              <Button
                bgColor="bg-sky-700"
                bgHoverColor="bg-sky-600"
                margin="ml-8"
              >
                Login
              </Button>
            </Link>
            // <li className="md:ml-8 text-xl hover:text-gray-400 duration-500">
            //   <Link to={"/login"}>Login</Link>
            // </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

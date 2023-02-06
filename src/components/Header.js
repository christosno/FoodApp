import { Link } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { UserLoginContext } from "../store/user-auth";
import { CartContexrt } from "../store/cart";
import HeaderCardButton from "./HeaderCardButton";

const Header = ({ onOpenModal }) => {
  console.log("Header Component");
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { userName, isLogedIn, setIsLogedIn } = useContext(UserLoginContext);
  const { order } = useContext(CartContexrt);

  const numOfItems = order.length;

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-red-900 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link to={"/"}>
            <h1 className="text-white" id="title" key="h2">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transistion-all duration-500 ease-in ${
            navIsOpen ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          <li className="text-white md:ml-8 text-xl md:my-0 my-7 font-[Poppins]  hover:text-gray-400 duration-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-white md:ml-8 text-xl md:my-0 my-7 font-[Poppins]  hover:text-gray-400 duration-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="text-white md:ml-8 text-xl md:my-0 my-7 font-[Poppins]  hover:text-gray-400 duration-500">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-200 duration-500">
            <Link>
              <HeaderCardButton onOpenModal={onOpenModal} />
            </Link>
          </li>

          {isLogedIn ? (
            <>
              <h5 className="md:ml-8 text-xs md:my-0 my-7 text-gray-800">
                {`${userName.firstName} ${userName.lastName}`}
              </h5>
              <Link to={"/"}>
                <Button
                  bgColor="bg-slate-900"
                  bgHoverColor="bg-slate-800"
                  margin="ml-8 mr-2"
                  clickHandler={() => {
                    setIsLogedIn(false);
                  }}
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <Link to={"/login"}>
              <Button
                bgColor="bg-slate-900"
                bgHoverColor="bg-slate-800"
                margin="ml-8"
              >
                Login
              </Button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

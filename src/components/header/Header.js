import { Link, Form, useRouteLoaderData } from "react-router-dom";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContexrt } from "../../store/cart";
import HeaderCardButton from "./HeaderCardButton";

const Header = ({ onOpenModal }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { items, totalAmount } = useContext(CartContexrt);

  const user = useRouteLoaderData("root");
  const userName = user ? user.displayName : null;
  console.log(userName);

  const numItems = items.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-red-900 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link to={"/"}>
            <h1 className="text-white" id="title" key="h2">
              Food App
            </h1>
          </Link>
          <div
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-red-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transistion-all duration-500 ease-in ${
            navIsOpen ? "top-20 opacity-100" : "top-[-490px]"
          } lg:opacity-100`}
        >
          <li className="text-white lg:ml-8 text-xl lg:my-0 my-7 font-[Poppins]  hover:text-gray-400 duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white lg:ml-8 text-xl lg:my-0 my-7 font-[Poppins]  hover:text-gray-400 duration-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-white lg:ml-8 text-xl lg:my-0 my-7 font-[Poppins]  hover:text-gray-400 duration-500">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="lg:ml-8 text-xl lg:my-0 my-7 text-gray-800 hover:text-gray-200 duration-500">
            <Link>
              <HeaderCardButton numItems={numItems} onOpenModal={onOpenModal} />
            </Link>
          </li>
          {user && (
            <li className="text-white lg:ml-8 lg:my-0 my-7 font-[Poppins]">
              Hi {userName}!!
            </li>
          )}
          {user ? (
            <>
              <li>
                <Form action="/logout" method="post">
                  <Button
                    bgColor="bg-slate-900"
                    bgHoverColor="bg-slate-800"
                    margin="ml-8 mr-2"
                  >
                    Logout
                  </Button>
                </Form>
              </li>
            </>
          ) : (
            <Link to="/auth?mode=login">
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

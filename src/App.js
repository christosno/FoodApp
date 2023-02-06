import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ErrorComp from "./components/ErrorComp";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import UserAthProvider from "./store/user-auth";
import CartContextProvider from "./store/cart";
import CartModal from "./components/CartModal";

const AppLayoit = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const openCardModalHandler = () => {
    setIsModalOn(true);
  };

  const closeCardModalHandler = () => {
    setIsModalOn(false);
  };

  return (
    <>
      {isModalOn && <CartModal onCloseModal={closeCardModalHandler} />}
      <Header onOpenModal={openCardModalHandler} />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoit />,
    errorElement: <ErrorComp message={"Sorry we could not load the page"} />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <UserAthProvider>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </UserAthProvider>
);

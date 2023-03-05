import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./pages/Body";
import Footer from "./components/footer/Footer";
import ErrorComp from "./components/errors/ErrorComp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./pages/RestaurantMenu";
import Authentication, { action as loginAction } from "./pages/Authentication";
import UserAuthProvider from "./store/user-auth";
import CartContextProvider from "./store/cart";
import CartModal from "./components/cart/CartModal";
import SearchProvider from "./store/search-ctx";
import { action as logoutAction } from "./pages/Logout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { UserLoginContext } from "./store/user-auth";

const AppLayout = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const authCtx = useContext(UserLoginContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      authCtx.setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("APPLAYOUT");
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
    element: <AppLayout />,
    errorElement: <ErrorComp message={"Sorry we could not load the page"} />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "auth",
        element: <Authentication />,
        action: loginAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <SearchProvider>
    <UserAuthProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserAuthProvider>
  </SearchProvider>
);

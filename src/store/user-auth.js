import React, { useState, createContext } from "react";

export const UserLoginContext = createContext({
  firstName: "",
  lastName: "",
  isLoggedIn: false,
  loginHandler: () => {},
});

const UserAthProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  return (
    <UserLoginContext.Provider
      value={{ userName, setUserName, isLogedIn, setIsLogedIn }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserAthProvider;

import React, { useState, createContext } from "react";

export const UserLoginContext = createContext({
  isLoggedIn: false,
  loginHandler: () => {},
});

const UserAthProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <UserLoginContext.Provider value={{ isLogedIn, setIsLogedIn }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserAthProvider;

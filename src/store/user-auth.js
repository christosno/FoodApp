import React, { useState, createContext } from "react";

export const UserLoginContext = createContext({
  user: {},
  setUser: () => {},
});

const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserLoginContext.Provider value={{ user, setUser }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserAuthProvider;

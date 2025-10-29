import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem("user");
    // console.log(typeof stored);
    if (stored === "undefined") {
      return null;
    } else {
      return JSON.parse(stored);
    }
    // return stored ? JSON.parse(stored) : null;
  });
  // console.log(userData);

  const setUser = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [userData]);

  const store = { user: userData, setUser };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;

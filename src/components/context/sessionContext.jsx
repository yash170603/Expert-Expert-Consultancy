import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/user/getUser", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

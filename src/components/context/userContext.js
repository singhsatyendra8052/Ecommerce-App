import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userdetails, setUserdetails] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      // const token = localStorage.getItem("token"); // or wherever you store your token
      const res = await axios.get("http://localhost:8000/user/user", {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        withCredentials: true,
        credentials: "include",
      });
      setUserdetails(res.data);
      console.log(userdetails);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ userdetails, setUserdetails }}>
      {children}
    </UserContext.Provider>
  );
}

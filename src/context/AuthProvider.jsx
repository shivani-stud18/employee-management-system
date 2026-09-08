import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = getLocalStorage();
    const employees = storedData?.employees;

    // Initialize default data only when employees don't exist
    if (!Array.isArray(employees) || employees.length === 0) {
      setLocalStorage();

      const initialData = getLocalStorage();

      setUserData(initialData?.employees || []);
      return;
    }

    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
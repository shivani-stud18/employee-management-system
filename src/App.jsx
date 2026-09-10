import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      return;
    }

    try {
      const session = JSON.parse(loggedInUser);

      if (session.role === "admin") {
        setUser("admin");
        setLoggedInUserData(null);
      }

      if (session.role === "employee") {
        const { employees } = getLocalStorage();

        const employee = employees.find(
          (emp) => emp.id === session.data?.id
        );

        if (employee) {
          setUser("employee");
          setLoggedInUserData(employee);
        } else {
          localStorage.removeItem("loggedInUser");
        }
      }
    } catch (error) {
      console.error("Invalid login session:", error);
      localStorage.removeItem("loggedInUser");
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const adminUser = admin.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (adminUser) {
      setUser("admin");
      setLoggedInUserData(null);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: adminUser,
        })
      );

      return true;
    }

    const employeeUser = employees.find(
      (employee) =>
        employee.email === email &&
        employee.password === password
    );

    if (employeeUser) {
      setUser("employee");
      setLoggedInUserData(employeeUser);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employeeUser,
        })
      );

      return true;
    }

    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user && (
        <Login handleLogin={handleLogin} />
      )}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard
          data={loggedInUserData}
          changeUser={handleLogout}
        />
      )}

      {user === "admin" && (
        <AdminDashboard
          changeUser={handleLogout}
        />
      )}
    </>
  );
};

export default App;
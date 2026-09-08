import React from "react";

const Header = ({ changeUser, data }) => {
  const username = data?.firstName || "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      
      {/* Brand / Greeting */}
      <div>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">
          Employee Management System
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Hello,
          <span className="text-emerald-400 ml-2">
            {username} 👋
          </span>
        </h1>
      </div>

      {/* Logout */}
      <button
        onClick={logOutUser}
        className="
          w-full sm:w-auto
          px-5 py-2.5
          rounded-xl
          font-medium
          text-red-400
          bg-red-500/10
          border border-red-500/20
          hover:bg-red-500
          hover:text-white
          transition-all
          duration-300
        "
      >
        Log Out
      </button>

    </header>
  );
};

export default Header;
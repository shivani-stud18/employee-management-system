import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="min-h-screen bg-[#111111] p-5 sm:p-7 lg:p-10">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <Header changeUser={changeUser} />

        {/* Dashboard Intro */}
        <div className="mt-8">
          <div
            className="
              bg-gradient-to-r
              from-emerald-500/10
              via-transparent
              to-transparent
              border
              border-emerald-500/10
              rounded-2xl
              p-5
              sm:p-7
            "
          >
            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
              Admin Dashboard
            </p>

            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Manage Your Team
            </h1>

            <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-2xl">
              Create tasks, assign work to employees and monitor
              team performance from one place.
            </p>
          </div>
        </div>

        {/* Create Task */}
        <CreateTask />

        {/* Employee Performance */}
        <AllTask />

      </div>
    </div>
  );
};

export default AdminDashboard;
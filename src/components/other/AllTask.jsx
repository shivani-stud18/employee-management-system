import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  const getCompletionRate = (employee) => {
    const taskNumber = employee?.taskNumber || {};

    const total =
      (taskNumber.newTask || 0) +
      (taskNumber.active || 0) +
      (taskNumber.completed || 0) +
      (taskNumber.failed || 0);

    if (total === 0) return 0;

    return Math.round(
      ((taskNumber.completed || 0) / total) * 100
    );
  };

  return (
    <section className="mt-8">

      <div className="mb-5">
        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
          Team Performance
        </p>

        <h2 className="text-2xl font-semibold text-white">
          Employee Overview
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Track task progress and employee performance.
        </p>
      </div>

      <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.03] border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-gray-500">
                  Employee
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-blue-400">
                  New
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-emerald-400">
                  Active
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-purple-400">
                  Completed
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-red-400">
                  Failed
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-gray-500">
                  Completion
                </th>
              </tr>
            </thead>

            <tbody>
              {userData?.map((employee) => {
                const taskNumber = employee.taskNumber || {};
                const completionRate =
                  getCompletionRate(employee);

                return (
                  <tr
                    key={employee.id}
                    className="
                      border-b
                      border-white/5
                      last:border-0
                      hover:bg-white/[0.02]
                      transition
                    "
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            w-10
                            h-10
                            rounded-xl
                            bg-emerald-500/10
                            border border-emerald-500/20
                            flex
                            items-center
                            justify-center
                            text-emerald-400
                            font-semibold
                          "
                        >
                          {employee.firstName
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white">
                            {employee.firstName}
                          </p>

                          <p className="text-xs text-gray-500">
                            {employee.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-blue-400 font-semibold">
                        {taskNumber.newTask || 0}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-emerald-400 font-semibold">
                        {taskNumber.active || 0}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-purple-400 font-semibold">
                        {taskNumber.completed || 0}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-red-400 font-semibold">
                        {taskNumber.failed || 0}
                      </span>
                    </td>

                    <td className="px-6 py-5 min-w-[180px]">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                            style={{
                              width: `${completionRate}%`,
                            }}
                          />
                        </div>

                        <span className="text-xs text-gray-400 w-10">
                          {completionRate}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {userData?.map((employee) => {
          const taskNumber = employee.taskNumber || {};
          const completionRate =
            getCompletionRate(employee);

          return (
            <div
              key={employee.id}
              className="
                bg-[#1a1a1a]
                border border-white/10
                rounded-2xl
                p-5
              "
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-emerald-500/10
                    border border-emerald-500/20
                    flex
                    items-center
                    justify-center
                    text-emerald-400
                    font-semibold
                  "
                >
                  {employee.firstName
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <p className="font-medium text-white">
                    {employee.firstName}
                  </p>

                  <p className="text-xs text-gray-500">
                    {employee.email}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <p className="text-xs text-gray-500">
                    New Tasks
                  </p>

                  <p className="text-lg font-semibold text-blue-400 mt-1">
                    {taskNumber.newTask || 0}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-xs text-gray-500">
                    Active
                  </p>

                  <p className="text-lg font-semibold text-emerald-400 mt-1">
                    {taskNumber.active || 0}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <p className="text-xs text-gray-500">
                    Completed
                  </p>

                  <p className="text-lg font-semibold text-purple-400 mt-1">
                    {taskNumber.completed || 0}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                  <p className="text-xs text-gray-500">
                    Failed
                  </p>

                  <p className="text-lg font-semibold text-red-400 mt-1">
                    {taskNumber.failed || 0}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">
                    Completion Rate
                  </span>

                  <span className="text-xs text-emerald-400 font-medium">
                    {completionRate}%
                  </span>
                </div>

                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${completionRate}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {(!userData || userData.length === 0) && (
        <div className="text-center py-12 text-gray-500">
          No employee data available.
        </div>
      )}
    </section>
  );
};

export default AllTask;
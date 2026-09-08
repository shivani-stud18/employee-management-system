import React from "react";

const TaskListNumber = ({ data }) => {
  const stats = [
    {
      title: "New Tasks",
      value: data?.taskNumber?.newTask || 0,
      icon: "✦",
      style:
        "bg-blue-500/10 border-blue-500/20 text-blue-400",
    },
    {
      title: "Active",
      value: data?.taskNumber?.active || 0,
      icon: "⚡",
      style:
        "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    },
    {
      title: "Completed",
      value: data?.taskNumber?.completed || 0,
      icon: "✓",
      style:
        "bg-purple-500/10 border-purple-500/20 text-purple-400",
    },
    {
      title: "Failed",
      value: data?.taskNumber?.failed || 0,
      icon: "!",
      style:
        "bg-red-500/10 border-red-500/20 text-red-400",
    },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-8">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`
            ${item.style}
            border
            rounded-2xl
            p-4
            sm:p-6
            transition-all
            duration-300
            hover:-translate-y-1
          `}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl">
              {item.icon}
            </span>

            <span className="text-2xl sm:text-3xl font-bold text-white">
              {item.value}
            </span>
          </div>

          {/* Title */}
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TaskListNumber;
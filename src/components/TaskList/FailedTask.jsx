import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div
      className="
        flex-shrink-0
        w-[290px]
        sm:w-[320px]
        min-h-[280px]
        snap-start
        p-5
        bg-[#1c1c1c]
        border border-red-500/20
        rounded-2xl
        shadow-lg
        flex flex-col justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-500/40
      "
    >
      <div>
        {/* Top Section */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="
              text-xs
              px-3
              py-1
              rounded-full
              bg-red-500/10
              text-red-400
              border border-red-500/20
            "
          >
            Failed
          </span>

          <span className="text-xs text-gray-500 whitespace-nowrap">
            {data.taskDate}
          </span>
        </div>

        {/* Task Content */}
        <h2 className="mt-6 text-xl font-semibold text-white">
          {data.taskTitle}
        </h2>

        <p className="text-sm text-gray-400 mt-2 leading-6 line-clamp-3">
          {data.taskDescription}
        </p>
      </div>

      {/* Status */}
      <div
        className="
          mt-6
          w-full
          py-2.5
          rounded-xl
          text-center
          text-sm
          font-medium
          text-red-400
          bg-red-500/10
          border border-red-500/20
        "
      >
        ✕ Task Failed
      </div>
    </div>
  );
};

export default FailedTask;
import React from "react";

const CompleteTask = ({ data }) => {
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
        border border-purple-500/20
        rounded-2xl
        shadow-lg
        flex flex-col justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-purple-500/40
      "
    >

      <div>

        <div className="flex items-center justify-between gap-3">
          <span
            className="
              text-xs
              px-3
              py-1
              rounded-full
              bg-purple-500/10
              text-purple-400
              border border-purple-500/20
            "
          >
            Completed
          </span>

          <span className="text-xs text-gray-500 whitespace-nowrap">
            {data.taskDate}
          </span>
        </div>

        <h2 className="mt-6 text-xl font-semibold text-white">
          {data.taskTitle}
        </h2>

        <p className="text-sm text-gray-400 mt-2 leading-6 line-clamp-3">
          {data.taskDescription}
        </p>
      </div>

      <div
        className="
          mt-6
          w-full
          py-2.5
          rounded-xl
          text-center
          text-sm
          font-medium
          text-purple-400
          bg-purple-500/10
          border border-purple-500/20
        "
      >
        ✓ Task Completed
      </div>
    </div>
  );
};

export default CompleteTask;
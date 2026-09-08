import React from "react";

const NewTask = ({ data, onAccept }) => {
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
        border border-blue-500/20
        rounded-2xl
        shadow-lg
        flex flex-col justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
      "
    >
      {/* Task Content */}
      <div>
        {/* Top Row */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="
              text-xs
              px-3
              py-1
              rounded-full
              bg-blue-500/10
              text-blue-400
              border border-blue-500/20
              whitespace-nowrap
            "
          >
            {data.category}
          </span>

          <span className="text-xs text-gray-500 whitespace-nowrap">
            {data.taskDate}
          </span>
        </div>

        {/* Task Title */}
        <h2 className="mt-6 text-xl font-semibold text-white">
          {data.taskTitle}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-2 leading-6 line-clamp-3">
          {data.taskDescription}
        </p>
      </div>

      {/* Accept Button */}
      <button
        onClick={() => onAccept(data.taskTitle)}
        className="
          mt-6
          w-full
          bg-emerald-500
          hover:bg-emerald-400
          active:scale-[0.98]
          text-black
          py-2.5
          rounded-xl
          font-semibold
          transition-all
          duration-200
        "
      >
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;
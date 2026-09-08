import React from "react";

const AcceptTask = ({
  data,
  onComplete,
  onFailed,
}) => {
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
        border border-emerald-500/20
        rounded-2xl
        shadow-lg
        flex flex-col justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-500/40
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
              bg-emerald-500/10
              text-emerald-400
              border border-emerald-500/20
            "
          >
            Active
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

      {/* Action Buttons */}
      <div className="flex gap-2 mt-6">
        {/* Complete */}
        <button
          onClick={() => onComplete(data.taskTitle)}
          className="
            flex-1
            bg-purple-500/10
            border border-purple-500/20
            text-purple-400
            hover:bg-purple-500
            hover:text-white
            active:scale-[0.98]
            py-2.5
            rounded-xl
            text-sm
            font-medium
            transition-all
            duration-200
          "
        >
          Complete
        </button>

        {/* Failed */}
        <button
          onClick={() => onFailed(data.taskTitle)}
          className="
            flex-1
            bg-red-500/10
            border border-red-500/20
            text-red-400
            hover:bg-red-500
            hover:text-white
            active:scale-[0.98]
            py-2.5
            rounded-xl
            text-sm
            font-medium
            transition-all
            duration-200
          "
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
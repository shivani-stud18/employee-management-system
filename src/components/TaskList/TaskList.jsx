import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({
  data,
  onAccept,
  onComplete,
  onFailed,
}) => {
  const tasks = data?.tasks || [];

  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            My Tasks
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage your assigned tasks
          </p>
        </div>

        <span className="text-xs sm:text-sm text-gray-500">
          {tasks.length} Tasks
        </span>
      </div>

      {/* Task Cards */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          pb-5
          snap-x
          snap-mandatory
          scroll-smooth
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {tasks.map((task, index) => {
          // New Task
          if (task.newTask) {
            return (
              <NewTask
                key={`${task.taskTitle}-${index}`}
                data={task}
                onAccept={onAccept}
              />
            );
          }

          // Active Task
          if (task.active) {
            return (
              <AcceptTask
                key={`${task.taskTitle}-${index}`}
                data={task}
                onComplete={onComplete}
                onFailed={onFailed}
              />
            );
          }

          // Completed Task
          if (task.completed) {
            return (
              <CompleteTask
                key={`${task.taskTitle}-${index}`}
                data={task}
              />
            );
          }

          // Failed Task
          if (task.failed) {
            return (
              <FailedTask
                key={`${task.taskTitle}-${index}`}
                data={task}
              />
            );
          }

          return null;
        })}

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className="w-full py-12 text-center">
            <p className="text-gray-500 text-sm">
              No tasks assigned yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TaskList;
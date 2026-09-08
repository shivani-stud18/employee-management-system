import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDate: "",
    assignedTo: "",
    category: "",
    taskDescription: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      taskTitle,
      taskDate,
      assignedTo,
      category,
      taskDescription,
    } = formData;

    if (
      !taskTitle ||
      !taskDate ||
      !assignedTo ||
      !category ||
      !taskDescription
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = userData.map((employee) => {
      if (employee.id !== Number(assignedTo)) {
        return employee;
      }

      const updatedTasks = [...employee.tasks, newTask];

      const updatedTaskNumber = {
        active: updatedTasks.filter((task) => task.active).length,
        newTask: updatedTasks.filter((task) => task.newTask).length,
        completed: updatedTasks.filter((task) => task.completed).length,
        failed: updatedTasks.filter((task) => task.failed).length,
      };

      return {
        ...employee,
        tasks: updatedTasks,
        taskNumber: updatedTaskNumber,
      };
    });

    // Update Context
    setUserData(updatedEmployees);

    // Update localStorage
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setFormData({
      taskTitle: "",
      taskDate: "",
      assignedTo: "",
      category: "",
      taskDescription: "",
    });

    setMessage("Task assigned successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <section
      className="
        mt-8
        bg-[#1a1a1a]
        border border-white/10
        rounded-2xl
        p-5
        sm:p-7
        lg:p-8
        shadow-xl
      "
    >
      {/* Header */}
      <div className="mb-7">
        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
          Task Management
        </p>

        <h2 className="text-2xl font-semibold text-white">
          Create New Task
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Assign a new task to an employee.
        </p>
      </div>

      {/* Success / Error Message */}
      {message && (
        <div
          className={`
            mb-5
            px-4
            py-3
            rounded-xl
            text-sm
            border
            ${
              message.includes("successfully")
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : "bg-red-500/10 text-red-400 border-red-500/20"
            }
          `}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Task Title */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Task Title
            </label>

            <input
              type="text"
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              placeholder="Enter task title"
              className="
                w-full
                bg-[#111111]
                border border-white/10
                focus:border-emerald-500/50
                outline-none
                text-white
                placeholder:text-gray-600
                rounded-xl
                px-4
                py-3
                transition
              "
            />
          </div>

          {/* Task Date */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Due Date
            </label>

            <input
              type="date"
              name="taskDate"
              value={formData.taskDate}
              onChange={handleChange}
              className="
                w-full
                bg-[#111111]
                border border-white/10
                focus:border-emerald-500/50
                outline-none
                text-white
                rounded-xl
                px-4
                py-3
                transition
              "
            />
          </div>

          {/* Employee */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Assign To
            </label>

            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              className="
                w-full
                bg-[#111111]
                border border-white/10
                focus:border-emerald-500/50
                outline-none
                text-white
                rounded-xl
                px-4
                py-3
                transition
              "
            >
              <option value="">Select Employee</option>

              {userData?.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.firstName}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Development, Design"
              className="
                w-full
                bg-[#111111]
                border border-white/10
                focus:border-emerald-500/50
                outline-none
                text-white
                placeholder:text-gray-600
                rounded-xl
                px-4
                py-3
                transition
              "
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label className="block text-sm text-gray-300 mb-2">
              Task Description
            </label>

            <textarea
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              placeholder="Describe the task..."
              rows="5"
              className="
                w-full
                bg-[#111111]
                border border-white/10
                focus:border-emerald-500/50
                outline-none
                text-white
                placeholder:text-gray-600
                rounded-xl
                px-4
                py-3
                resize-none
                transition
              "
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="
              w-full
              sm:w-auto
              px-7
              py-3
              rounded-xl
              bg-emerald-500
              hover:bg-emerald-400
              active:scale-[0.98]
              text-black
              font-semibold
              transition-all
              duration-200
            "
          >
            Create Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateTask;
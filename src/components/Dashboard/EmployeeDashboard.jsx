import React, { useContext, useState } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = ({ data, changeUser }) => {
  const [employee, setEmployee] = useState(data);

  const { setUserData } = useContext(AuthContext);

  const updateTaskStatus = (taskTitle, status) => {
    const updatedTasks = employee.tasks.map((task) => {
      if (task.taskTitle !== taskTitle) {
        return task;
      }

      return {
        ...task,
        newTask: status === "newTask",
        active: status === "active",
        completed: status === "completed",
        failed: status === "failed",
      };
    });

    const updatedTaskNumber = {
      active: updatedTasks.filter((task) => task.active).length,
      newTask: updatedTasks.filter((task) => task.newTask).length,
      completed: updatedTasks.filter((task) => task.completed).length,
      failed: updatedTasks.filter((task) => task.failed).length,
    };

    const updatedEmployee = {
      ...employee,
      tasks: updatedTasks,
      taskNumber: updatedTaskNumber,
    };

    setEmployee(updatedEmployee);

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const updatedEmployees = employees.map((emp) => {
      if (emp.id === updatedEmployee.id) {
        return updatedEmployee;
      }

      return emp;
    });

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setUserData(updatedEmployees);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        data: updatedEmployee,
      })
    );
  };

  const handleAccept = (taskTitle) => {
    updateTaskStatus(taskTitle, "active");
  };

  const handleComplete = (taskTitle) => {
    updateTaskStatus(taskTitle, "completed");
  };

  const handleFailed = (taskTitle) => {
    updateTaskStatus(taskTitle, "failed");
  };

  return (
    <div className="min-h-screen bg-[#111111] p-5 sm:p-7 lg:p-10">
      <div className="max-w-[1600px] mx-auto">

        <Header
          data={employee}
          changeUser={changeUser}
        />

        <TaskListNumber data={employee} />

        <TaskList
          data={employee}
          onAccept={handleAccept}
          onComplete={handleComplete}
          onFailed={handleFailed}
        />

      </div>
    </div>
  );
};

export default EmployeeDashboard;
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@me.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Create Login Page",
        taskDescription: "Build a responsive login page using React.",
        taskDate: "2026-08-20",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix responsive issues in the navigation bar.",
        taskDate: "2026-08-21",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Dashboard",
        taskDescription: "Improve the employee dashboard UI.",
        taskDate: "2026-08-18",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee API with the dashboard.",
        taskDate: "2026-08-17",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Design Profile Page",
        taskDescription: "Create a modern employee profile page.",
        taskDate: "2026-08-22",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    firstName: "Ananya",
    email: "ananya@me.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Landing Page",
        taskDescription: "Create a responsive landing page.",
        taskDate: "2026-08-20",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Product Cards",
        taskDescription: "Create reusable product card components.",
        taskDate: "2026-08-21",
        category: "React",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Form Validation",
        taskDescription: "Add validation to the registration form.",
        taskDate: "2026-08-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "UI Improvements",
        taskDescription: "Improve spacing and typography.",
        taskDate: "2026-08-17",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Testing",
        taskDescription: "Test the main application features.",
        taskDate: "2026-08-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "rohan@me.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "React Components",
        taskDescription: "Build reusable React components.",
        taskDate: "2026-08-20",
        category: "React",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "State Management",
        taskDescription: "Implement state management for the dashboard.",
        taskDate: "2026-08-21",
        category: "React",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Responsive Layout",
        taskDescription: "Make the application responsive.",
        taskDate: "2026-08-18",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Code Cleanup",
        taskDescription: "Refactor repetitive code.",
        taskDate: "2026-08-17",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug Fixes",
        taskDescription: "Fix reported application bugs.",
        taskDate: "2026-08-16",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 4,
    firstName: "Priya",
    email: "priya@me.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Portfolio Design",
        taskDescription: "Design a modern developer portfolio.",
        taskDate: "2026-08-20",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Hero Section",
        taskDescription: "Build an attractive hero section.",
        taskDate: "2026-08-21",
        category: "UI",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Footer",
        taskDescription: "Create a responsive website footer.",
        taskDate: "2026-08-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Animations",
        taskDescription: "Add subtle animations to the website.",
        taskDate: "2026-08-17",
        category: "Animation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Cross Browser Testing",
        taskDescription: "Test the website across different browsers.",
        taskDate: "2026-08-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "vikram@me.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "API Development",
        taskDescription: "Create API endpoints for the application.",
        taskDate: "2026-08-20",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Database Setup",
        taskDescription: "Configure the application database.",
        taskDate: "2026-08-21",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Authentication",
        taskDescription: "Implement authentication functionality.",
        taskDate: "2026-08-18",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "API Testing",
        taskDescription: "Test all API endpoints.",
        taskDate: "2026-08-17",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Error Handling",
        taskDescription: "Improve API error handling.",
        taskDate: "2026-08-16",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const storedEmployees = JSON.parse(
    localStorage.getItem("employees")
  );

  const storedAdmin = JSON.parse(
    localStorage.getItem("admin")
  );

  return {
    employees: Array.isArray(storedEmployees)
      ? storedEmployees
      : [],

    admin: Array.isArray(storedAdmin)
      ? storedAdmin
      : [],
  };
};

export default employees;
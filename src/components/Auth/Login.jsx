import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-5">
      <div
        className="
          w-full
          max-w-md
          bg-[#151515]
          border
          border-white/10
          rounded-3xl
          p-8
          md:p-10
          shadow-2xl
        "
      >
        <div className="text-center mb-8">
          <div
            className="
              w-14 h-14
              mx-auto
              rounded-2xl
              bg-emerald-500/10
              border
              border-emerald-500/20
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            ⚡
          </div>

          <h1 className="text-2xl font-semibold mt-5">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Login to your employee dashboard
          </p>
        </div>

        <form onSubmit={submitHandler}>
          <label className="text-sm text-gray-400">
            Email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="employee1@gmail.com"
            className="
              w-full
              mt-2
              bg-[#1d1d1d]
              border
              border-white/10
              outline-none
              rounded-xl
              px-4 py-3
              text-sm
              placeholder:text-gray-600
              focus:border-emerald-500/50
            "
          />

          <label className="block text-sm text-gray-400 mt-5">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="
              w-full
              mt-2
              bg-[#1d1d1d]
              border
              border-white/10
              outline-none
              rounded-xl
              px-4 py-3
              text-sm
              placeholder:text-gray-600
              focus:border-emerald-500/50
            "
          />

          <button
            type="submit"
            className="
              w-full
              mt-7
              bg-emerald-500
              hover:bg-emerald-600
              text-black
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            Employee: aarav@me.com / 123
          </p>

          <p className="text-xs text-gray-600 mt-1">
            Admin: admin@gmail.com / 123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
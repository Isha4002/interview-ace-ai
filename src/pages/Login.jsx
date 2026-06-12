import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaRobot className="text-purple-600 text-2xl" />

          <h1 className="text-xl font-bold">
            InterviewAce AI
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          Welcome Back!
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to continue your preparation journey.
        </p>

        {/* Email */}
        <div className="mt-8">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            mt-2
            border
            p-3
            rounded-xl
            outline-none
            focus:border-purple-500
            "
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="
            w-full
            mt-2
            border
            p-3
            rounded-xl
            outline-none
            focus:border-purple-500
            "
          />
        </div>

        {/* Remember + Forgot */}

        <div className="flex justify-between items-center mt-4 text-sm">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <button className="text-purple-600 font-medium">
            Forgot Password?
          </button>

        </div>

        {/* Login Button */}

        <button
          className="
          w-full
          bg-purple-600
          text-white
          py-3
          rounded-xl
          mt-6
          font-semibold
          hover:bg-purple-700
          transition
          "
        >
          Login
        </button>

        {/* Signup Link */}

        <p className="text-center mt-6 text-gray-500">

          Don't have an account?

          <Link
            to="/signup"
            className="text-purple-600 font-semibold ml-2"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;
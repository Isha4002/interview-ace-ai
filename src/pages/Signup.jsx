import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaRobot } from "react-icons/fa";

function Signup() {
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
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Join thousands of students preparing with AI
        </p>

        {/* Google */}
        <button
          className="
          w-full
          border
          mt-6
          py-3
          rounded-xl
          flex
          items-center
          justify-center
          gap-3
          hover:bg-gray-50
          "
        >
          <FaGoogle />
          Sign up with Google
        </button>

        {/* Github */}
        <button
          className="
          w-full
          border
          mt-3
          py-3
          rounded-xl
          flex
          items-center
          justify-center
          gap-3
          hover:bg-gray-50
          "
        >
          <FaGithub />
          Sign up with GitHub
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>

          <span className="px-4 text-gray-400">
            OR
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Form */}

        <input
          type="text"
          placeholder="Full Name"
          className="
          w-full
          border
          p-3
          rounded-xl
          mb-4
          outline-none
          focus:border-purple-500
          "
        />

        <input
          type="email"
          placeholder="Email Address"
          className="
          w-full
          border
          p-3
          rounded-xl
          mb-4
          outline-none
          focus:border-purple-500
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          border
          p-3
          rounded-xl
          mb-6
          outline-none
          focus:border-purple-500
          "
        />

        {/* Button */}

        <button
          className="
          w-full
          bg-purple-600
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-purple-700
          "
        >
          Create Account
        </button>

        <p className="text-center mt-6 text-gray-500">

          Already have an account?

          <Link
            to="/login"
            className="text-purple-600 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;
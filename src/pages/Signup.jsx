import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaRobot } from "react-icons/fa";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Account Created Successfully 🎉");

      navigate("/dashboard");
    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);

  alert(
    error.response?.data?.message ||
    error.message
  );
}
  };

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

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
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

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
          onClick={handleSubmit}
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
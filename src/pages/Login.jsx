import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        "https://interview-ace-ai-sd8f.onrender.com,
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        error.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="flex items-center justify-center gap-2 mb-6">
          <FaRobot className="text-purple-600 text-2xl" />
          <h1 className="text-xl font-bold">
            InterviewAce AI
          </h1>
        </div>

        <h2 className="text-3xl font-bold text-center">
          Welcome Back!
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to continue your preparation journey.
        </p>

        <div className="mt-8">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-2 border p-3 rounded-xl outline-none focus:border-purple-500"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full mt-2 border p-3 rounded-xl outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex justify-between items-center mt-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <button className="text-purple-600 font-medium">
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-xl mt-6 font-semibold hover:bg-purple-700 transition"
        >
          Login
        </button>

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
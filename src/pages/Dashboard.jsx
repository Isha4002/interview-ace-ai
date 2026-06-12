
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaRobot,
  FaClipboardList,
  FaFire,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", solved: 10 },
  { day: "Tue", solved: 20 },
  { day: "Wed", solved: 15 },
  { day: "Thu", solved: 35 },
  { day: "Fri", solved: 28 },
  { day: "Sat", solved: 40 },
  { day: "Sun", solved: 55 },
];

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome Back, {user?.name || "User"} 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Let's continue your interview preparation
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button className="bg-white p-3 rounded-xl shadow">
              🔔
            </button>

            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          {/* DSA */}

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

            <div className="flex justify-between">
              <FaCode className="text-purple-600 text-2xl" />

              <span className="text-green-500 text-sm">
                +12%
              </span>
            </div>

            <h2 className="text-3xl font-bold mt-4 text-purple-600">
              {user?.dsaSolved || 0}
            </h2>

            <p className="text-gray-500">
              DSA Problems Solved
            </p>

          </div>

          {/* Mock Interviews */}

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

            <div className="flex justify-between">
              <FaRobot className="text-blue-600 text-2xl" />

              <span className="text-green-500 text-sm">
                +4
              </span>
            </div>

            <h2 className="text-3xl font-bold mt-4 text-blue-600">
              {user?.mockInterviews || 0}
            </h2>

            <p className="text-gray-500">
              Mock Interviews
            </p>

          </div>

          {/* Quizzes */}

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

            <div className="flex justify-between">
              <FaClipboardList className="text-orange-500 text-2xl" />

              <span className="text-green-500 text-sm">
                +8
              </span>
            </div>

            <h2 className="text-3xl font-bold mt-4 text-orange-500">
              {user?.quizzesTaken || 0}
            </h2>

            <p className="text-gray-500">
              Quizzes Taken
            </p>

          </div>

          {/* Streak */}

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

            <div className="flex justify-between">
              <FaFire className="text-red-500 text-2xl" />

              <span className="text-green-500 text-sm">
                Active
              </span>
            </div>

            <h2 className="text-3xl font-bold mt-4 text-red-500">
              {user?.streak || 0}
            </h2>

            <p className="text-gray-500">
              Day Streak
            </p>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* Progress Chart */}

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-xl font-bold mb-4">
              Weekly Progress
            </h2>

            <ResponsiveContainer width="100%" height={280}>

              <LineChart data={data}>

                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="solved"
                  stroke="#7C3AED"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* Recent Activity */}

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-xl font-bold mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                ✅ Solved Two Sum Problem
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                🎤 Frontend Mock Interview Completed
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                📝 React Quiz Completed
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                🗺️ Frontend Roadmap Updated
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;


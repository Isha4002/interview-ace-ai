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

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const dsaSolved = Number(user?.dsaSolved || 0);
  const mockInterviews = Number(
    user?.mockInterviews || 0
  );
  const quizzesTaken = Number(
    user?.quizzesTaken || 0
  );
  const streak = Number(user?.streak || 0);

  const chartData = [
    { day: "Mon", solved: Math.max(0, dsaSolved - 6) },
    { day: "Tue", solved: Math.max(0, dsaSolved - 5) },
    { day: "Wed", solved: Math.max(0, dsaSolved - 4) },
    { day: "Thu", solved: Math.max(0, dsaSolved - 3) },
    { day: "Fri", solved: Math.max(0, dsaSolved - 2) },
    { day: "Sat", solved: Math.max(0, dsaSolved - 1) },
    { day: "Sun", solved: dsaSolved },
  ];

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
              className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaCode className="text-purple-600 text-3xl mb-4" />

            <h2 className="text-4xl font-bold text-purple-600">
              {dsaSolved}
            </h2>

            <p className="text-gray-500 mt-2">
              DSA Problems Solved
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaRobot className="text-blue-600 text-3xl mb-4" />

            <h2 className="text-4xl font-bold text-blue-600">
              {mockInterviews}
            </h2>

            <p className="text-gray-500 mt-2">
              Mock Interviews
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaClipboardList className="text-orange-500 text-3xl mb-4" />

            <h2 className="text-4xl font-bold text-orange-500">
              {quizzesTaken}
            </h2>

            <p className="text-gray-500 mt-2">
              Quizzes Taken
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaFire className="text-red-500 text-3xl mb-4" />

            <h2 className="text-4xl font-bold text-red-500">
              {streak}
            </h2>

            <p className="text-gray-500 mt-2">
              Day Streak
            </p>
          </div>

        </div>

        {/* Chart + Activity */}

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* Chart */}

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-2xl font-bold mb-4">
              Weekly Progress
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <LineChart data={chartData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="solved"
                  stroke="#7C3AED"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          {/* Recent Activity */}

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-2xl font-bold mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                💻 DSA Solved: {dsaSolved}
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                🎤 Interviews Completed: {mockInterviews}
              </div>

              <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                📝 Quizzes Attempted: {quizzesTaken}
              </div>

              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                🔥 Current Streak: {streak} Days
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
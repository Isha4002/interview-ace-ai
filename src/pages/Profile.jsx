import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaUser,
  FaEnvelope,
  FaCode,
  FaRobot,
  FaClipboardList,
  FaFire,
} from "react-icons/fa";

function Profile() {
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

        <div className="bg-white rounded-3xl shadow p-8">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>

              <h1 className="text-3xl font-bold">
                {user?.name}
              </h1>

              <p className="text-gray-500">
                {user?.email}
              </p>

              <span className="inline-block mt-3 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {user?.role}
              </span>

            </div>

          </div>

        </div>

        {/* User Details */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
              Account Information
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaUser className="text-purple-600" />
                <span>{user?.name}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-600" />
                <span>{user?.email}</span>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
              Quick Actions
            </h2>

            <div className="space-y-3">

              <button className="w-full bg-purple-600 text-white py-3 rounded-xl">
                Edit Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-xl"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaCode className="mx-auto text-purple-600 text-3xl mb-3" />

            <h2 className="text-3xl font-bold">
              {user?.dsaSolved || 0}
            </h2>

            <p className="text-gray-500">
              DSA Solved
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaRobot className="mx-auto text-blue-600 text-3xl mb-3" />

            <h2 className="text-3xl font-bold">
              {user?.mockInterviews || 0}
            </h2>

            <p className="text-gray-500">
              Mock Interviews
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaClipboardList className="mx-auto text-orange-500 text-3xl mb-3" />

            <h2 className="text-3xl font-bold">
              {user?.quizzesTaken || 0}
            </h2>

            <p className="text-gray-500">
              Quizzes Taken
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaFire className="mx-auto text-red-500 text-3xl mb-3" />

            <h2 className="text-3xl font-bold">
              {user?.streak || 0}
            </h2>

            <p className="text-gray-500">
              Day Streak
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
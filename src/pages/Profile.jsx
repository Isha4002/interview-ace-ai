import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(
    user?.name || ""
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "https://interview-ace-ai-sd8f.onrender.com",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Profile Updated Successfully 🎉");

      setEditing(false);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Update Failed"
      );
    }
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

              <button
                onClick={() => setEditing(true)}
                className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"
              >
                Edit Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
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

      {/* Edit Profile Modal */}

      {editing && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[400px]">

            <h2 className="text-2xl font-bold mb-4">
              Edit Profile
            </h2>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-3 rounded-xl mb-4"
              placeholder="Enter Name"
            />

            <div className="flex gap-3">

              <button
                onClick={handleUpdateProfile}
                className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"
              >
                Save
              </button>

              <button
                onClick={() => setEditing(false)}
                className="flex-1 bg-gray-300 py-3 rounded-xl"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Profile;
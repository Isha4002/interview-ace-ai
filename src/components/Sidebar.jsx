import {
  FaTachometerAlt,
  FaCode,
  FaRobot,
  FaClipboardList,
  FaRoad,
  FaFileAlt,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
    ${
      isActive
        ? "bg-purple-100 text-purple-600 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 h-screen bg-white border-r fixed left-0 top-0 flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b">

        <h1 className="text-2xl font-bold text-purple-600">
          InterviewAce AI
        </h1>

      </div>

      {/* Menu */}

      <div className="flex-1 p-4 flex flex-col gap-2">

        <NavLink to="/dashboard" className={menuClass}>
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink to="/practice" className={menuClass}>
          <FaCode />
          DSA Practice
        </NavLink>

        <NavLink to="/mock-interviews" className={menuClass}>
  <FaRobot />
  Mock Interviews
</NavLink>

        <NavLink to="/quiz" className={menuClass}>
          <FaClipboardList />
          Quizzes
        </NavLink>

        <NavLink to="/roadmaps" className={menuClass}>
          <FaRoad />
          Roadmaps
        </NavLink>

        <NavLink to="/resume" className={menuClass}>
          <FaFileAlt />
          Resume Analyzer
        </NavLink>

        <NavLink to="/progress" className={menuClass}>
          <FaChartLine />
          Progress
        </NavLink>

        <NavLink to="/profile" className={menuClass}>
          <FaUser />
          Profile
        </NavLink>

      </div>

      {/* Bottom */}

      <div className="p-4 border-t flex flex-col gap-2">

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100">
          <FaCog />
          Settings
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50">
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;
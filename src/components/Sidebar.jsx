import {
  FaTachometerAlt,
  FaCode,
  FaRobot,
  FaClipboardList,
  FaRoad,
  FaFileAlt,
  FaChartLine,
  FaUser
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r fixed left-0 top-0">

      <div className="p-6 border-b">

        <h1 className="text-xl font-bold text-purple-600">
          InterviewAce AI
        </h1>

      </div>

      <div className="p-4 flex flex-col gap-2">

        <Link
          to="/dashboard"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaTachometerAlt className="inline mr-3" />
          Dashboard
        </Link>

        <Link
          to="/practice"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaCode className="inline mr-3" />
          DSA Practice
        </Link>

        <Link
          to="/aiinterview"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaRobot className="inline mr-3" />
          Mock Interviews
        </Link>

        <Link
          to="/quiz"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaClipboardList className="inline mr-3" />
          Quizzes
        </Link>

        <Link
          to="/roadmaps"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaRoad className="inline mr-3" />
          Roadmaps
        </Link>

        <Link
          to="/resume"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaFileAlt className="inline mr-3" />
          Resume Analyzer
        </Link>

        <Link
          to="/progress"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaChartLine className="inline mr-3" />
          Progress
        </Link>

        <Link
          to="/profile"
          className="p-3 rounded-xl hover:bg-purple-100"
        >
          <FaUser className="inline mr-3" />
          Profile
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;
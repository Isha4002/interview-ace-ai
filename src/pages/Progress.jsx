import Sidebar from "../components/Sidebar";
import {
  FaCode,
  FaRobot,
  FaClipboardList,
  FaFire,
} from "react-icons/fa";

function Progress() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const dsaSolved = user?.dsaSolved || 0;
  const mockInterviews = user?.mockInterviews || 0;
  const quizzesTaken = user?.quizzesTaken || 0;
  const streak = user?.streak || 0;

  const totalProgress = Math.min(
    Math.round(
      ((dsaSolved +
        mockInterviews +
        quizzesTaken +
        streak) /
        100) *
        100
    ),
    100
  );

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Progress & Analytics 📊
          </h1>

          <p className="text-gray-500 mt-2">
            Track your interview preparation journey
          </p>

        </div>

        {/* Progress Card */}

        <div className="bg-white rounded-3xl p-8 shadow mb-8">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-2xl font-bold">
                Overall Progress
              </h2>

              <p className="text-gray-500 mt-2">
                Keep going, {user?.name}! 🚀
              </p>
            </div>

            <h2 className="text-5xl font-bold text-purple-600">
              {totalProgress}%
            </h2>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-5 mt-6">

            <div
              className="bg-purple-600 h-5 rounded-full transition-all"
              style={{
                width: `${totalProgress}%`,
              }}
            ></div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow">

            <FaCode className="text-purple-600 text-3xl mb-4" />

            <h2 className="text-3xl font-bold">
              {dsaSolved}
            </h2>

            <p className="text-gray-500">
              DSA Problems Solved
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <FaRobot className="text-blue-600 text-3xl mb-4" />

            <h2 className="text-3xl font-bold">
              {mockInterviews}
            </h2>

            <p className="text-gray-500">
              Mock Interviews
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <FaClipboardList className="text-orange-500 text-3xl mb-4" />

            <h2 className="text-3xl font-bold">
              {quizzesTaken}
            </h2>

            <p className="text-gray-500">
              Quizzes Taken
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <FaFire className="text-red-500 text-3xl mb-4" />

            <h2 className="text-3xl font-bold">
              {streak}
            </h2>

            <p className="text-gray-500">
              Day Streak
            </p>

          </div>

        </div>

        {/* Analytics Section */}

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl p-6 shadow">

            <h2 className="text-xl font-bold mb-4">
              Performance Summary
            </h2>

            <div className="space-y-4">

              <div className="bg-purple-50 p-4 rounded-xl">
                🎯 You have solved
                <span className="font-bold text-purple-600">
                  {" "}
                  {dsaSolved}{" "}
                </span>
                DSA problems.
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                🎤 Completed
                <span className="font-bold text-blue-600">
                  {" "}
                  {mockInterviews}{" "}
                </span>
                mock interviews.
              </div>

              <div className="bg-orange-50 p-4 rounded-xl">
                📝 Attempted
                <span className="font-bold text-orange-600">
                  {" "}
                  {quizzesTaken}{" "}
                </span>
                quizzes.
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <h2 className="text-xl font-bold mb-4">
              Achievement Level
            </h2>

            <div className="h-72 flex flex-col justify-center items-center">

              <div className="text-8xl">
                🏆
              </div>

              <h3 className="text-2xl font-bold mt-4">
                Rising Interview Star
              </h3>

              <p className="text-gray-500 mt-2 text-center">
                Keep solving problems and taking
                mock interviews to level up.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Progress;
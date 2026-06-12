import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="bg-[#F8F7FC] min-h-screen">

      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-3xl font-bold">
          Welcome Back, Isha 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Let's continue your interview preparation
        </p>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-3xl font-bold text-purple-600">
              1250
            </h2>

            <p className="text-gray-500">
              DSA Problems Solved
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-3xl font-bold text-purple-600">
              18
            </h2>

            <p className="text-gray-500">
              Mock Interviews
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-3xl font-bold text-purple-600">
              32
            </h2>

            <p className="text-gray-500">
              Quizzes Taken
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-3xl font-bold text-purple-600">
              12
            </h2>

            <p className="text-gray-500">
              Current Streak
            </p>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-xl font-bold mb-4">
              Your Progress
            </h2>

            <div className="h-64 flex items-center justify-center text-gray-400">
              Chart Coming Soon
            </div>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-xl font-bold mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="border rounded-xl p-3">
                ✅ DSA Problem Solved
              </div>

              <div className="border rounded-xl p-3">
                🎤 Mock Interview Completed
              </div>

              <div className="border rounded-xl p-3">
                📝 Quiz Completed
              </div>

              <div className="border rounded-xl p-3">
                🗺️ Roadmap Updated
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
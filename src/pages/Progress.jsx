import Sidebar from "../components/Sidebar";

function Progress() {
  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Progress & Analytics
        </h1>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-purple-600">
              1250
            </h2>
            <p className="text-gray-500">
              Problems Solved
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
              Day Streak
            </p>
          </div>

        </div>

        {/* Charts */}

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">
              Performance Over Time
            </h2>

            <div className="h-72 flex items-center justify-center text-gray-400">
              📈 Chart Coming Soon
            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">
              Topic Wise Performance
            </h2>

            <div className="h-72 flex items-center justify-center text-gray-400">
              🥧 Pie Chart Coming Soon
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Progress;
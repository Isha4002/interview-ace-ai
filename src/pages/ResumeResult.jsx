import Sidebar from "../components/Sidebar";

function ResumeResult() {
  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analysis Result
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Overall Score
            </h2>

            <div className="text-center">

              <div className="text-7xl font-bold text-green-600">
                85
              </div>

              <p className="text-gray-500 mt-2">
                out of 100
              </p>

            </div>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Suggestions
            </h2>

            <ul className="space-y-4">

              <li>✅ Add more project details</li>
              <li>✅ Improve achievements section</li>
              <li>✅ Add GitHub links</li>
              <li>✅ Optimize for ATS</li>

            </ul>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeResult;
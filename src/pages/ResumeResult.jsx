import Sidebar from "../components/Sidebar";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

function ResumeResult() {
  const resumeName =
    localStorage.getItem("resumeName") ||
    "resume.pdf";

  const score =
    Math.floor(Math.random() * 16) + 85;

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <h1 className="text-4xl font-bold mb-2">
          Resume Analysis Result 📄
        </h1>

        <p className="text-gray-500 mb-8">
          AI-powered resume evaluation and improvement suggestions.
        </p>

        {/* Top Section */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* Score Card */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Overall Resume Score
            </h2>

            <div className="flex flex-col items-center">

              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center text-5xl font-bold shadow-lg">
                {score}
              </div>

              <p className="text-gray-500 mt-4">
                ATS Compatibility Score
              </p>

              <div className="mt-6 text-center">

                <p className="text-gray-500">
                  Uploaded Resume
                </p>

                <p className="font-semibold">
                  {resumeName}
                </p>

              </div>

            </div>

          </div>

          {/* Summary */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Resume Summary
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                <span>
                  Strong MERN Stack Project Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                <span>
                  GitHub Portfolio Available
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                <span>
                  Technical Skills Well Listed
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaTimesCircle className="text-red-500" />
                <span>
                  Achievements Section Missing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaTimesCircle className="text-red-500" />
                <span>
                  Resume Summary Can Be Improved
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ATS Analysis */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            ATS Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-green-50 p-4 rounded-xl text-center">

              <h3 className="font-bold text-green-600">
                Keywords
              </h3>

              <p className="text-2xl font-bold mt-2">
                92%
              </p>

            </div>

            <div className="bg-blue-50 p-4 rounded-xl text-center">

              <h3 className="font-bold text-blue-600">
                Formatting
              </h3>

              <p className="text-2xl font-bold mt-2">
                88%
              </p>

            </div>

            <div className="bg-orange-50 p-4 rounded-xl text-center">

              <h3 className="font-bold text-orange-600">
                Readability
              </h3>

              <p className="text-2xl font-bold mt-2">
                90%
              </p>

            </div>

          </div>

        </div>

        {/* Skills */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Skills Detected
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Java",
              "Python",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Recommended Skills */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Recommended Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "System Design",
              "Docker",
              "CI/CD",
              "Testing",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-red-100 text-red-600 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Suggestions */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Improvement Suggestions
          </h2>

          <div className="space-y-4">

            <div className="flex gap-3">
              <FaLightbulb className="text-yellow-500 mt-1" />
              <p>
                Add measurable achievements and project impact.
              </p>
            </div>

            <div className="flex gap-3">
              <FaLightbulb className="text-yellow-500 mt-1" />
              <p>
                Include internship or leadership experience.
              </p>
            </div>

            <div className="flex gap-3">
              <FaLightbulb className="text-yellow-500 mt-1" />
              <p>
                Add links to GitHub, LinkedIn and Portfolio.
              </p>
            </div>

            <div className="flex gap-3">
              <FaLightbulb className="text-yellow-500 mt-1" />
              <p>
                Optimize resume keywords for ATS systems.
              </p>
            </div>

          </div>

        </div>

        {/* Strength Level */}

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-8 mt-8 shadow-lg">

          <div className="flex items-center gap-4">

            <FaChartLine className="text-4xl" />

            <div>

              <h2 className="text-2xl font-bold">
                Resume Strength Level
              </h2>

              <p className="mt-2">
                {score >= 95
                  ? "Excellent resume. Ready for top internship and placement opportunities."
                  : score >= 90
                  ? "Strong resume with minor improvements needed."
                  : "Good resume. Add more achievements and project impact to increase ATS score."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeResult;
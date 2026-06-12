import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaFileUpload } from "react-icons/fa";

function ResumeAnalyzer() {
  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Resume Analyzer
        </h1>

        <p className="text-gray-500 mb-8">
          Upload your resume and get AI feedback
        </p>

        <div className="bg-white rounded-2xl p-10 shadow-sm max-w-2xl">

          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">

            <FaFileUpload className="text-5xl text-purple-600 mx-auto mb-4" />

            <h2 className="text-xl font-semibold">
              Upload Resume
            </h2>

            <p className="text-gray-500 mt-2">
              PDF, DOCX supported
            </p>

            <input
              type="file"
              className="mt-6"
            />

            <Link
              to="/resume-result"
              className="
              block
              mt-6
              bg-purple-600
              text-white
              px-6
              py-3
              rounded-xl
              "
            >
              Analyze Resume
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeAnalyzer;
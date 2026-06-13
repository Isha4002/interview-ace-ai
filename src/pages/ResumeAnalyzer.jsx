import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaFileUpload,
  FaFilePdf,
  FaCheckCircle,
} from "react-icons/fa";

function ResumeAnalyzer() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a resume first.");
      return;
    }

    navigate("/resume-result");
  };

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <h1 className="text-4xl font-bold mb-2">
          Resume Analyzer 📄
        </h1>

        <p className="text-gray-500 mb-8">
          Upload your resume and receive detailed AI-style feedback.
        </p>

        {/* Upload Card */}

        <div className="bg-white rounded-3xl p-10 shadow max-w-3xl">

          <div className="border-2 border-dashed border-purple-300 rounded-3xl p-12 text-center">

            <FaFileUpload className="text-6xl text-purple-600 mx-auto mb-6" />

            <h2 className="text-2xl font-bold">
              Upload Your Resume
            </h2>

            <p className="text-gray-500 mt-3">
              Supported formats: PDF, DOC, DOCX
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
              className="mt-8"
            />

            {file && (
              <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center gap-4">

                <FaFilePdf className="text-red-500 text-3xl" />

                <div className="text-left">

                  <h3 className="font-semibold">
                    {file.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>

                </div>

                <FaCheckCircle className="ml-auto text-green-500 text-2xl" />

              </div>
            )}

            {/* <button
              onClick={handleAnalyze}
              className="
              mt-8
              bg-purple-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-purple-700
              transition
              "
            >
              Analyze Resume
            </button> */}


            <button
  onClick={() => {
    if (!file) {
      alert("Please upload a resume");
      return;
    }

    localStorage.setItem(
      "resumeName",
      file.name
    );

    navigate("/resume-result");
  }}
  className="
  mt-6
  bg-purple-600
  text-white
  px-6
  py-3
  rounded-xl
  "
>
  Analyze Resume
</button>

          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg">
              ATS Score
            </h3>

            <p className="text-gray-500 mt-2">
              Check how ATS-friendly your resume is.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg">
              Skill Analysis
            </h3>

            <p className="text-gray-500 mt-2">
              Identify strengths and missing skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg">
              Improvement Tips
            </h3>

            <p className="text-gray-500 mt-2">
              Get actionable suggestions to improve.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeAnalyzer;
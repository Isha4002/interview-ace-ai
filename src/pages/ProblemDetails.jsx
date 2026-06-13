
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import axios from "axios";

function ProblemDetails() {
  const navigate = useNavigate();

  const [output, setOutput] = useState("");

  const starterCode = {
    java: `public class Main {
    public static void main(String[] args) {

    }
}`,

    python: `def solve():
    pass`,

    cpp: `#include <iostream>
using namespace std;

int main() {

}`,

    javascript: `function solve() {

}`,
  };

  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState(starterCode.java);

  const handleReset = () => {
    setCode(starterCode[language]);
    setOutput("Editor Reset Successfully 🔄");
  };

  const handleSolved = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
  "https://interview-ace-ai-sd8f.onrender.com/api/auth/dsa",
  {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setOutput(
        `Problem Marked as Solved 🎉 Total Solved: ${res.data.dsaSolved}`
      );

    } catch (error) {
      setOutput(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7FC] p-8">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* Left Side */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-4xl font-bold">
                Two Sum
              </h1>

              <div className="flex gap-3 mt-3">

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Easy
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  Arrays
                </span>

              </div>

            </div>

            <button
              onClick={() => navigate("/practice")}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Back
            </button>

          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Problem Statement
          </h2>

          <p className="text-gray-700 leading-8">
            Given an array of integers nums and an integer target,
            return indices of the two numbers such that they add up
            to target.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            Example 1
          </h2>

          <div className="bg-gray-100 rounded-xl p-4">
            <p>
              Input: nums = [2,7,11,15], target = 9
            </p>

            <p>
              Output: [0,1]
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            Constraints
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>2 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            <li>-10⁹ ≤ target ≤ 10⁹</li>
          </ul>

        </div>

        {/* Right Side */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-semibold">
              Code Editor
            </h2>

            <select
              value={language}
              onChange={(e) => {
                const lang = e.target.value;
                setLanguage(lang);
                setCode(starterCode[lang]);
              }}
              className="border rounded-lg px-4 py-2"
            >
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="javascript">
                JavaScript
              </option>
            </select>

          </div>

          <Editor
            height="500px"
            language={language}
            value={code}
            onChange={(value) =>
              setCode(value || "")
            }
            theme="vs-dark"
          />

          <div className="flex flex-wrap gap-4 mt-6">

            <button
              onClick={() =>
                setOutput(
                  "Code Executed Successfully 🚀"
                )
              }
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Run Code
            </button>

            <button
              onClick={() =>
                setOutput(
                  "Solution Submitted Successfully ✅"
                )
              }
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
            >
              Submit
            </button>

            <button
              onClick={handleSolved}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
            >
              Mark as Solved
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-300 px-6 py-3 rounded-xl hover:bg-gray-400"
            >
              Reset Code
            </button>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold mb-2">
              Output
            </h3>

            <div
              className="
              bg-black
              text-green-400
              rounded-xl
              p-4
              min-h-[120px]
              font-mono
              "
            >
              {output ||
                "Run your code to see output..."}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProblemDetails;


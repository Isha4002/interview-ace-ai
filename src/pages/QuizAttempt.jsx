import { useState } from "react";
import Sidebar from "../components/Sidebar";

function QuizAttempt() {
  const questions = [
    {
      question:
        "What is the output of typeof [] in JavaScript?",
      options: ["object", "array", "undefined", "null"],
      answer: "object",
    },
  ];

  const [selected, setSelected] = useState("");

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <div className="flex justify-between mb-8">

          <h1 className="text-3xl font-bold">
            JavaScript Basics Quiz
          </h1>

          <div className="text-purple-600 font-semibold">
            Question 1 of 10
          </div>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">

          <h2 className="text-xl font-semibold mb-8">
            {questions[0].question}
          </h2>

          <div className="space-y-4">

            {questions[0].options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`
                w-full
                text-left
                p-4
                rounded-xl
                border
                ${
                  selected === option
                    ? "bg-purple-100 border-purple-500"
                    : "bg-white"
                }
                `}
              >
                {option}
              </button>
            ))}

          </div>

          <button
            className="
            mt-8
            bg-purple-600
            text-white
            px-6
            py-3
            rounded-xl
            "
          >
            Next Question
          </button>

        </div>

      </div>
    </div>
  );
}

export default QuizAttempt;
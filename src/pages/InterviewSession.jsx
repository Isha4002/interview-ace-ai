import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function InterviewSession() {
  const questions = [
    "What is the difference between let, const and var in JavaScript?",
    "Explain React Hooks.",
    "What is Virtual DOM?",
    "What is Closure in JavaScript?",
    "Difference between SQL and NoSQL?"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(900); // 15 min

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    }
  };

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Frontend Developer Mock Interview
          </h1>

          <div className="bg-white px-4 py-2 rounded-xl shadow">
            ⏱ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Question Section */}

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <p className="text-gray-500 mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h2 className="text-xl font-semibold leading-8">
              {questions[currentQuestion]}
            </h2>

          </div>

          {/* Answer Section */}

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h2 className="text-xl font-semibold mb-4">
              Your Answer
            </h2>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="
              w-full
              h-72
              border
              rounded-xl
              p-4
              resize-none
              outline-none
              "
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-8">

          <button
            className="
            bg-red-500
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-red-600
            "
          >
            End Interview
          </button>

          <button
            onClick={nextQuestion}
            className="
            bg-purple-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-purple-700
            "
          >
            Next Question
          </button>

        </div>

      </div>
    </div>
  );
}

export default InterviewSession;
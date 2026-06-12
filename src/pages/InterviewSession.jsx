import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function InterviewSession() {
  const location = useLocation();
  const navigate = useNavigate();

  const role =
    location.state?.role || "Frontend Developer";

  const questions = [
    `Tell me about yourself as a ${role}.`,
    "Explain React Hooks.",
    "What is Virtual DOM?",
    "What is Closure in JavaScript?",
    "Difference between SQL and NoSQL?",
  ];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answer, setAnswer] = useState("");

  const [answers, setAnswers] = useState([]);

  const [completed, setCompleted] = useState(false);

  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          const finalScore =
            70 + Math.floor(Math.random() * 30);

          setScore(finalScore);
          setCompleted(true);

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
    const updatedAnswers = [
      ...answers,
      answer,
    ];

    setAnswers(updatedAnswers);

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setAnswer("");
    } else {
      const finalScore =
        70 + Math.floor(Math.random() * 30);

      setScore(finalScore);

      setCompleted(true);

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const updatedUser = {
        ...user,
        mockInterviews:
          (user?.mockInterviews || 0) + 1,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );
    }
  };

  if (completed) {
    return (
      <div className="bg-[#F8F7FC] min-h-screen flex items-center justify-center">

        <div className="bg-white p-10 rounded-3xl shadow-lg text-center w-[550px]">

          <h1 className="text-4xl font-bold mb-4">
            Interview Complete 🎉
          </h1>

          <div className="text-7xl font-bold text-green-600">
            {score}%
          </div>

          <p className="text-gray-500 mt-4">
            Great job! Keep practicing and improve your confidence.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">

            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="font-bold">
                Communication
              </h3>

              <p className="text-purple-600 text-2xl font-bold">
                8/10
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-bold">
                Technical
              </h3>

              <p className="text-green-600 text-2xl font-bold">
                9/10
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-bold">
                Confidence
              </h3>

              <p className="text-blue-600 text-2xl font-bold">
                8/10
              </p>
            </div>

          </div>

          <button
            onClick={() =>
              navigate("/mock-interviews")
            }
            className="
            mt-8
            bg-purple-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-purple-700
            "
          >
            Back To Interviews
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            {role} Mock Interview
          </h1>

          <div className="bg-white px-4 py-2 rounded-xl shadow">

            ⏱ {minutes}:
            {seconds < 10
              ? `0${seconds}`
              : seconds}

          </div>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow mb-8">

          <div className="w-full bg-gray-200 h-3 rounded-full mb-6">

            <div
              className="bg-purple-600 h-3 rounded-full"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            ></div>

          </div>

          <p className="text-gray-500">

            Question {currentQuestion + 1}
            {" "}of {questions.length}

          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl p-6 shadow">

            <h2 className="text-xl font-semibold leading-8">

              {questions[currentQuestion]}

            </h2>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <h2 className="text-xl font-semibold mb-4">
              Your Answer
            </h2>

            <textarea
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
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

        <div className="flex justify-between mt-8">

          <button
            onClick={() =>
              navigate("/mock-interviews")
            }
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
            {currentQuestion ===
            questions.length - 1
              ? "Finish Interview"
              : "Next Question"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default InterviewSession;
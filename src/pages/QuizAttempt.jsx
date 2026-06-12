import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { quizData } from "../data/quizData";

function QuizAttempt() {
  const navigate = useNavigate();
  const location = useLocation();

  const quizId =
  location.state?.id || "javascript";

const currentQuiz =
  quizData[quizId];

const questions =
  currentQuiz.questions;

const quizTitle =
  currentQuiz.title;

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selected, setSelected] =
    useState("");

  const [score, setScore] =
    useState(0);

  const [completed, setCompleted] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
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

  const handleNext = () => {
    let newScore = score;

    if (
      selected ===
      questions[currentQuestion].answer
    ) {
      newScore++;
    }

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setScore(newScore);
      setCurrentQuestion(
        currentQuestion + 1
      );
      setSelected("");
    } else {
      setScore(newScore);

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (user) {
        const updatedUser = {
          ...user,
          quizzesTaken:
            (user.quizzesTaken || 0) + 1,
        };

        localStorage.setItem(
          "user",
          JSON.stringify(updatedUser)
        );
      }

      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="bg-[#F8F7FC] min-h-screen flex items-center justify-center">

        <div className="bg-white p-10 rounded-3xl shadow-lg text-center w-[500px]">

          <h1 className="text-4xl font-bold mb-4">
            Quiz Completed 🎉
          </h1>

          <div className="text-7xl font-bold text-purple-600">
            {score}/{questions.length}
          </div>

          <p className="text-gray-500 mt-4">
            Score:
            {" "}
            {Math.round(
              (score / questions.length) *
                100
            )}
            %
          </p>

          <button
            onClick={() =>
              navigate("/quiz")
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
            Back To Quizzes
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
            {quizTitle}
          </h1>

          <div className="bg-white px-4 py-2 rounded-xl shadow">

            ⏱ {minutes}:
            {seconds < 10
              ? `0${seconds}`
              : seconds}

          </div>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow mb-6">

          <div className="w-full bg-gray-200 h-3 rounded-full">

            <div
              className="bg-purple-600 h-3 rounded-full"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />

          </div>

          <p className="mt-3 text-gray-500">

            Question {currentQuestion + 1}
            {" "}of {questions.length}

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow">

          <h2 className="text-2xl font-semibold mb-8">

            {
              questions[currentQuestion]
                .question
            }

          </h2>

          <div className="space-y-4">

            {questions[
              currentQuestion
            ].options.map((option) => (

              <button
                key={option}
                onClick={() =>
                  setSelected(option)
                }
                className={`
                w-full
                text-left
                p-4
                rounded-xl
                border
                transition
                ${
                  selected === option
                    ? "bg-purple-100 border-purple-500"
                    : "bg-white hover:bg-gray-50"
                }
                `}
              >
                {option}
              </button>

            ))}

          </div>

          <button
            onClick={handleNext}
            disabled={!selected}
            className="
            mt-8
            bg-purple-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-purple-700
            disabled:opacity-50
            "
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default QuizAttempt;
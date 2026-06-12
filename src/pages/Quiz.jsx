import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Quiz() {
  const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics Quiz",
      questions: 10,
    },
    {
      id: 2,
      title: "React Fundamentals Quiz",
      questions: 15,
    },
    {
      id: 3,
      title: "DSA Quiz",
      questions: 20,
    },
    {
      id: 4,
      title: "System Design Quiz",
      questions: 15,
    },
  ];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Quizzes
        </h1>

        <p className="text-gray-500 mb-8">
          Test your interview preparation
        </p>

        <div className="space-y-4">

          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold text-lg">
                  {quiz.title}
                </h2>

                <p className="text-gray-500">
                  {quiz.questions} Questions
                </p>
              </div>

              <Link
                to="/quiz-attempt"
                className="bg-purple-600 text-white px-5 py-2 rounded-xl"
              >
                Start Quiz
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Quiz;
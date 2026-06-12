import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaJs,
  FaReact,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

function Quiz() {
  const quizzes = [
  {
    id: "javascript",
    title: "JavaScript Basics Quiz",
    questions: 10,
    level: "Beginner",
    icon: <FaJs className="text-4xl text-yellow-500" />,
  },
  {
    id: "react",
    title: "React Fundamentals Quiz",
    questions: 5,
    level: "Intermediate",
    icon: <FaReact className="text-4xl text-blue-500" />,
  },
  {
    id: "dsa",
    title: "DSA Quiz",
    questions: 5,
    level: "Advanced",
    icon: <FaCode className="text-4xl text-purple-600" />,
  },
  {
    id: "systemdesign",
    title: "System Design Quiz",
    questions: 5,
    level: "Advanced",
    icon: <FaProjectDiagram className="text-4xl text-green-600" />,
  },
];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Quizzes 📝
        </h1>

        <p className="text-gray-500 mb-8">
          Test your knowledge and track your preparation.
        </p>

        {/* Banner */}

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg mb-8">

          <h2 className="text-3xl font-bold">
            Challenge Yourself
          </h2>

          <p className="mt-2 text-purple-100">
            Attempt quizzes and improve your interview readiness.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Available Quizzes
            </h3>

            <h2 className="text-4xl font-bold text-purple-600 mt-2">
              4
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Total Questions
            </h3>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              60
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Categories
            </h3>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              4
            </h2>
          </div>

        </div>

        {/* Quiz Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="
              bg-white
              p-6
              rounded-3xl
              shadow
              hover:shadow-xl
              transition
              "
            >

              <div className="mb-4">
                {quiz.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {quiz.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {quiz.questions} Questions
              </p>

              <div className="mt-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {quiz.level}
                </span>
              </div>

            <Link
  to="/quiz-attempt"
  state={{
    id: quiz.id,
    title: quiz.title,
    
  }}
  className="
  inline-block
  mt-6
  bg-purple-600
  text-white
  px-6
  py-3
  rounded-xl
  hover:bg-purple-700
  "
>
  Start Quiz →
</Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Quiz;
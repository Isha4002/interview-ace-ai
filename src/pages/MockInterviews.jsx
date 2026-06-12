import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaDatabase,
} from "react-icons/fa";

function MockInterviews() {
  const interviews = [
    {
      title: "Frontend Developer",
      questions: 15,
      level: "Beginner",
      icon: (
        <FaLaptopCode className="text-4xl text-purple-600" />
      ),
    },
    {
      title: "Backend Developer",
      questions: 15,
      level: "Intermediate",
      icon: (
        <FaServer className="text-4xl text-blue-600" />
      ),
    },
    {
      title: "Full Stack Developer",
      questions: 20,
      level: "Advanced",
      icon: (
        <FaLayerGroup className="text-4xl text-green-600" />
      ),
    },
    {
      title: "Data Scientist",
      questions: 20,
      level: "Advanced",
      icon: (
        <FaDatabase className="text-4xl text-orange-600" />
      ),
    },
  ];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <h1 className="text-4xl font-bold mb-2">
          Mock Interviews 🎤
        </h1>

        <p className="text-gray-500 mb-8">
          Practice role-based interviews and improve your confidence.
        </p>

        {/* Hero Banner */}

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg mb-8">

          <h2 className="text-3xl font-bold">
            Practice Real Interview Scenarios
          </h2>

          <p className="mt-3 text-purple-100">
            Get interview-ready with role-based mock interviews,
            technical questions and performance tracking.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow">

            <h3 className="text-gray-500">
              Available Interviews
            </h3>

            <h2 className="text-4xl font-bold text-purple-600 mt-2">
              4
            </h2>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <h3 className="text-gray-500">
              AI Powered
            </h3>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              100%
            </h2>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <h3 className="text-gray-500">
              Questions Pool
            </h3>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              70+
            </h2>

          </div>

        </div>

        {/* Interview Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {interviews.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              p-6
              rounded-3xl
              shadow
              hover:shadow-xl
              transition
              "
            >

              <div className="mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.questions} Interview Questions
              </p>

              <div className="flex gap-2 mt-4">

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {item.level}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  AI Powered
                </span>

              </div>

              <Link
                to="/interview-session"
                state={{ role: item.title }}
                className="
                inline-block
                mt-6
                bg-purple-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-purple-700
                transition
                "
              >
                Start Interview →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default MockInterviews;
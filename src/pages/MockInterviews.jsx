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
      icon: <FaLaptopCode className="text-3xl text-purple-600" />,
    },
    {
      title: "Backend Developer",
      questions: 15,
      icon: <FaServer className="text-3xl text-blue-600" />,
    },
    {
      title: "Full Stack Developer",
      questions: 20,
      icon: <FaLayerGroup className="text-3xl text-green-600" />,
    },
    {
      title: "Data Scientist",
      questions: 20,
      icon: <FaDatabase className="text-3xl text-orange-600" />,
    },
  ];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">
        <h1 className="text-4xl font-bold mb-2">
          Mock Interviews
        </h1>

        <p className="text-gray-500 mb-8">
          Practice role-based interviews with AI
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {interviews.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              hover:shadow-lg
              transition
              "
            >
              <div className="mb-4">
                {item.icon}
              </div>

              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.questions} Questions
              </p>

              <Link
                to="/interview-session"
                className="
                inline-block
                mt-5
                bg-purple-600
                text-white
                px-5
                py-2
                rounded-xl
                hover:bg-purple-700
                "
              >
                Start Interview
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MockInterviews;
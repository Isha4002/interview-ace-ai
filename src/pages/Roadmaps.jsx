import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaDatabase,
  FaJava,
  FaPython,
} from "react-icons/fa";

function Roadmaps() {
  const roadmaps = [
    {
      title: "Frontend Developer",
      tech: "HTML, CSS, JavaScript, React",
      progress: 65,
      icon: <FaLaptopCode className="text-4xl text-purple-600" />,
    },
    {
      title: "Backend Developer",
      tech: "Node.js, Express, MongoDB",
      progress: 40,
      icon: <FaServer className="text-4xl text-blue-600" />,
    },
    {
      title: "Full Stack Developer",
      tech: "MERN Stack",
      progress: 50,
      icon: <FaLayerGroup className="text-4xl text-green-600" />,
    },
    {
      title: "Data Scientist",
      tech: "Python, ML, Data Analysis",
      progress: 30,
      icon: <FaDatabase className="text-4xl text-orange-600" />,
    },
    {
      title: "Java Developer",
      tech: "Java, Spring Boot, MySQL",
      progress: 55,
      icon: <FaJava className="text-4xl text-red-600" />,
    },
    {
      title: "Python Developer",
      tech: "Python, Django, APIs",
      progress: 45,
      icon: <FaPython className="text-4xl text-yellow-600" />,
    },
  ];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <h1 className="text-4xl font-bold mb-2">
          Learning Roadmaps 🛣️
        </h1>

        <p className="text-gray-500 mb-8">
          Follow structured learning paths and track your progress.
        </p>

        {/* Banner */}

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg mb-8">

          <h2 className="text-3xl font-bold">
            Choose Your Career Path
          </h2>

          <p className="mt-3 text-purple-100">
            Learn step-by-step with curated roadmaps and become interview ready.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">
              Available Roadmaps
            </h3>

            <h2 className="text-4xl font-bold text-purple-600 mt-2">
              6
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">
              Topics Covered
            </h3>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              100+
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">
              Career Paths
            </h3>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              6
            </h2>
          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {roadmaps.map((roadmap, index) => (
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

              <div className="mb-4">
                {roadmap.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {roadmap.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {roadmap.tech}
              </p>

              <div className="mt-5">

                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">
                    Progress
                  </span>

                  <span className="font-semibold text-purple-600">
                    {roadmap.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">

                  <div
                    className="bg-purple-600 h-3 rounded-full"
                    style={{
                      width: `${roadmap.progress}%`,
                    }}
                  ></div>

                </div>

              </div>

              <Link
                to="/roadmap-details"
                state={{
                  roadmap: roadmap.title,
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
                transition
                "
              >
                View Roadmap →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Roadmaps;
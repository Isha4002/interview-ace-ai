import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Roadmaps() {
  const roadmaps = [
    {
      title: "Frontend Developer",
      tech: "HTML, CSS, JavaScript, React",
      progress: "65%",
    },
    {
      title: "Backend Developer",
      tech: "Node.js, Express, MongoDB",
      progress: "40%",
    },
    {
      title: "Full Stack Developer",
      tech: "MERN Stack",
      progress: "50%",
    },
    {
      title: "Data Scientist",
      tech: "Python, ML, Data Analysis",
      progress: "30%",
    },
  ];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Roadmaps
        </h1>

        <p className="text-gray-500 mb-8">
          Follow structured learning paths
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {roadmaps.map((roadmap, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h2 className="text-xl font-bold">
                {roadmap.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {roadmap.tech}
              </p>

              <p className="mt-3 text-purple-600 font-semibold">
                Progress: {roadmap.progress}
              </p>

              <Link
                to="/roadmap-details"
                className="
                inline-block
                mt-4
                bg-purple-600
                text-white
                px-5
                py-2
                rounded-xl
                "
              >
                View Roadmap
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Roadmaps;
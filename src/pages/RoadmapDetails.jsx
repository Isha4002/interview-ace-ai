import Sidebar from "../components/Sidebar";

function RoadmapDetails() {
  const topics = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-4">
          Frontend Developer Roadmap
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <div className="mb-8">

            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span>65%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">

              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "65%" }}
              ></div>

            </div>

          </div>

          <div className="space-y-4">

            {topics.map((topic, index) => (
              <div
                key={index}
                className="
                border
                rounded-xl
                p-4
                flex
                justify-between
                "
              >
                <span>{topic}</span>
                <span className="text-green-600">
                  ✓
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default RoadmapDetails;
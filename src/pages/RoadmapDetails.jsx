import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function RoadmapDetails() {
  const location = useLocation();

  const roadmapTitle =
    location.state?.roadmap ||
    "Frontend Developer";

  const defaultTopics = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Redux",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Testing",
    "Deployment",
  ];

  const [completedTopics, setCompletedTopics] =
    useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(
      roadmapTitle
    );

    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    }
  }, [roadmapTitle]);

  const toggleTopic = (topic) => {
    let updated;

    if (completedTopics.includes(topic)) {
      updated = completedTopics.filter(
        (t) => t !== topic
      );
    } else {
      updated = [...completedTopics, topic];
    }

    setCompletedTopics(updated);

    localStorage.setItem(
      roadmapTitle,
      JSON.stringify(updated)
    );
  };

  const progress = Math.round(
    (completedTopics.length /
      defaultTopics.length) *
      100
  );

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        {/* Header */}

        <h1 className="text-4xl font-bold mb-2">
          {roadmapTitle} Roadmap 🛣️
        </h1>

        <p className="text-gray-500 mb-8">
          Complete topics and track your learning journey.
        </p>

        {/* Progress Card */}

        <div className="bg-white p-8 rounded-3xl shadow mb-8">

          <div className="flex justify-between mb-4">

            <span className="font-semibold">
              Progress
            </span>

            <span className="text-purple-600 font-bold">
              {progress}%
            </span>

          </div>

          <div className="w-full bg-gray-200 h-4 rounded-full">

            <div
              className="bg-purple-600 h-4 rounded-full"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          <p className="mt-4 text-gray-500">
            {completedTopics.length} of{" "}
            {defaultTopics.length} topics completed.
          </p>

        </div>

        {/* Topics */}

        <div className="bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Learning Path
          </h2>

          <div className="space-y-4">

            {defaultTopics.map((topic, index) => (

              <div
                key={index}
                className="
                flex
                justify-between
                items-center
                border
                rounded-xl
                p-4
                hover:bg-gray-50
                transition
                "
              >

                <span className="font-medium">
                  {topic}
                </span>

                <input
                  type="checkbox"
                  checked={completedTopics.includes(
                    topic
                  )}
                  onChange={() =>
                    toggleTopic(topic)
                  }
                  className="w-5 h-5"
                />

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default RoadmapDetails;
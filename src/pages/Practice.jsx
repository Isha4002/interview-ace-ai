import { useState } from "react";

const questions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Array",
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topic: "Linked List",
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "String",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topic: "Array",
  },
  {
    id: 5,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    topic: "Tree",
  },
];

function Practice() {
  const [search, setSearch] = useState("");

  const filtered = questions.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F7FC] p-8">

      <h1 className="text-4xl font-bold mb-8">
        DSA Practice
      </h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Problems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        p-4
        rounded-xl
        border
        mb-8
        bg-white
        "
      />

      {/* Question List */}

      <div className="space-y-4">

        {filtered.map((q) => (
          <div
            key={q.id}
            className="
            bg-white
            p-5
            rounded-xl
            shadow-sm
            hover:shadow-lg
            transition
            flex
            justify-between
            items-center
            "
          >
            <div>
              <h2 className="font-semibold text-lg">
                {q.title}
              </h2>

              <p className="text-gray-500">
                {q.topic}
              </p>
            </div>

            <div className="flex items-center gap-4">

              <span
                className={`px-3 py-1 rounded-full text-sm
                ${
                  q.difficulty === "Easy"
                    ? "bg-green-100 text-green-600"
                    : q.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {q.difficulty}
              </span>

              <button
                className="
                bg-purple-600
                text-white
                px-4
                py-2
                rounded-lg
                "
              >
                Solve
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Practice;
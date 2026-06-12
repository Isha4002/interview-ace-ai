
import { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../data/questions";

function Practice() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [topic, setTopic] = useState("All");

  const user = JSON.parse(localStorage.getItem("user"));

  const filtered = questions.filter((q) => {
    const matchesSearch = q.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      filter === "All" || q.difficulty === filter;

    const matchesTopic =
      topic === "All" || q.topic === topic;

    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesTopic
    );
  });

  return (
    <div className="min-h-screen bg-[#F8F7FC] p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            DSA Practice
          </h1>

          <p className="text-gray-500 mt-2">
            Practice coding interview questions
          </p>
        </div>

        <div className="flex gap-4">

          <div className="bg-white px-6 py-4 rounded-xl shadow-sm">

            <h3 className="font-semibold">
              Total Questions
            </h3>

            <p className="text-2xl font-bold text-purple-600">
              {questions.length}
            </p>

          </div>

          <div className="bg-white px-6 py-4 rounded-xl shadow-sm">

            <h3 className="font-semibold">
              Solved Questions
            </h3>

            <p className="text-2xl font-bold text-green-600">
              {user?.dsaSolved || 0}
            </p>

          </div>

        </div>

      </div>

      {/* Difficulty Stats */}

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-green-100 p-5 rounded-xl">
          <h3 className="font-semibold">
            Easy
          </h3>

          <p className="text-3xl font-bold text-green-700">
            {
              questions.filter(
                (q) => q.difficulty === "Easy"
              ).length
            }
          </p>
        </div>

        <div className="bg-yellow-100 p-5 rounded-xl">
          <h3 className="font-semibold">
            Medium
          </h3>

          <p className="text-3xl font-bold text-yellow-700">
            {
              questions.filter(
                (q) => q.difficulty === "Medium"
              ).length
            }
          </p>
        </div>

        <div className="bg-red-100 p-5 rounded-xl">
          <h3 className="font-semibold">
            Hard
          </h3>

          <p className="text-3xl font-bold text-red-700">
            {
              questions.filter(
                (q) => q.difficulty === "Hard"
              ).length
            }
          </p>
        </div>

      </div>

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
        mb-6
        bg-white
        outline-none
        "
      />

      {/* Filters */}

      <div className="flex flex-wrap gap-3 mb-8">

        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-lg ${
            filter === "All"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("Easy")}
          className={`px-4 py-2 rounded-lg ${
            filter === "Easy"
              ? "bg-green-600 text-white"
              : "bg-green-100 text-green-600"
          }`}
        >
          Easy
        </button>

        <button
          onClick={() => setFilter("Medium")}
          className={`px-4 py-2 rounded-lg ${
            filter === "Medium"
              ? "bg-yellow-500 text-white"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          Medium
        </button>

        <button
          onClick={() => setFilter("Hard")}
          className={`px-4 py-2 rounded-lg ${
            filter === "Hard"
              ? "bg-red-600 text-white"
              : "bg-red-100 text-red-600"
          }`}
        >
          Hard
        </button>

        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-white"
        >
          <option value="All">
            All Topics
          </option>

          <option value="Arrays">
            Arrays
          </option>

          <option value="Strings">
            Strings
          </option>

          <option value="Linked List">
            Linked List
          </option>

          <option value="Trees">
            Trees
          </option>

          <option value="Graphs">
            Graphs
          </option>

          <option value="DP">
            Dynamic Programming
          </option>
        </select>

      </div>

      {/* Questions */}

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

              <div className="mt-2">

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {q.topic}
                </span>

              </div>

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

              <Link
                to={`/problem/${q.id}`}
                className="
                bg-purple-600
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-purple-700
                "
              >
                Solve
              </Link>

            </div>

          </div>
        ))}

        {filtered.length === 0 && (
          <div className="bg-white p-8 rounded-xl text-center text-gray-500">
            No questions found.
          </div>
        )}

      </div>

    </div>
  );
}

export default Practice;


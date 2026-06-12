import { Link } from "react-router-dom";
import { FaRobot, FaPlayCircle } from "react-icons/fa";
import hero from "../assets/hero.svg";

function Landing() {
  return (
    <div className="min-h-screen bg-[#F8F7FC]">

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-20 py-6">

        <div className="flex items-center gap-2">
          <FaRobot className="text-purple-600 text-xl" />

          <h1 className="text-xl font-bold text-slate-800">
            InterviewAce AI
          </h1>
        </div>

        <div className="hidden md:flex gap-10 text-slate-600 font-medium text-sm">

          <a href="#" className="hover:text-purple-600 transition">
            Features
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            Roadmaps
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            Pricing
          </a>

          <a href="#" className="hover:text-purple-600 transition">
            About
          </a>

        </div>

        <Link
          to="/signup"
          className="
          bg-purple-600
          text-white
          px-5
          py-2.5
          rounded-lg
          text-sm
          font-medium
          shadow-md
          hover:bg-purple-700
          transition
          "
        >
          Get Started
        </Link>

      </nav>

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-20 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <div className="max-w-lg">

            <h1
              className="
              text-5xl
              font-bold
              leading-[1.2]
              text-slate-900
              "
            >
              AI Powered

              <br />

              <span className="text-purple-600">
                Interview
              </span>{" "}

              Preparation

              <br />

              Platform
            </h1>

            <p
              className="
              text-slate-500
              text-lg
              mt-6
              leading-8
              "
            >
              Practice smarter with AI mock interviews,
              DSA practice, quizzes and personalized roadmaps.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                to="/signup"
                className="
                bg-purple-600
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                shadow-lg
                hover:bg-purple-700
                transition
                "
              >
                Get Started Free
              </Link>

              <button
                className="
                bg-white
                border
                border-slate-200
                px-6
                py-3
                rounded-xl
                flex
                items-center
                gap-2
                shadow-sm
                hover:shadow-md
                transition
                "
              >
                <FaPlayCircle className="text-purple-600" />
                Watch Demo
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            {/* Background Circle */}

            <div
              className="
              absolute
              w-[320px]
              h-[320px]
              bg-purple-100
              rounded-full
              "
            />

            {/* Floating Card */}

            <div
              className="
              absolute
              top-8
              left-10
              bg-white
              px-4
              py-2
              rounded-xl
              shadow-lg
              z-20
              "
            >
              🚀 Easy
            </div>

            {/* Floating Card */}

            <div
              className="
              absolute
              bottom-10
              right-10
              bg-white
              px-4
              py-2
              rounded-xl
              shadow-lg
              z-20
              "
            >
              🎯 Smart
            </div>

            {/* Hero Image */}

            <img
              src={hero}
              alt="Interview Preparation"
              className="
              relative
              z-10
              w-[280px]
              md:w-[320px]
              "
            />

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-20 pb-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-4xl font-bold text-purple-600">
              10K+
            </h2>

            <p className="text-slate-500 mt-2">
              Users
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-600">
              500K+
            </h2>

            <p className="text-slate-500 mt-2">
              Questions Solved
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-600">
              95%
            </h2>

            <p className="text-slate-500 mt-2">
              Success Rate
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-600">
              50+
            </h2>

            <p className="text-slate-500 mt-2">
              Companies
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Landing;
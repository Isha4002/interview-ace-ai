import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        InterviewAce AI
      </h1>

      <div className="flex gap-6">

        <Link to="/">Home</Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/practice">
          Practice
        </Link>

        <Link to="/quiz">
          Quiz
        </Link>

        <Link to="/aiinterview">
          AI Interview
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
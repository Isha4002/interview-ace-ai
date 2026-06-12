import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import AIInterview from "./pages/AIInterview";
import Quiz from "./pages/Quiz";
import Roadmaps from "./pages/Roadmaps";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/practice" element={<Practice />} />

        <Route path="/aiinterview" element={<AIInterview />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/roadmaps" element={<Roadmaps />} />

        <Route path="/resume" element={<ResumeAnalyzer />} />

        <Route path="/progress" element={<Progress />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
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
import ProblemDetails from "./pages/ProblemDetails";
import MockInterviews from "./pages/MockInterviews";
import InterviewSession from "./pages/InterviewSession";
import QuizAttempt from "./pages/QuizAttempt";
import ResumeResult from "./pages/ResumeResult";
import RoadmapDetails from "./pages/RoadmapDetails";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <Practice />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aiinterview"
          element={
            <ProtectedRoute>
              <AIInterview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmaps"
          element={
            <ProtectedRoute>
              <Roadmaps />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <ResumeAnalyzer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/problem/:id"
          element={
            <ProtectedRoute>
              <ProblemDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mock-interviews"
          element={
            <ProtectedRoute>
              <MockInterviews />
            </ProtectedRoute>
          }
        />

        <Route
          path="/interview-session"
          element={
            <ProtectedRoute>
              <InterviewSession />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resume-result"
          element={
            <ProtectedRoute>
              <ResumeResult />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmap-details"
          element={
            <ProtectedRoute>
              <RoadmapDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz-attempt"
          element={
            <ProtectedRoute>
              <QuizAttempt />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
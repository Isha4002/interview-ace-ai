# 🚀 InterviewAce AI

> A Full Stack Interview Preparation Platform built using the MERN Stack to help students prepare for coding interviews, mock interviews, quizzes, resume analysis, and structured learning roadmaps.

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![License](https://img.shields.io/badge/Status-Active-success)

---

## 📌 Overview

InterviewAce AI is a comprehensive interview preparation platform designed to provide students and aspiring software engineers with everything they need in one place.

The platform includes:

- DSA Practice Module
- Mock Interview System
- Interactive Quizzes
- Resume Analyzer
- Progress Tracking Dashboard
- Learning Roadmaps
- Authentication & User Management

The goal is to create a centralized platform that helps users track and improve their interview preparation journey.

---

## ✨ Features

### 🔐 Authentication System

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Persistent User Sessions

### 💻 DSA Practice Module

- Coding Problems
- Monaco Code Editor Integration
- Multi-Language Support
  - Java
  - Python
  - JavaScript
  - C++
- Mark Problems as Solved
- Track Progress

### 🎤 Mock Interview System

- Role-Based Interview Sessions
- Frontend Developer Interviews
- Backend Developer Interviews
- Full Stack Interviews
- Data Science Interviews
- Timer-Based Interview Experience

### 📝 Quiz Module

- Multiple Quiz Categories
- Interactive Question Navigation
- Score Calculation
- Quiz Completion Tracking
- Dashboard Integration

### 📄 Resume Analyzer

- Resume Upload Interface
- ATS Style Evaluation
- Resume Score Generation
- Skill Detection
- Improvement Suggestions
- Resume Strength Analysis

### 🗺️ Learning Roadmaps

- Frontend Developer Roadmap
- Backend Developer Roadmap
- Full Stack Roadmap
- Data Science Roadmap
- Progress Visualization

### 📊 Analytics Dashboard

- DSA Progress Tracking
- Mock Interview Statistics
- Quiz Statistics
- Daily Streak Tracking
- Weekly Progress Graph
- Recent Activity Feed

### 👤 User Profile

- Dynamic Profile Information
- Account Overview
- Progress Summary
- User Statistics

### ⚙️ Settings

- Update Profile Information
- Account Management
- User Preferences

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Recharts
- Monaco Editor
- React Icons
- Axios

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- CORS
- dotenv

### Database

- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```text
InterviewAce-AI
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── src
│   ├── assets
│   ├── components
│   │   ├── Sidebar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── DSAPractice.jsx
│   │   ├── ProblemDetails.jsx
│   │   ├── MockInterviews.jsx
│   │   ├── InterviewSession.jsx
│   │   ├── Quiz.jsx
│   │   ├── QuizAttempt.jsx
│   │   ├── Roadmaps.jsx
│   │   ├── RoadmapDetails.jsx
│   │   ├── ResumeAnalyzer.jsx
│   │   ├── ResumeResult.jsx
│   │   └── Progress.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Isha4002/interview-ace-ai.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📈 Future Enhancements

- AI-Powered Interview Generation
- Real-Time Code Execution
- Video Interview Analysis
- Leaderboards
- Company Specific Interview Tracks
- AI Resume Analysis
- Interview Performance Reports
- Personalized Learning Recommendations

---

## 🎯 Learning Outcomes

Through this project I gained hands-on experience with:

- Full Stack MERN Development
- REST API Design
- Authentication & Authorization
- MongoDB Integration
- React State Management
- Protected Routing
- Dashboard Development
- UI/UX Design
- Git & GitHub Workflow

---

## 👩‍💻 Author

### Isha Pal

Computer Science Student | MERN Stack Developer | Machine Learning Enthusiast

GitHub: https://github.com/Isha4002

---





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

⭐ Star the repository to support the project.

# 🚀 InterviewAce AI

> An AI-Powered Interview Preparation Platform built using the MERN Stack to help students prepare for coding interviews, mock interviews, quizzes, resume analysis, and structured learning roadmaps.

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-000000?logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-06B6D4?logo=tailwindcss\&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel\&logoColor=white)
![Render](https://img.shields.io/badge/Render-Backend-46E3B7?logo=render\&logoColor=white)

</div>

---

# 🔗 Live Links

### 🌐 Live Demo

https://interview-ace-ai-eight.vercel.app

### ⚙️ Backend API

https://interview-ace-ai-sd8f.onrender.com

### 📂 GitHub Repository

https://github.com/Isha4002/interview-ace-ai

---

# 📌 Overview

InterviewAce AI is a comprehensive full-stack interview preparation platform designed to help students and aspiring software engineers prepare effectively for technical interviews.

The platform combines coding practice, AI-assisted interview preparation, quizzes, learning roadmaps, resume analysis, progress tracking, and user analytics into a single centralized dashboard.

Instead of switching between multiple platforms, users can manage their complete interview preparation journey from one application.

---

# ✨ Features

## 🔐 Authentication System

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent User Sessions
* Secure User Management

---

## 💻 DSA Practice Module

* Curated Coding Questions
* Topic-Based Learning
* Difficulty Filtering
* Search Functionality
* Monaco Code Editor Integration
* Multi-Language Support
* Progress Tracking
* Solved Questions Counter

### Supported Languages

* Java
* Python
* JavaScript
* C++

---

## 🎤 Mock Interview System

* Frontend Developer Interviews
* Backend Developer Interviews
* Full Stack Developer Interviews
* Data Science Interviews
* Interactive Interview Sessions
* Timer-Based Mock Interviews
* Interview Completion Tracking

---

## 📝 Quiz Module

* Technical MCQs
* Interactive Quiz Interface
* Score Calculation
* Progress Tracking
* Dashboard Statistics Integration

---

## 📄 Resume Analyzer

* Resume Upload Interface
* ATS Style Evaluation
* Resume Scoring
* Skill Detection
* Missing Skill Recommendations
* Resume Strength Analysis
* Improvement Suggestions

---

## 🗺️ Learning Roadmaps

Structured learning paths for:

* Frontend Development
* Backend Development
* MERN Stack Development
* Data Structures & Algorithms
* Machine Learning
* Interview Preparation

---

## 📊 Analytics Dashboard

Track preparation through:

* DSA Problems Solved
* Mock Interviews Completed
* Quizzes Attempted
* Daily Learning Streaks
* Weekly Progress Graph
* Activity Feed
* Performance Overview

---

## 👤 User Profile

* Profile Management
* Progress Overview
* Learning Statistics
* Account Information

---

## ⚙️ Settings

* Profile Updates
* Account Preferences
* User Management

---

# 🏗️ System Architecture

```text
React + Tailwind CSS
          │
          ▼
     Express API
          │
          ▼
 JWT Authentication
          │
          ▼
 MongoDB Atlas
          │
          ▼
 User Analytics & Progress
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* Monaco Editor
* Recharts
* React Icons

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs
* dotenv
* CORS

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```text
InterviewAce-AI
│
├── backend
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── models
│   ├── routes
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
│   │   ├── Signup.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── Practice.jsx
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
├── public
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Isha4002/interview-ace-ai.git

cd interview-ace-ai
```

---

## Frontend Setup

```bash
npm install

npm run dev
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

# 📸 Screenshots

Add screenshots here after deployment.

```md
screenshots/
├── landing-page.png
├── dashboard.png
├── dsa-practice.png
├── mock-interview.png
├── quiz.png
├── resume-analyzer.png
```

---

# 📈 Future Enhancements

* AI Generated Interview Questions
* Real-Time Code Execution
* Company Specific Interview Tracks
* AI Resume Builder
* Video Mock Interviews
* Interview Performance Analytics
* Leaderboards
* Learning Recommendations
* Coding Contest Platform

---

# 🎯 Learning Outcomes

Through this project I gained practical experience in:

* Full Stack MERN Development
* REST API Design
* Authentication & Authorization
* MongoDB Database Integration
* Dashboard Development
* Protected Routing
* State Management
* Responsive UI Design
* Deployment & Hosting
* Git & GitHub Workflow
* Project Architecture Design

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

---


## 👩‍💻 Author

### Isha Pal

Computer Science Student | MERN Stack Developer | Machine Learning Enthusiast

**GitHub:** https://github.com/Isha4002

**Project Repository:** https://github.com/Isha4002/interview-ace-ai

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

It helps support future improvements and motivates continued development.

⭐ Star the repository if you like the project!

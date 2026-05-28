# AI Interview Coach

An AI-powered mock interview platform that helps users practice interviews by generating technical questions and evaluating answers using Gemini AI.

## Features

* Generate AI-based interview questions
* Select role and topic dynamically
* Answer questions one by one
* AI evaluates answers instantly
* Final interview score and feedback
* Simple frontend using HTML, CSS, and JavaScript
* Backend powered by Node.js and Express
* Gemini AI integration

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### AI

* Gemini API

---

## Project Structure

```bash
interviewCoach/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
PORT=5000
```

Start backend server:

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Open `client` folder using VS Code Live Server.

Frontend usually runs on:

```bash
http://127.0.0.1:5500
```

---

## API Endpoints

### Generate Questions

```http
POST /api/interview/start
```

Request Body:

```json
{
  "role": "Frontend Developer",
  "topic": "React"
}
```

---

### Evaluate Answer

```http
POST /api/interview/evaluate
```

Request Body:

```json
{
  "question": "What is useEffect in React?",
  "answer": "It is used for side effects in React."
}
```

---

## Future Improvements

* User Authentication
* Database Integration
* Voice Interviews
* Resume-Based Interviews
* AI Interview Analytics
* Coding Round Support
* React Frontend Migration

---


## Author

Vishal Kumar

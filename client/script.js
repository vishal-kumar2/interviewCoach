const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");

const roleInput = document.getElementById("role");
const topicInput = document.getElementById("topic");

const setupScreen = document.getElementById("setup-screen");
const interviewScreen = document.getElementById("interview-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("question-number");

const answerInput = document.getElementById("answer");

const resultsDiv = document.getElementById("results");

let questions = [];
let currentQuestion = 0;

let evaluations = [];

startBtn.addEventListener("click", startInterview);

submitBtn.addEventListener("click", submitAnswer);

async function startInterview() {

  const role = roleInput.value;
  const topic = topicInput.value;

  const response = await fetch(
    "http://localhost:8000/api/interview/start",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role,
        topic,
      }),
    }
  );

  const data = await response.json();

  questions = data.questions;

  setupScreen.classList.add("hidden");

  interviewScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {

  questionNumber.innerText =
    `Question ${currentQuestion + 1}/${questions.length}`;

  questionElement.innerText =
    questions[currentQuestion];

  answerInput.value = "";
}

async function submitAnswer() {

  const answer = answerInput.value;

  const response = await fetch(
    "http://localhost:5000/api/interview/evaluate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: questions[currentQuestion],
        answer,
      }),
    }
  );

  const data = await response.json();

  evaluations.push(data.evaluation);

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {

  interviewScreen.classList.add("hidden");

  resultScreen.classList.remove("hidden");

  let totalScore = 0;

  evaluations.forEach((item, index) => {

    totalScore += item.score;

    resultsDiv.innerHTML += `
      <div class="result-card">
        <h3>Question ${index + 1}</h3>

        <p><strong>Score:</strong> ${item.score}/10</p>

        <p><strong>Feedback:</strong> ${item.feedback}</p>

      </div>
    `;
  });

  resultsDiv.innerHTML += `
    <h2>Total Score:
      ${totalScore}/${evaluations.length * 10}
    </h2>
  `;
}
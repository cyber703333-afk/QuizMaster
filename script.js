// Questions array
const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = [
  document.getElementById("option0"),
  document.getElementById("option1"),
  document.getElementById("option2"),
  document.getElementById("option3")
];
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

// Load question
function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false; // enable buttons
  });
}

optionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const q = questions[currentQuestion];
    if(index === q.answer){
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    scoreEl.textContent = "Score: " + score;
    optionBtns.forEach(b => b.disabled = true);
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if(currentQuestion >= questions.length){
    alert("Quiz Over! Final Score: " + score);
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = "Score: " + score;
  }
  loadQuestion();
});

// Initial load
loadQuestion();

const questions = [
  { left: "Frontend", right: "Backend", q: "Which dev path excites you more?" },
  { left: "C++", right: "Python", q: "Which language would you code in forever?" },
  { left: "Dark Mode", right: "Light Mode", q: "Which UI do you prefer?" },
  { left: "GitHub", right: "Stack Overflow", q: "Where do you spend more time?" },
  { left: "AI Projects", right: "Web Apps", q: "What kind of projects do you love?" },
  { left: "Linux", right: "Windows", q: "Your go-to OS?" },
  { left: "VS Code", right: "IntelliJ", q: "Favorite IDE?" },
  { left: "Frontend Animations", right: "Backend APIs", q: "Which work do you enjoy?" },
  { left: "Debugging", right: "Deploying", q: "Which one stresses you less?" },
  { left: "JavaScript", right: "Python", q: "If you had to pick one forever?" },
];

let index = 0;
let score = 0;

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const roundEl = document.getElementById("round");
const totalRoundsEl = document.getElementById("totalRounds");
const questionEl = document.getElementById("question");

totalRoundsEl.textContent = questions.length;

function loadQuestion() {
  const q = questions[index];
  questionEl.textContent = q.q;
  leftBtn.textContent = q.left;
  rightBtn.textContent = q.right;
  roundEl.textContent = index + 1;
}

function choose(choice) {
  score++;
  scoreEl.textContent = score;
  leftBtn.disabled = true;
  rightBtn.disabled = true;

  if (choice === "left") {
    leftBtn.style.boxShadow = "0 0 20px #00ffff";
  } else {
    rightBtn.style.boxShadow = "0 0 20px #ff00ff";
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  index++;
  if (index >= questions.length) {
    // Restart loop instead of showing "Game Over"
    index = 0;
  }

  leftBtn.disabled = false;
  rightBtn.disabled = false;
  leftBtn.style.boxShadow = "";
  rightBtn.style.boxShadow = "";
  nextBtn.classList.add("hidden");
  loadQuestion();
}

function resetGame() {
  index = 0;
  score = 0;
  scoreEl.textContent = 0;
  nextBtn.classList.add("hidden");
  loadQuestion();
}

function shareResult() {
  const text = `I scored ${score} in the Coding This-or-That Game! 🚀`;
  if (navigator.share) navigator.share({ title: "This or That", text });
  else {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  }
}

document.getElementById("resetBtn").onclick = resetGame;
document.getElementById("shareBtn").onclick = shareResult;
leftBtn.onclick = () => choose("left");
rightBtn.onclick = () => choose("right");
nextBtn.onclick = nextQuestion;

loadQuestion();

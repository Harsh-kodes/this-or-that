const questions = [
  { optionA: "Pizza", optionB: "Burger" },
  { optionA: "Netflix", optionB: "YouTube" },
  { optionA: "Mountains", optionB: "Beach" },
  { optionA: "Dog", optionB: "Cat" },
  { optionA: "Books", optionB: "Movies" }
];

let currentIndex = 0;

const optionAButton = document.getElementById('optionA');
const optionBButton = document.getElementById('optionB');
const result = document.getElementById('result');

function showQuestion() {
  if (currentIndex < questions.length) {
    const current = questions[currentIndex];
    optionAButton.textContent = current.optionA;
    optionBButton.textContent = current.optionB;
  } else {
    document.getElementById('question-container').style.display = 'none';
    result.textContent = "Thanks for playing!";
  }
}

optionAButton.addEventListener('click', () => {
  currentIndex++;
  showQuestion();
});

optionBButton.addEventListener('click', () => {
  currentIndex++;
  showQuestion();
});

// Show the first question initially
showQuestion();
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});


const flashcards = [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
  { question: "What is JavaScript?", answer: "A scripting language for web development" }
];

let currentIndex = 0;
let showingQuestion = true;

const cardContent = document.getElementById("card-content");

function showCard() {
  showingQuestion = true;
  cardContent.textContent = flashcards[currentIndex].question;
}

function flipCard() {
  showingQuestion = !showingQuestion;
  cardContent.textContent = showingQuestion
    ? flashcards[currentIndex].question
    : flashcards[currentIndex].answer;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showCard();
}

showCard();
document.getElementById("card-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const newQuestion = document.getElementById("new-question").value.trim();
  const newAnswer = document.getElementById("new-answer").value.trim();

  if (newQuestion && newAnswer) {
    flashcards.push({ question: newQuestion, answer: newAnswer });
    currentIndex = flashcards.length - 1;
    showCard();

    // Clear form fields
    document.getElementById("new-question").value = "";
    document.getElementById("new-answer").value = "";
  }
});

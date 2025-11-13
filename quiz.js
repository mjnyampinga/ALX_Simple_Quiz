function checkAnswer() {
  // 1. Correct answer
  const correctAnswer = "4";

  // 2. Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  // If no option is selected
  if (!selectedOption) {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "#dc3545";
    return;
  }

  const userAnswer = selectedOption.value;

  // 3. Compare user's answer with correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545";
  }
}

// 4. Add event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

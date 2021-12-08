const quizForm = document.querySelector(".form-container");
const submitAnswerBtn = document.querySelector("#submit-btn");
const output_of_quiz_form = document.querySelector("#quiz-score-output");

const correctAnswers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "85°", "10°", "a + b + c", "no", "45°"]

function calculateScore() {

    let score = 0;
    let index = 0;
    let formResults = new FormData(quizForm)

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;

        }
        index = index + 1;
    }
    return output_of_quiz_form.innerText = "Your score is " + score;

}

submitAnswerBtn.addEventListener("click", calculateScore);
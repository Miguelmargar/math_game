let
score = 0,
scoreBox = document.getElementById("score"),
questionBox = document.getElementById("question"),
answerForm = document.getElementById("quizForm");

function setAddGame() {
    answerForm.setAttribute("data-gametype", "addition");
    addquiz();
}

function setSubGame() {
    answerForm.setAttribute("data-gametype", "substraction");
    subquiz();
}

function setMultiGame() {
    answerForm.setAttribute("data-gametype", "multiplication");
    multiquiz();
}
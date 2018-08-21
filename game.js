let
    score = 0,
    scoreBox = document.getElementById("score"),
    questionBox = document.getElementById("question"),
    answerForm = document.getElementById("quizForm"),
    easy = document.getElementById("level_easy"),
    medium = document.getElementById("level_medium"),
    hard = document.getElementById("level_hard");

// select level function--------------------------------------
function chooseLevel() {
    if (easy.checked) {
        answerForm.setAttribute("data-level", "easy");
    }
    else if (medium.checked) {
        answerForm.setAttribute("data-level", "medium");
    }
    else if (hard.checked) {
        answerForm.setAttribute("data-level", "hard");
    }
    return false;
}


// set sum, rest or multiplication challenge----------------------
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


// Sum function------------------------------------------------
function addquiz() {
    if (answerForm.getAttribute("data-level") == "easy") {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        questionBox.textContent = "What is: " + num1 + " + " + num2 + "?";
        answerForm["rightAnswer"].value = (num1 + num2);
    }
    else if (answerForm.getAttribute("data-level") == "medium") {
        let num1 = Math.floor(Math.random() * 50);
        let num2 = Math.floor(Math.random() * 50);
        questionBox.textContent = "What is: " + num1 + " + " + num2 + "?";
        answerForm["rightAnswer"].value = (num1 + num2);
    }
    else if (answerForm.getAttribute("data-level") == "hard") {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        questionBox.textContent = "What is: " + num1 + " + " + num2 + "?";
        answerForm["rightAnswer"].value = (num1 + num2);
    }
}
addquiz();


// Substraction function---------------------------------------
function subquiz() {
    if (answerForm.getAttribute("data-level") == "easy") {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);

        if (num1 >= num2) {
            questionBox.textContent = "What is: " + num1 + " - " + num2 + "?";
            answerForm["rightAnswer"].value = (num1 - num2);
        }
        else if (num1 < num2) {
            questionBox.textContent = "What is: " + num2 + " - " + num1 + "?";
            answerForm["rightAnswer"].value = (num2 - num1);
        }
    }
    else if (answerForm.getAttribute("data-level") == "medium") {
        let num1 = Math.floor(Math.random() * 50);
        let num2 = Math.floor(Math.random() * 50);

        if (num1 >= num2) {
            questionBox.textContent = "What is: " + num1 + " - " + num2 + "?";
            answerForm["rightAnswer"].value = (num1 - num2);
        }
        else if (num1 < num2) {
            questionBox.textContent = "What is: " + num2 + " - " + num1 + "?";
            answerForm["rightAnswer"].value = (num2 - num1);
        }
    }
    else if (answerForm.getAttribute("data-level") == "hard") {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);

        if (num1 >= num2) {
            questionBox.textContent = "What is: " + num1 + " - " + num2 + "?";
            answerForm["rightAnswer"].value = (num1 - num2);
        }
        else if (num1 < num2) {
            questionBox.textContent = "What is: " + num2 + " - " + num1 + "?";
            answerForm["rightAnswer"].value = (num2 - num1);
        }
    }
}
subquiz();


// Multiplication function---------------------------------------
function multiquiz() {
    if (answerForm.getAttribute("data-level") == "easy") {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);

        questionBox.textContent = "What is: " + num1 + " * " + num2 + "?";

        answerForm["rightAnswer"].value = (num1 * num2);
    }
    else if (answerForm.getAttribute("data-level") == "medium") {
        let num1 = Math.floor(Math.random() * 50);
        let num2 = Math.floor(Math.random() * 50);

        questionBox.textContent = "What is: " + num1 + " * " + num2 + "?";

        answerForm["rightAnswer"].value = (num1 * num2);
    }
    else if (answerForm.getAttribute("data-level") == "hard") {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);

        questionBox.textContent = "What is: " + num1 + " * " + num2 + "?";

        answerForm["rightAnswer"].value = (num1 * num2);
    }
}
multiquiz();


// check answer function ----------------------------------
function checkAnswer() {
    let gametype = answerForm.getAttribute("data-gametype");
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! You got it right");
        score++;
    }
    else {
        alert("Oh no! A wrong answer: (");
        score--;
    }
    answerForm["answer"].value = "";
    scoreBox.textContent = score;
    if (gametype == "addition") {
        addquiz();
    }
    else if (gametype == "substraction") {
        subquiz();
    }
    else if (gametype == "multiplication") {
        multiquiz();
    }
    return false;
}

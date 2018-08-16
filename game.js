let
score = 0,
scoreBox = document.getElementById("score"),
questionBox = document.getElementById("question"),
answerForm = document.getElementById("quizForm"),
level = document.getElementById("chooseLevelForm").getAttribute("data-level");

// select level function--------------------------------------
function chooseLevel() {
    if(document.getElementById('level_easy').checked) {
        level = 'easy';
    }else if (document.getElementById('level_medium').checked) {
        level = 'medium';
    }else {
        level = 'hard';
    }
    console.log(level)
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


// create sum, rest and multiplication functions------------------
function addquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    questionBox.textContent = "What is: " + num1 + " + " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 + num2);
}
addquiz();

function subquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    if (num1 >= num2) {
        questionBox.textContent = "What is: " + num1 + " - " + num2 + "?";
        answerForm["rightAnswer"].value = (num1 - num2);
    } else if (num1 < num2) {
        questionBox.textContent = "What is: " + num2 + " - " + num1 + "?";
        answerForm["rightAnswer"].value = (num2 - num1);
    }
}
subquiz();

function multiquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    questionBox.textContent = "What is: " + num1 + " * " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 * num2);
}
multiquiz();

// check answer function ----------------------------------
function checkAnswer() {
    let gametype = answerForm.getAttribute("data-gametype");
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! You got it right");
        score++;
    } else {
        alert("Oh no! A wrong answer: (");
        score--;
    }
    answerForm["answer"].value = "";
    scoreBox.textContent = score;
    if (gametype == "addition") {
        addquiz();
    } else if (gametype == "substraction") {
        subquiz();
    } else if (gametype == "multiplication") {
        multiquiz();
    }
    return false;
}

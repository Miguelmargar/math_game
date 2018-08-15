let
score = 0,
scoreBox = document.getElementById("score"),
questionBox = document.getElementById("question"),
answerForm = document.getElementById("quizForm");


// set sum, rest or multiplication challenge
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


// create sum, rest and multiplication functions
function addquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 + num2);
}
addquiz();

function subquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    if (num1 >= num2) {
        questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
        answerForm["rightAnswer"].value = (num1 - num2);
    } else if (num1 < num2) {
        questionbox.textContent = "What is: " + num2 + " - " + num1 + "?";
        answerForm["rightAnswer"].value = (num2 - num1);
    }
}
subquiz();

function multiquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 * num2);
}
multiquiz();




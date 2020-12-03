
function start() {
    document.getElementById("none").innerHTML.button.style.visibility = "hidden";
    button.style.display = "none";
    
}

let array_of_questions = [
    {  
        question : "Commonly used data types do NOT include:"
        choiceA : "strings"
        choiceB : "booleans" 
        choiceC : "objects"
        choiceD : "alerts"
        correct: "D"

    }, {

        question : "The condition in an if / else statement is enclosed within ______:"
        choiceA : "quotes"
        choiceB : "curly brackets"
        choiceC : "parenthesis"
        choiceD : "pizza slices"
        correct : "B"

    }, {

        question : "Arrays in JavaScript can be used to store ________:"
        choiceA : "numbers and strings"
        choiceB : "other arrays"
        choiceC : "booleans"
        choiceD : "all of the above"
        correct : "D"

    }

]

var questions = document.getElementById("questionSection")

let current_question = 0;

function prompt () {
    var question = document.getElementById("question")
    var choiceA = document.getElementById("choiceA")
    var choiceB = document.getElementById("choiceB")
    var choiceC = document.getElementById("choiceC")
    var choiceD = document.getElementById("choiceD")

    question.innerHTML = array_of_questions[current_question].question;
    choiceA.innerHTML = array_of_questions[current_question].question;
    choiceB.innerHTML = array_of_questions[current_question].question;
    choiceC.innerHTML = array_of_questions[current_question].question;
    choiceD.innerHTML = array_of_questions[current_question].question;
}
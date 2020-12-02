// const start = document.getElementById("btn");
// const quiz = document.getElementById("quiz");
// const question = document.getElementById("question");
// const choiceA = document.getElementById("choiceA");
// const choiceB = document.getElementById("choiceB");
// const choiceC = document.getElementById("choiceC");
// const choiceD = document.getElementById("choiceD");


var questions = document.getElementById("questionSection")


let array_of_questions = [
    {  
        question : "Commonly used data types do NOT include:"
        choiceA : "strings"
        choiceB : "booleans" 
        choiceC : "objects"
        choiceD : "alerts"

    }, {

        question : "The condition in an if / else statement is enclosed within ______:"
        choiceA : "quotes"
        choiceB : "curly brackets"
        choiceC : "parenthesis"
        choiceD : "pizza slices"

    }, {

        question : "Arrays in JavaScript can be used to store ________:"
        choiceA : "numbers and strings"
        choiceB : "other arrays"
        choiceC : "booleans"
        choiceD : "all of the above"

    }

]

let current_question =0;

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
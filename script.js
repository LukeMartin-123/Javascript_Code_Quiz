const startButton = document.getElementById("start");
const hiddenElements = document.getElementById("questionSection")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answerChoices") 

startButton.addEventListener("click", startGame)
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB")
var choiceC = document.getElementById("choiceC")
var choiceD = document.getElementById("choiceD")
currentQuestionIndex = 0 

function startGame() {
    startButton.classList.add('hide')
    hiddenElements.classList.remove('hide') 
    
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(currentQuestionIndex)

}

function showQuestion() {
    questionElement.innerHTML = availableQuestions[currentQuestionIndex].question
    choiceA.innerHTML = availableQuestions[currentQuestionIndex].choiceA;
    choiceB.innerHTML = availableQuestions[currentQuestionIndex].choiceB;
    choiceC.innerHTML = availableQuestions[currentQuestionIndex].choiceC;
    choiceD.innerHTML = availableQuestions[currentQuestionIndex].choiceD; 
    document.getElementsByClassName("answerChoices")
    choiceA.addEventListener('click', selectAnswer)
    choiceB.addEventListener('click', selectAnswer)
    choiceC.addEventListener('click', selectAnswer)
    choiceD.addEventListener('click', selectAnswer)
    highScores.addEventListener('click', selectAnswer)
}

function selectAnswer (e) {
    const selectedbutton = e.target.innerHTML
    currentQuestionIndex++; 
    if (currentQuestionIndex <= availableQuestions.length) {
        setNextQuestion()
    }
    else {
        // hide questions and show scoreboard/let user submit score with initials
        hiddenElements.classList.add('hide') 

    }

}


var acceptingAnswers = true;


const availableQuestions = [
    {  
        question : "Commonly used data types do NOT include:",
        choiceA : "strings",
        choiceB : "booleans", 
        choiceC : "objects",
        choiceD : "alerts",
        correct: "D",

    }, {

        question : "The condition in an if / else statement is enclosed within ______:",
        choiceA : "quotes",
        choiceB : "curly brackets",
        choiceC : "parenthesis",
        choiceD : "pizza slices",
        correct : "B",

    }, {

        question : "Arrays in JavaScript can be used to store ________:",
        choiceA : "numbers and strings",
        choiceB : "other arrays",
        choiceC : "booleans",
        choiceD : "all of the above",
        correct : "D",

    }

]



const MAX_QUESTIONS = 3

// getNewQuestion =
//     if(availableQuestions.length === 0)
//         localStorage.setItem('mostRecentScore', score)



// function showQuestion() {
//     var q = questions;
//     question.innerHTML = array_of_questions[current_question].question;
//     choiceA.innerHTML = array_of_questions[current_question].question;
//     choiceB.innerHTML = array_of_questions[current_question].question;
//     choiceC.innerHTML = array_of_questions[current_question].question;
//     choiceD.innerHTML = array_of_questions[current_question].question;
// }



for (i = -1; i < availableQuestions.length; i++) {

  }




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
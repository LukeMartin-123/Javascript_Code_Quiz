const startButton = document.getElementById("start");
const hiddenElements = document.getElementById("questionSection")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answerChoices") 
const timerEl = document.getElementById("countdown")
const initialInput = document.getElementById("scoreLog")
const multipleChoice = document.getElementById("myButtons")
var timeLeft = 60;
var endTime; 
var timeInterval;

startButton.addEventListener("click", startGame)
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB")
var choiceC = document.getElementById("choiceC")
var choiceD = document.getElementById("choiceD")
currentQuestionIndex = 0 

function timer() {
    timeInterval = setInterval(function(timeRunning) {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if (timeLeft <= 0) {clearInterval(timeInterval);
      }
    }, 1000);

    
}
  

function startGame() {
    startButton.classList.add('hide')
    hiddenElements.classList.remove('hide') 
    timer()
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
}

function selectAnswer (e) {
    var selectedbutton = e.target.innerHTML;
    console.log(selectedbutton);
    console.log(availableQuestions[currentQuestionIndex].correct);
    if (selectedbutton != availableQuestions[currentQuestionIndex].correct) {timeLeft -= 10}
    currentQuestionIndex++; 
  

    if (currentQuestionIndex <= availableQuestions.length -1) {
        setNextQuestion()
    }

    else {
        // hide questions and show scoreboard/let user submit score with initials
        hiddenElements.classList.add('hide') 
        initialInput.classList.remove('scoreLog')
        var endTime = timeLeft; 
        timeLeft = endTime;
        function stopTimer() {
            clearInterval(timeInterval);   
        }
        stopTimer()
        console.log(endTime)
    }
    
}



document.getElementsByClassName("answerChoices")

const availableQuestions = [
    {  
        question : "Commonly used data types do NOT include:",
        choiceA : "strings",
        choiceB : "booleans", 
        choiceC : "objects",
        choiceD : "alerts",
        correct: "alerts",

    }, {

        question : "The condition in an if / else statement is enclosed within ______:",
        choiceA : "quotes",
        choiceB : "curly brackets",
        choiceC : "parenthesis",
        choiceD : "pizza slices",
        correct : "curly brackets",

    }, {

        question : "Arrays in JavaScript can be used to store ________:",
        choiceA : "numbers and strings",
        choiceB : "other arrays",
        choiceC : "booleans",
        choiceD : "all of the above",
        correct : "all of the above",

    }

]



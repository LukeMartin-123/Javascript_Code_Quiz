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
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray = []

if(localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
    localStorage.setItem('items', JSON.stringify(itemsArray))
}

const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

startButton.addEventListener("click", startGame)
let choiceA = document.getElementById("choiceA")
let choiceB = document.getElementById("choiceB")
let choiceC = document.getElementById("choiceC")
let choiceD = document.getElementById("choiceD")
currentQuestionIndex = 0 

function timer() {
    timeInterval = setInterval(function(timeRunning) {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if (timeLeft <= -1) {clearInterval(timeInterval);
        hiddenElements.classList.add('hide') 
        initialInput.classList.remove('scoreLog')
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
    let selectedbutton = e.target.innerHTML;
    if (selectedbutton != availableQuestions[currentQuestionIndex].correct) {timeLeft -= 10}
    currentQuestionIndex++; 

    if (currentQuestionIndex <= availableQuestions.length -1) {
        setNextQuestion()
    }

    else {
        // hide questions and show scoreboard/let user submit score with initials
        hiddenElements.classList.add('hide') 
        initialInput.classList.remove('scoreLog')

        let endTime = timeLeft; 
        timeLeft = endTime;

        function stopTimer() {
            clearInterval(timeInterval);   
        }

        stopTimer()
    }
    
}


form.addEventListener('submit', function (e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    itemsArray.forEach((item) => {
        liMaker(item)
    })
    input.value = ''
})

const clearButton = document.querySelector('#clear-all')

clearButton.addEventListener('click', function () {
    localStorage.clear()
    itemsArray =[]
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

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



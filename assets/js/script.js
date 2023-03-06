var body = document.querySelector("#body")
var startButton = document.querySelector("#start-button")
var quizBoxContainer = document.querySelector("#quiz-box")
var resultsText = document.querySelector('#results')
var timer = document.querySelector("#timer")
var amountCorrect = document.querySelector('#amount-correct')
var quizAnswerBox = document.querySelector("#answer-button-holder")
var currentQuestion = document.querySelector("#current-question")
const questionTotal = 10;
const highScoreList = [];
let correctAnswers = 0;
let time = 600;
let questionNumber = 0

const questions = {
    0: {
        question: 'What is considered the skeleton of your website?',
        answers: {
            0: 'A: JavaScript',
            1: 'B: HTML',
            2: 'C: CSS',
            3: 'D: VS Code'
        },
        correctAnswer: 'B: HTML'
    },
    1: {
        question: 'What is console.log() used for?',
        answers: {
            0: 'A: Showing the user the output of whatever variable is inside',
            1: 'B: Debugging',
            2: 'C: Testing if an expression is true or false',
            3: 'D: All of the above'
        },
        correctAnswer: 'D: All of the above'
    },
    2: {
        question: 'What is Github',
        answers: {
            0: 'A: A place to write code',
            1: 'B: A system used to store the progress of your coding project',
            2: 'C: An Internet hosting service for software development and version control using Git',
            3: 'D: None of the above'
        },
        correctAnswer: 'C: An Internet hosting service for software development and version control using Git'
    },
    3: {
        question: 'What will be returned after the following code console.log(5 < 6)',
        answers: {
            0: 'A: True',
            1: 'B: False',
            2: 'C: Undefined',
            3: 'D: 5 < 6'
        },
        correctAnswer: 'A: True'
    },
    4: {
        question: 'What will be returned after the following code console.log(5 == "6")',
        answers: {
            0: 'A: True',
            1: 'B: False',
            2: 'C: Undefined',
            3: 'D: 5 < 6'
        },
        correctAnswer: 'B: False'
    },
    5: {
        question: 'What attribute do you use in an <img> tag add the link to the photo',
        answers: {
            0: 'A: href',
            1: 'B: photoLink',
            2: 'C: src',
            3: 'D: None of the above'
        },
        correctAnswer:'C: src',
    },
    6: {
        question: 'In CSS what does "margin: 10px 5px;" mean?',
        answers: {
            0: 'A: margin of 10px on the left and 5px on the right',
            1: 'B: margin of 10px vertical and 5px horizontal',
            2: 'C: margin of 10px horizontal and 5px vertical',
            3: 'D: None of the above'
        },
        correctAnswer: 'B: margin of 10px vertical and 5px horizontal'
    },
    7: {
        question: 'Which justify-content value will generate space on the left right and middle of 2 divs on the same row?',
        answers: {
            0: 'A: space-between',
            1: 'B: end',
            2: 'C: center',
            3: 'D: space-around'
        },
        correctAnswer: 'D: space-around'
    },
    8: {
        question: 'If I want to move an object based on the parent it resides in and using property "top" which property do I have to use first?',
        answers: {
            0: 'A: position: relative;',
            1: 'B: display: flex;',
            2: 'C: display: grid;',
            3: 'D: position: absolute;'
        },
        correctAnswer: 'A: position: relative;'
    },
    9: {
        question: 'Which code language makes your website dynamic, interactive, and engaging?',
        answers: {
            0: 'A: JavaScript',
            1: 'B: HTML',
            2: 'C: CSS',
            3: 'D: VS Code'
        },
        correctAnswer: 'A: JavaScript'
    }
}

const quiz = {
    userAnswers: [],
    timeRanOut: false,
    settingTimer: ()=> {
        timer.textContent = time + " seconds left till quiz ends.";
        var timerInterval = setInterval(function() {
            time--;
            timer.textContent = time + " seconds left till quiz ends.";
        
            if(time === 0) {
              // Stops execution of action at set interval
              clearInterval(timerInterval);
              // Calls function to create and append image
              quiz.timeRanOut = true;

            }
        
          }, 1000);
    },

    selectAnswer: (e)=>{
        e.preventDefault()
        var resultMessage;
        var actualAnswer = questions[questionNumber].correctAnswer;
        var questionBox = e.target.parentElement.parentElement.parentElement;
        console.log(actualAnswer)
        var userAnswer = e.target.value;
        quiz.userAnswers.push(userAnswer)
        
        var answerResult = quiz.compareAnswer(userAnswer, actualAnswer)

        if(answerResult){
            resultMessage = 'You are Correct!!!';
            correctAnswers++;

        } else {
            time = time -30;
            timer.textContent = time + " seconds left till quiz ends.";
           resultMessage = "You were wrong the anwser is " + actualAnswer;
        }

        console.log(amountCorrect)

        amountCorrect.textContent = correctAnswers + ' / 10'
        questionNumber++;
        resultsText.textContent = resultMessage;
  
        questionBox.remove()
        quiz.newQuestion(questionNumber)


    },

    generateFinishScreen: ()=>{
        questionNumber = 0;
        
        
        if(quiz.timeRanOut){

        }
    },

    createQuizBox: (e)=>{
        e.preventDefault()
        quiz.newQuestion(0)
    },
    
    compareAnswer: (userChoice, actualAnswer)=>{
        if(userChoice == actualAnswer){
            return true
        } else {
            return false
        }
    },

    newQuestion: (questionNumber)=>{
        var quizBox = document.createElement("div");
        var questionBox = document.createElement("h3");
        var answerButtonsContainer = document.createElement("ul")
        startButton.remove()

        quizBoxContainer.appendChild(quizBox)
        quizBox.appendChild(questionBox);
        quizBox.appendChild(answerButtonsContainer);
        
        for(let i = 0; i < 4; i++){
            var choice = document.createElement("li")
            var button = document.createElement('button')
            button.textContent = questions[questionNumber].answers[i]
            button.setAttribute('value', questions[questionNumber].answers[i])
            button.addEventListener('click', quiz.selectAnswer)
            // choice.addEventListener('click', this.selectAnswer)
            choice.className = 'answer'
            answerButtonsContainer.appendChild(choice)
            choice.appendChild(button)
        }
        questionBox.textContent = questions[questionNumber].question;
        questionBox.className = 'current-question'

    },
    playGame: ()=> {
        quiz.settingTimer()
        quiz.newQuestion(questionNumber)
        if(questionNumber > 9){

        }
        
    }
}


startButton.addEventListener('click', quiz.playGame)


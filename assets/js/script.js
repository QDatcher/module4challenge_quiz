const questionTotal = 10;
const highScoreList = [];
let correctAnswers = 0;
let time = 30;

const questions = {
    1: {
        question: 'What is considered the skeleton of your website?',
        answers: {
            a: 'JavaScript',
            b: 'HTML',
            c: 'CSS',
            d: 'VS Code'
        },
        correctAnswer: 'B'
    },
    2: {
        question: 'What is console.log() used for?',
        answers: {
            a: 'Showing the user the output of whatever variable is inside',
            b: 'Debugging',
            c: 'Testing if an expression is true or false',
            d: 'All of the above'
        },
        correctAnswer: 'D'
    },
    3: {
        question: 'What is Github',
        answers: {
            a: 'A place to write code',
            b: 'A system used to store the progress of your coding project',
            c: 'An Internet hosting service for software development and version control using Git',
            d: 'None of the above'
        },
        correctAnswer: 'C'
    },
    4: {
        question: 'What will be returned after the following code console.log(5 < 6)',
        answers: {
            a: 'True',
            b: 'False',
            c: 'Undefined',
            d: '5 < 6'
        },
        correctAnswer: 'A'
    },
    5: {
        question: 'What will be returned after the following code console.log(5 == "6")',
        answers: {
            a: 'True',
            b: 'False',
            c: 'Undefined',
            d: '5 < 6'
        },
        correctAnswer: 'B'
    },
    6: {
        question: 'What attribute do you use in an <img> tag add the link to the photo',
        answers: {
            a: 'href',
            b: 'photoLink',
            c: 'src',
            d: 'None of the above'
        },
        correctAnswer: 'C'
    },
    7: {
        question: 'In CSS what does "margin: 10px 5px;" mean?',
        answers: {
            a: 'margin of 10px on the left and 5px on the right',
            b: 'margin of 10px vertical and 5px horizontal',
            c: 'margin of 10px horizontal and 5px vertical',
            d: 'None of the above'
        },
        correctAnswer: 'B'
    },
    8: {
        question: 'Which justify-content value will generate space on the left right and middle of 2 divs on the same row?',
        answers: {
            a: 'space-between',
            b: 'end',
            c: 'center',
            d: 'space-around'
        },
        correctAnswer: 'D'
    },
    9: {
        question: 'If I want to move an object based on the parent it resides in and using property "top" which property do I have to use first?',
        answers: {
            a: 'position: relative;',
            b: 'display: flex;',
            c: 'display: grid;',
            d: 'position: absolute;'
        },
        correctAnswer: 'A'
    },
    10: {
        question: 'Which code language makes your website dynamic, interactive, and engaging?',
        answers: {
            a: 'JavaScript',
            b: 'HTML',
            c: 'CSS',
            d: 'VS Code'
        },
        correctAnswer: 'A'
    }
}

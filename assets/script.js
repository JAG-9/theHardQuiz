var startQuiz = document.querySelector("#start");
var timerEl = document.querySelector("#countdown")




startQuiz.addEventListener("click", function () {

        var timeLeft = 50;
     setInterval(function () {
        timeLeft--;
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft + " " + 'Sec(s) remaining';
               
            } else {
                timerEl.textContent = ""
                clearInterval(timeLeft)
            }
        }, 1000);
    }
)

var myQuestions = [
    {
        question: "What is JS short for?",
        answers:{
            a: 'JavaSheet',
            B: 'JavaScript',
            C: 'JavaScreen',
            D: 'JavaStyle'
        },
        correctAnswer: 'B'
    },
    {
        question: "q2",
        answers:{
            A: 'T1',
            B: 'T2',
            C: 'T3',
            D: 'T4'
        },
        correctAnswer: 'C'
    },
    {
        question: "q3",
        answers:{
            A: 'T1',
            B: 'T2',
            C: 'T3',
            D: 'T4'
        },
        correctAnswer: 'C'
    },
    {
        question: "q4",
        answers:{
            A: 'T1',
            B: 'T2',
            C: 'T3',
            D: 'T4'
        },
        correctAnswer: 'A'
    },
    {
        question: "q5",
        answers:{
            A: 'T1',
            B: 'T2',
            C: 'T3',
            D: 'T4'
        },
        correctAnswer: 'D'
    }
                    
];

function showQuestions(questions, quizContainer){
    var output = []
    var answers;
    
    for(var i=0; i<questions.length; i++){
        answers = [];
    }
}
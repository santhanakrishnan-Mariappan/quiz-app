//#QUESTIONS

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype={
    isCorrectAnswer(choice){
        return this.answer===choice;
    }
}

// Question.prototype.isCorrectAnswer = function(choice) {
//     return this.answer === choice;
// }
//###QUIZ###
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion= function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(choice) {
    
    if(this.getQuestion().isCorrectAnswer(choice)) {
        this.score++;
    }
    
    this.questionIndex++;
    console.log(this.questions.length,this.questionIndex)   
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length; 
}

//###App
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
       
        var element = document.getElementById("question");
        console.log(quiz.getQuestion().text);
        element.innerHTML = quiz.getQuestion().text;
    
        var choices = quiz.getQuestion().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
       showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    console.log(element.innerHTML);   };

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();






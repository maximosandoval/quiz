//VAR DECLARATIONS
var timeElement = document.querySelector.Selector(".timer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var answerEl = document.getElementsByClassName("answer");
var finalscore = document.getElementById("end");
var answerfinal = "";
var q = 0;
var score = 0;
var time = 120
var index = 0;

var rightAnswer=document.getElementById("rightanswer");
//console.log(startButton);

//Start quiz ("Let's Get Schwifty button)
document.querySelector("#start-btn").addEventListener
("click", function() {
//start timer
timer = setInterval(function () {
    time--;

//show time
document.querySelector(".time").textContent = time;
//timer
if (time <= 0) {
    clearInterval(timer);
    endgame();
    }
}, 1000)
}


//Quiz Questions
//Capture the end user click and compare their answer to the right answer
rightAnswer.addEventListener("click", function() {})


//NAVIGATION (SEE LESSON 17)
INDEX = INDEX + DIRECTION;
} else if (index >)

//Set up array of question objects




//SUBMIT ANSWER CORRECTLY


//SUBMIT ANSWER INCORRECTLY


//INCORRECT ANSWER TIMER REDUCED BY 3 SECONDS


//Add to score for correct

//Enter Initials for high score & display high score


//ALL QUESTIONS ANSWERED TIMER EQUALS "0"

//GAME OVER MAN!


//CLEAR HIGH SCORE BUTTON
clearHighScores.addEventListner("click", function (event) {);


//SAVE TEST WITH INITIALS AND SCORE






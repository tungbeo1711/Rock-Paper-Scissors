const rock = document.getElementById("r-choice");
const paper = document.getElementById("p-choice");
const scissors = document.getElementById("s-choice");
const userscore = document.getElementById("user-score");
const compscore = document.getElementById("comp-score");
const resultText = document.getElementById("result");

let userScore = 0;
let compScore = 0;

function main() {
    rock.addEventListener("click", function() {
        game("r"); 
    })
    paper.addEventListener("click", function() {
        game("p");  
    })
    scissors.addEventListener("click", function() {
        game("s");  
    })
}


function getCompChoice() {
    const comp = ["r", "p", "s"];
    let randomChoice = Math.floor(Math.random() * 3);
    return (comp[randomChoice]);
}

function compChoiceDisplay(compChoice) {
    if (compChoice === "r") {
        return "Tung choose Rock";
    } else if (compChoice === "p") {
        return "Tung choose Paper";
    } else {
        return "Tung choose Scissors"
    }
}


function game(userchoice) {
    const compChoice = getCompChoice();
    const compChoiceText = compChoiceDisplay(compChoice);
    switch (userchoice + compChoice) {
       case "rs":
       case "pr":
       case "sp":
           win(compChoiceText);
           break;
       case "rr":
       case "pp":
       case "ss":
           draw(compChoiceText);
           break;
       case "sr":
       case "rp":
       case "ps":
           lose(compChoiceText);
           break;
    }
} 

function win(text) {
    userScore++;
    userscore.innerHTML = userScore;
    compscore.innerHTML = compScore;
    resultText.innerHTML = text + " You Win";
}
function lose(text) {
    compScore++;
    compscore.innerHTML = compScore;
    userscore.innerHTML = userScore;
    resultText.innerHTML =  text + " You Lose";
}
function draw(text) {
    resultText.innerHTML = text + " Draw";
}







main();
let choices = document.querySelectorAll(".choice");
let CountyourScore = document.getElementById("your");
let CountcompScore = document.getElementById("comp");
const resultMessage = document.getElementById("resultMessage");
let yourScore = 0;
let compScore = 0;
function Values() {
    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const userTurnIs = choice.getAttribute("id")
            const compTurnIs = compturnisfunc();
            Totalscore(userTurnIs, compTurnIs)
        })
    });
}
Values()
function compturnisfunc() {
    const arr = ["rock", "paper", "scissors"]
    const compvalue = Math.floor(Math.random() * 3)
    const compTurnIs = (arr[compvalue]);
    return compTurnIs;
}


function Totalscore(userTurnIs, compTurnIs) {
    if (compTurnIs === userTurnIs) {
        resultMessage.innerHTML = "Draw The Game";
        resultMessage.style.backgroundColor = "grey";
    }
    else if (compTurnIs === "rock" && userTurnIs === "paper" ||
        compTurnIs === "paper" && userTurnIs === "scissors" ||
        compTurnIs === "scissors" && userTurnIs === "rock") {
        resultMessage.innerHTML = `You Won because computer selected ${compTurnIs}`;
        resultMessage.style.backgroundColor = "green";
        yourScore++;
        CountyourScore.innerHTML = yourScore;
    } else {
        resultMessage.innerHTML = `You Lost the Game because computer selected ${compTurnIs}`;
        resultMessage.style.backgroundColor = "red";
        compScore++;
        CountcompScore.innerHTML = compScore;
    }
}
 let userScore = 0;
 let CompScore = 0;

 let choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = () => {
    const options = ["rock", "paper" , "scissors"];
   const randIdx =  Math.floor(Math.random() *3);
   return options[randIdx];
 };

const drawGame = () =>{
 msg.innerText = "Game was draw ! play again";
 msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) => { 
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        CompScore++;
        compScorePara.innerText = CompScore;
msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
msg.style.backgroundColor = "Red";
    }
};

 const playGame = (userChoice) => {
const compChoice = genCompChoice();

if(userChoice === compChoice) {
// draw game
drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock") {
        // scissers, paper
        userWin = compChoice === "paper" ? false : true ;
    } else if (userChoice === "paper") {
        //rock , scissors 
       userWin = compChoice === "scissors" ? false : true ;
    } else {
        // rock , paper 
        userWin = compChoice === "rock" ? false : true ; 
    }
    showWinner(userWin, userChoice, compChoice);
}
};
 
 choices.forEach((choice) => {
    // console.log(choice) ;
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
 });
 
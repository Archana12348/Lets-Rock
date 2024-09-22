let userScore = 0;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const  msg  = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genComputerChoice = () => {
    const options = ["rock", "paper","scissors"];
    //rock ,paper,scissors
   const randomIdx = Math.floor(Math.random() * 3);
   return options[randomIdx];
}
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw . Play Again ";
    msg.style.backgroundColor = "#384E77";
};
const  showWinner = (userWin , userChoice, computerChoice)  => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win!");
       // msg.innerText = "You Win!";
       msg.innerText = `You Win ! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
       // console.log("you lose");
        //msg.innerText = "You lose. ";
        msg.innerText = `You lose.${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice ->modular
    const computerChoice = genComputerChoice();
    console.log("Comp choice = " , computerChoice);

    if(userChoice === computerChoice){
        //Draw game
        drawGame();
    } else{
        let userWin  = true;
        if (userChoice === "rock") {
            //computer generate scissors , paper
           userWin =  computerChoice === "paper" ?false :true ;
        } else if (userChoice === "paper"){
            //rock , scissors
        userWin = computerChoice === "scissors" ?false :true;
        }else  {
            //rock , paper
            computerChoice ==="rock" ? false : true;
        }
        showWinner(userWin , userChoice , computerChoice);
        }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
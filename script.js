let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice =() =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw ,Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;       
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;       
        msg.innerText = `You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    //generate computer choice -->modular
    const compChoice = getCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
        userWin= compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //scissor,rock
            userWin = compChoice === "scissors" ? false : true; 
        }else{
            //rock.paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("button clicked",userChoice);
        playGame(userChoice);
    });
});
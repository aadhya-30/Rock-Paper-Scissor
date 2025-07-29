let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choiceimages");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["rock","paper","scissor"];
    //we have to use math.random so that it generates a number and then  multiply it by 3 to generate a number from 0to 2
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame = () =>{
    
    msg.innerText = "It is a Tie";
     msg.style.backgroundColor = "#7400b8"
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
       
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#56cfe1"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText = `You lose. ${compChoice} beats ${userChoice} `;
         msg.style.backgroundColor = "#80ffdb"
    }
}

const playGame = (userChoice) => {
  
   //generate comp choice
   const compChoice = genCompChoice();
   

   if(userChoice === compChoice){
    //draw
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors paper
       userWin = compChoice === "paper"? false:true;
    } else if(userChoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissor"? false:true;
    }else{
        //rock,paper
       userWin =  compChoice === "rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
};


choices.forEach((choice) => {

    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
     
       playGame(userChoice);
    });
});


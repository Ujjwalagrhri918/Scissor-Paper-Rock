let score = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    lose: 0,
    tie: 0,
}
function playGame(userChoice){
    let result = "";
    let computerMove = computer();
    let userMove = userChoice;
    if (userMove === "rock"){
        if(computerMove==="rock") result = "tie";
        else if( computerMove==="scissor") result ="win";
        else if (computerMove==="paper")result = "lose";

    }
    else if (userMove === "scissor"){
        if(computerMove==="rock") result = "lose";
        else if( computerMove==="scissor") result ="tie";
        else if (computerMove==="paper")result = "win";

    }
    else if (userMove === "paper"){
        if(computerMove==="rock") result = "win";
        else if( computerMove==="scissor") result ="lose";
        else if (computerMove==="paper")result = "tie";

    }
    if(result === 'win')score.win++;
    else if(result ==='lose')score.lose++;
    else score.tie++;

    
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.choice').innerHTML = `You Choose:${userMove}.  Computer Choose:${computerMove}.`
    document.querySelector('.result').innerHTML =  `RESULT: ${result}.`
    displayScore();


}

function computer(){
    let computerChoice = "";
    let randomNum = Math.random();
    if(randomNum >=0 && randomNum < 1/3) computerChoice= "rock";
    else  if(randomNum >=1/3 && randomNum < 2/3) computerChoice= "scissor";
    else computerChoice= "paper";
    return computerChoice;
}

function resetScore(){
    score.win = 0;
    score.lose =0;
    score.tie =0; 
    localStorage.removeItem('score');
    document.querySelector('.choice').innerHTML = ``
    document.querySelector('.result').innerHTML =  ``
    displayScore();

}
function displayScore(){
    document.querySelector(`.score`).innerHTML =`win: ${score.win} lose: ${score.lose} tie: ${score.tie} `;
}
function getComputerChoice(){
  let valor = Math.floor(Math.random()*3); //devuelve un valor entero entre 0 y 2
  let resultado = "";
  if(valor === 0){
    resultado = "rock";
  }
  else if(valor === 1){
    resultado = "paper";
  }
  else if(valor === 2){
    resultado = "scissors";
  }

  return resultado;
}

function Round(getComputerChoice,playerChoice){

  let ganador = "";
  if ((getComputerChoice === "rock") && (playerChoice === "paper")){
    ganador = "Player";
  }
  if ((getComputerChoice === "rock") && (playerChoice === "scissors")){
    ganador = "Computer";
  }
  if ((getComputerChoice === "rock") && (playerChoice === "rock")){
    ganador = "Empate";
  }
  if((getComputerChoice === "paper") && (playerChoice === "paper")){
    ganador = "Empate";
  }
  if((getComputerChoice === "paper") && (playerChoice === "rock")){
    ganador = "Computer";
  }
  if((getComputerChoice === "paper") && (playerChoice === "scissors")){
    ganador = "Player";
  }
  if((getComputerChoice === "scissors") && (playerChoice === "scissors")){
    ganador = "Empate";
  }
  if((getComputerChoice === "scissors") && (playerChoice === "rock")){
    ganador = "Player";
  }
  if((getComputerChoice === "scissors") && (playerChoice === "paper")){
    ganador = "Computer";
  }

  return ganador;
}

function game(){
  let games = 0;
  let Player = 0;
  let Computer = 0;

  while(games !=5){
    let playerChoice = prompt("Ingrese un valor");
    playerChoice = playerChoice.toLowerCase();  //devuelve el playerChoice todo en minuscula;
    let ComputerChoice = getComputerChoice();
    if(Round(ComputerChoice,playerChoice) === "Empate"){
      let playerChoice = prompt("Ingrese un valor");
      playerChoice = playerChoice.toLowerCase(); //devuelve el playerChoice todo en minuscula;
      let ComputerChoice = getComputerChoice();
    }
    else{
      if(Round(ComputerChoice,playerChoice) === "Player"){
        Player = Player + 1;
        
      }
      else if(Round(ComputerChoice,playerChoice) === "Computer"){
        Computer = Computer + 1;
        
      }
      console.log("Player:" + Player);
      console.log("Computer:" + Computer);
      games = games + 1;
    }
  }
  
  if(Player>Computer){
    console.log("Player Win");
  }
  else if(Player<Computer){
    console.log("Computer Win");
  }
}

 game(); 



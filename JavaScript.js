const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const div = document.createElement("div");
const div2 = document.createElement("div");
const container = document.querySelector("#container");

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

  let playerChoice = "";
  btn1.addEventListener("click",()=>{ //asigno el valor a playerchoice cuando se hace click el boton
    playerChoice = "rock";
    let ComputerChoice = getComputerChoice();
    let round = Round(ComputerChoice,playerChoice)
    
    if(round !== "Empate"){
      if(round === "Player"){
        Player = Player + 1;
        }
        else if(round === "Computer"){
          Computer = Computer + 1;
        }
    }

    if(Player === 5){
      
      alert("Player win");
      Player = 0;
      Computer = 0;
    }
    if(Computer === 5){
      alert("Computer win");
      Player = 0;
      Computer = 0;
    }
    div.textContent = "Player " + Player;
    div2.textContent = "Computer " + Computer;
    })
  btn2.addEventListener("click",()=>{
    playerChoice = "paper";
    let ComputerChoice = getComputerChoice();
    let round = Round(ComputerChoice,playerChoice)
    if(round !== "Empate"){
      if(round === "Player"){
        Player = Player + 1;
        }
        else if(round === "Computer"){
          Computer = Computer + 1;
        }
    }
    if(Player === 5){
      
      alert("Player win");
      Player = 0;
      Computer = 0;
    }
    if(Computer === 5){
      alert("Computer win");
      Player = 0;
      Computer = 0;
    }
    div.textContent = "Player " + Player;
    div2.textContent = "Computer " + Computer;
     
  })
  btn3.addEventListener("click",()=>{
    playerChoice = "scissors";
    let ComputerChoice = getComputerChoice();
    let round = Round(ComputerChoice,playerChoice)
    if(round !== "Empate"){
      if(round === "Player"){
        Player = Player + 1;
        }
        else if(round === "Computer"){
          Computer = Computer + 1;
        }
    }
    if(Player === 5){
      
      alert("Player win");
      Player = 0;
      Computer = 0;
    }
    if(Computer === 5){
      alert("Computer win");
      Player = 0;
      Computer = 0;
    }
    div.textContent = "Player " + Player;
    div2.textContent = "Computer " + Computer;
  })

  
  
}

container.appendChild(div);
container.appendChild(div2);

game(); 





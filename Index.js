"use strict";

let gameboardCheck = [];
let isWinner = false;
let countTurns = 0;
let playerName1 = prompt("¿Como es tu nombre?");
let playerName2 = prompt("¿Contra quien vas a jugar?");

const playerTurn = document.querySelector('.player');
const gameboard = document.querySelector('.gameboard');
const button = document.querySelector('.reset');


for (let i = 0; i < 9; i++) {
    const spot = document.createElement('DIV');
	spot.classList.add('spot');
    spot.id = 'spot' + (i+1);
    gameboard.appendChild(spot);
}

const spots = document.querySelectorAll('.spot');

const player1 = {
    name : playerName1,
    mark : "X",
    turn : true
}

const player2 = {
    name : playerName2,
    mark : "O",
    turn : false
}

const changeTurn = ()=>{
    if(player1.turn){
        player1.turn = false;
        player2.turn = true;
    } else{
        player1.turn = true;
        player2.turn = false;
    }
}


const checkWinnerRows = (gameboardCheck)=>{
    if (gameboardCheck[0] == "X" && gameboardCheck[1] == "X" && gameboardCheck[2] == "X" ||
        gameboardCheck[3] == "X" && gameboardCheck[4] == "X" && gameboardCheck[5] == "X" ||
        gameboardCheck[6] == "X" && gameboardCheck[7] == "X" && gameboardCheck[8] == "X"   ){
            playerTurn.textContent = `${player1.name} ganaste!`;
                isWinner = true;
        } else if (gameboardCheck[0] == "O" && gameboardCheck[1] == "O" && gameboardCheck[2] == "O" ||
        gameboardCheck[3] == "O" && gameboardCheck[4] == "O" && gameboardCheck[5] == "O" ||
        gameboardCheck[6] == "O" && gameboardCheck[7] == "O" && gameboardCheck[8] == "O"){
                playerTurn.textContent = `${player2.name} ganaste!`;
                isWinner = true;
        } 
}

const checkWinnerColumns = (gameboardCheck)=>{
    if (gameboardCheck[0] == "X" && gameboardCheck[3] == "X" && gameboardCheck[6] == "X" ||
        gameboardCheck[1] == "X" && gameboardCheck[4] == "X" && gameboardCheck[7] == "X" ||
        gameboardCheck[2] == "X" && gameboardCheck[5] == "X" && gameboardCheck[8] == "X"   ){
                playerTurn.textContent = `${player1.name} ganaste!`;
                isWinner = true;
        } else if (gameboardCheck[0] == "O" && gameboardCheck[3] == "O" && gameboardCheck[6] == "O" ||
        gameboardCheck[1] == "O" && gameboardCheck[4] == "O" && gameboardCheck[7] == "O" ||
        gameboardCheck[2] == "O" && gameboardCheck[5] == "O" && gameboardCheck[8] == "O"){
            playerTurn.textContent = `${player2.name} ganaste!`;
                isWinner = true;
        } 
}

const checkWinnerDiagonals = (gameboardCheck)=>{
    if (gameboardCheck[0] == "X" && gameboardCheck[4] == "X" && gameboardCheck[8] == "X" ||
    gameboardCheck[2] == "X" && gameboardCheck[4] == "X" && gameboardCheck[6] == "X" ){
        playerTurn.textContent = `${player1.name} ganaste!`;
        isWinner = true;
    } else if (gameboardCheck[0] == "O" && gameboardCheck[4] == "O" && gameboardCheck[8] == "O" ||
    gameboardCheck[2] == "O" && gameboardCheck[4] == "O" && gameboardCheck[6] == "O"){
        playerTurn.textContent = `${player2.name} ganaste!`;
        isWinner = true;
    }
}

const isDraw = (countTurns, isWinner)=>{
 if (countTurns == 9 && !isWinner){
    playerTurn.textContent = `Empataron!`;
 }
}

const game = (countTurns)=>{
    playerTurn.textContent = `Comienza a jugar ${player1.name}`;
    for (let i = 0; i < 9; i++) {
        spots[i].addEventListener('click', ()=> {
            if(player1.turn){
                spots[i].textContent = player1.mark;
                gameboardCheck[i] = player1.mark;
                countTurns += 1;
                playerTurn.textContent = `Es el turno de ${player2.name}`;
            } else{
                playerTurn.textContent = `Es el turno de ${player1.name}`;
                spots[i].textContent = player2.mark;
                gameboardCheck[i] = player2.mark;
                countTurns += 1;
            }
            
            changeTurn();
            checkWinnerRows(gameboardCheck);
            checkWinnerColumns(gameboardCheck);
            checkWinnerDiagonals(gameboardCheck);
            isDraw(countTurns, isWinner);
        });
    }
};

button.addEventListener('click', (gameboardCheck)=>{
    for (let i = 0; i > 9; i++) {
        spots[i].textContent = "";
    }
    game();
});
game(countTurns);
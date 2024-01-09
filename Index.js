"use strict";

let gameboardCheck = [];
let isWinner = false;

let playerName1 = prompt("¿Como es tu nombre?");
let playerName2 = prompt("¿Contra quien vas a jugar?");

const playerTurn = document.querySelector('.player');

const gameboard = document.querySelector('.gameboard');

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
                console.log("gano el jugador 1");
                isWinner = true;
        } else if (gameboardCheck[0] == "O" && gameboardCheck[1] == "O" && gameboardCheck[2] == "O" ||
        gameboardCheck[3] == "O" && gameboardCheck[4] == "O" && gameboardCheck[5] == "O" ||
        gameboardCheck[6] == "O" && gameboardCheck[7] == "O" && gameboardCheck[8] == "O"){
                console.log("gano el jugador 2");
                isWinner = true;
        } 
}

const checkWinnerColumns = (gameboardCheck)=>{
    if (gameboardCheck[0] == "X" && gameboardCheck[3] == "X" && gameboardCheck[6] == "X" ||
        gameboardCheck[1] == "X" && gameboardCheck[4] == "X" && gameboardCheck[7] == "X" ||
        gameboardCheck[2] == "X" && gameboardCheck[5] == "X" && gameboardCheck[8] == "X"   ){
                console.log("gano el jugador 1");
                isWinner = true;
        } else if (gameboardCheck[0] == "O" && gameboardCheck[3] == "O" && gameboardCheck[6] == "O" ||
        gameboardCheck[1] == "O" && gameboardCheck[4] == "O" && gameboardCheck[7] == "O" ||
        gameboardCheck[2] == "O" && gameboardCheck[5] == "O" && gameboardCheck[8] == "O"){
                console.log("gano el jugador 2");
                isWinner = true;
        } 
}

const checkWinnerDiagonals = (gameboardCheck)=>{
    if (gameboardCheck[0] == "X" && gameboardCheck[4] == "X" && gameboardCheck[8] == "X" ||
    gameboardCheck[2] == "X" && gameboardCheck[4] == "X" && gameboardCheck[6] == "X" ){
        console.log("gano el jugador 1");
                isWinner = true;
    } else if (gameboardCheck[0] == "O" && gameboardCheck[4] == "O" && gameboardCheck[8] == "O" ||
    gameboardCheck[2] == "O" && gameboardCheck[4] == "O" && gameboardCheck[6] == "O"){
        console.log("gano el jugador 2");
        isWinner = true;
    }
}

const isDraw = (countTurns, isWinner)=>{
 if (countTurns == 9 && !isWinner){
    console.log("es un empate");
 }
}

const game = (countTurns)=>{
    let countTurns = 0;
    for (let i = 0; i < 9; i++) {
        spots[i].addEventListener('click', ()=> {
            if(player1.turn){
                spots[i].textContent = player1.mark;
                gameboardCheck[i] = player1.mark;
                countTurns += 1;
            } else{
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
game();
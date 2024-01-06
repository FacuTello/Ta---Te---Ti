
'use strict';

let playerName1 = prompt("¿Como es tu nombre?");
let playerName2 = prompt("¿Contra quien vas a jugar?");
const player1Container = document.getElementById('player1-container');
const player2Container = document.getElementById('player2-container');
player1Container.textContent = playerName1;
player2Container.textContent = playerName2;

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

//jugador 1 pone su ficha => funcion
// cambio el turno => funcion
// chequeo si hay ganador en el tablero => funcion
//jugador 2 pone su ficha
//cambio el turno
// chequeo si hay ganador en el tablero

const putMark = ()=>{
    for (let i = 0; i < 9; i++) {
        spots[i].addEventListener('mousedown', ()=> {
            if(player1.turn){
                spots[i].textContent = player1.mark;
            } else{
                spots[i].textContent = player2.mark;
            }
            changeTurn();
        });
    }
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

const game = ()=>{
    putMark();
    console.log(player1.turn)
}


game();

/* const checkWinner = ()=>{
    if (gameboardArray[0] == "X" && gameboardArray[1] == "X" && gameboardArray[2] == "X" ||
        gameboardArray[3] == "X" && gameboardArray[4] == "X" && gameboardArray[5] == "X" ||
        gameboardArray[6] == "X" && gameboardArray[7] == "X" && gameboardArray[8] == "X" ||
        gameboardArray[0] == "X" && gameboardArray[3] == "X" && gameboardArray[6] == "X" ||
        gameboardArray[1] == "X" && gameboardArray[4] == "X" && gameboardArray[7] == "X" ||
        gameboardArray[2] == "X" && gameboardArray[5] == "X" && gameboardArray[8] == "X" ||
        gameboardArray[0] == "X" && gameboardArray[4] == "X" && gameboardArray[8] == "X" ||
        gameboardArray[2] == "X" && gameboardArray[4] == "X" && gameboardArray[6] == "X"){
            console.log(`Gano ${player1.name}`);
    } else if(gameboardArray[0] == "O" && gameboardArray[1] == "O" && gameboardArray[2] == "O" ||
            gameboardArray[3] == "O" && gameboardArray[4] == "O" && gameboardArray[5] == "O" ||
            gameboardArray[6] == "O" && gameboardArray[7] == "O" && gameboardArray[8] == "O" ||
            gameboardArray[0] == "O" && gameboardArray[3] == "O" && gameboardArray[6] == "O" ||
            gameboardArray[1] == "O" && gameboardArray[4] == "O" && gameboardArray[7] == "O" ||
            gameboardArray[2] == "O" && gameboardArray[5] == "O" && gameboardArray[8] == "O" ||
            gameboardArray[0] == "O" && gameboardArray[4] == "O" && gameboardArray[8] == "O" ||
            gameboardArray[2] == "O" && gameboardArray[4] == "O" && gameboardArray[6] == "O"){
            console.log(`Gano ${player2.name}`);
    } else{
            console.log("Es un empate");
    }
        
}


let putMark = ()=>{
    let gameboardArray = []
    spot1.addEventListener('mousedown', ()=>{
    if(player1.turn){
        spot1.textContent = "X";
        player1.turn = false;
        player2.turn = true;
        gameboardArray[0] = "X";
        checkWinner();
        console.log(gameboardArray);
    } else{
        spot1.textContent = "O";
        player1.turn = true;
        player2.turn = false;
        gameboardArray[0] = "O";
        checkWinner();
        console.log(gameboardArray);
    }
    })
    spot2.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot2.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[1] = "X";
            checkWinner();
            console.log(gameboardArray);
        } else{
            spot2.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[1] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot3.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot3.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[2] = "X";
            checkWinner();
            console.log(gameboardArray);
        } else{
            spot3.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[2] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot4.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot4.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[3] = "X";
            checkWinner();
            console.log(gameboardArray);
        } else{
            spot4.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[3] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot5.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot5.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[4] = "X";
            checkWinner();
            console.log(gameboardArray);
        } else{
            spot5.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[4] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot6.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot6.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[5] = "X";
            checkWinner();
            console.log(gameboardArray);
            
        } else{
            spot6.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[5] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot7.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot7.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[6] = "X";
            checkWinner();
            console.log(gameboardArray);
            
        } else{
            spot7.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[6] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot8.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot8.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[7] = "X";
            checkWinner();
            console.log(gameboardArray);
            
        } else{
            spot8.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[7] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
    spot9.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot9.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[8] = "X";
            checkWinner();
            console.log(gameboardArray);
        } else{
            spot9.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[8] = "O";
            checkWinner();
            console.log(gameboardArray);
        }
    })
        
}
putMark(); */












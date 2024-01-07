

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


const changeTurn = ()=>{
    if(player1.turn){
        player1.turn = false;
        player2.turn = true;
    } else{
        player1.turn = true;
        player2.turn = false;
    }
}

let gameboardCheck = [];

const checkWinner = (gameboardCheck)=>{
 for (let i = 0; i < gameboardCheck.length; i++) {
    if (gameboardCheck[i] == "X" && gameboardCheck[i+1] == "X" && gameboardCheck[i+2] == "X" ||
        gameboardCheck[i] == "X" && gameboardCheck[i+3] == "X" && gameboardCheck[i+6] == "X" ||
        gameboardCheck[i] == "X" && gameboardCheck[i+4] == "X" && gameboardCheck[i+8] == "X" ||
        gameboardCheck[i+2] == "X" && gameboardCheck[i+4] == "X" && gameboardCheck[i+6] == "X"){
                console.log("gano el jugador 1");
        } else if (gameboardCheck[i] == "O" && gameboardCheck[i+1] == "O" && gameboardCheck[i+2] == "O" ||
        gameboardCheck[i] == "O" && gameboardCheck[i+3] == "O" && gameboardCheck[i+6] == "O" ||
        gameboardCheck[i] == "O" && gameboardCheck[i+4] == "O" && gameboardCheck[i+8] == "O" ||
        gameboardCheck[i+2] == "O" && gameboardCheck[i+4] == "O" && gameboardCheck[i+6] == "O"){
                console.log("gano el jugador 2");
        }
    } 
}
        
const game = ()=>{
    for (let i = 0; i < 9; i++) {
        spots[i].addEventListener('mousedown', ()=> {
            if(player1.turn){
                spots[i].textContent = player1.mark;
                gameboardCheck[i] = player1.mark;
            } else{
                spots[i].textContent = player2.mark;
                gameboardCheck[i] = player2.mark;
            }
            changeTurn();
            checkWinner(gameboardCheck);
           
        });
    }
};

game();
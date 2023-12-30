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

const spot1 = document.getElementById('spot1');
const spot2 = document.getElementById('spot2');
const spot3 = document.getElementById('spot3');
const spot4 = document.getElementById('spot4');
const spot5 = document.getElementById('spot5');
const spot6 = document.getElementById('spot6');
const spot7 = document.getElementById('spot7');
const spot8 = document.getElementById('spot8');
const spot9 = document.getElementById('spot9');

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

let putMark = ()=>{
    let gameboardArray = [];
    spot1.addEventListener('mousedown', ()=>{
    if(player1.turn){
        spot1.textContent = "X";
        player1.turn = false;
        player2.turn = true;
        gameboardArray[0] = "X";
        console.log(gameboardArray);
    } else{
        spot1.textContent = "O";
        player1.turn = true;
        player2.turn = false;
        gameboardArray[0] = "O";

    }
    })
    spot2.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot2.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[1] = "X";
        } else{
            spot2.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[1] = "O";
        }
    })
    spot3.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot3.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[2] = "X";
        } else{
            spot3.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[2] = "O";
        }
    })
    spot4.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot4.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[3] = "X";
        } else{
            spot4.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[3] = "O";
            
        }
    })
    spot5.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot5.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[4] = "X";
            
        } else{
            spot5.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[4] = "O";
        }
    })
    spot6.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot6.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[5] = "X";
            
        } else{
            spot6.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[5] = "O";
        }
    })
    spot7.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot7.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[6] = "X";
            
        } else{
            spot7.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[6] = "O";
        }
    })
    spot8.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot8.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[7] = "X";
            
        } else{
            spot8.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[7] = "O";
        }
    })
    spot9.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot9.textContent = "X";
            player1.turn = false;
            player2.turn = true;
            gameboardArray[8] = "X";
            console.log(gameboardArray);
        } else{
            spot9.textContent = "O";
            player1.turn = true;
            player2.turn = false;
            gameboardArray[8] = "O";
        }
    })
        
}
putMark();












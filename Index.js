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

    spot1.addEventListener('mousedown', ()=>{
    if(player1.turn){
        spot1.textContent = "X";
        player1.turn = false;
        player2.turn = true;
    } else{
        spot1.textContent = "O";
        player1.turn = true;
        player2.turn = false;

    }
    })
    spot2.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot2.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot2.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot3.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot3.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot3.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot4.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot4.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot4.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot5.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot5.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot5.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot6.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot6.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot6.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot7.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot7.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot7.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot8.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot8.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot8.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
    spot9.addEventListener('mousedown', ()=>{
        if(player1.turn){
            spot9.textContent = "X";
            player1.turn = false;
        player2.turn = true;
        } else{
            spot9.textContent = "O";
            player1.turn = true;
            player2.turn = false;
        }
    })
        
}

putMark();











'use strict';

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



//DO THE INTERFACE DOM MANIPULATION HERE




const chronometer = new Chronometer();

let myNewchronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
//um verhalten der knöpfe zu ändern, müssen wir Klasse umschalten


// to change status, toggle class. Toggle method:
//
//btnLeftElement.classList.toggle("");


//does this work as well???
if(btnLeftElement.className === 'btn start'){


  btnLeftElement.className = 'btn stop';
  btnRightElement.className = 'btn split';


  //set the btnLeft/right text to STOP here:
  btnLeftElement.innerText    = "STOP";
btnRightElement.innerText   = "SPLIT";

} else {
  btnLeftElemnt.className = 'btn start';
  btnRightElement.className = 'btn reset';

  btnLeftElement.innerText = "START";
  btnRightElement.innerText = "RESET"


}

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here




});


//Create the necessary code in the index.js to call the 
//Chronometer's start method if the button has the start class, 
//or the stop method if the button has the stop class applied.
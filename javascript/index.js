//const tyler = require('./chronometer.js');
const Chronometer = require('./chronometer');
const chronometer = new Chronometer();


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

const state = {
  btnleft : true,
  btnright : true
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (state.btnleft){
    console.log(btnLeftElement.innerText);
    //btnLeftElement.classList.remove('')
    //btnLeftElement.classList.add('')
  }else{
    //btnLeftElement.classList.remove('')
    //btnLeftElement.classList.add('')
  }
});

  // ... your code goes here

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (state.btnleft){
    console.log()
    btnRightElement.classList.remove('')
    btnRightElement.classList.add('')
  }else{
    btnRightElement.classList.remove('')
    btnRightElement.classList.add('')
  }
});
//const Chronometer = require("./chronometer");

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
  printMinutes();
  printSeconds();
  
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
let minutes = chronometer.getMinutes();
let minutesLeft = Math.floor(minutes/10);
let minutesRight = Math.round(minutes%10);

minDecElement.textContent = minutesLeft;
minUniElement.textContent = minutesRight;

}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds();
let secondsLeft = Math.floor(seconds/10);
let secondsRight = seconds%10;

secDecElement.textContent = secondsLeft;
secUniElement.textContent = secondsRight
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
    let secondsR= secUniElement.textContent;
    let secondsL= secDecElement.textContent;
    let minutesR =minUniElement.textContent;
    let minutesL = minDecElement.textContent;




    splitsElement.innerHTML +=`<li>${minutesL}${minutesR} : ${secondsL}${secondsR}</li>`


  

  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML = "";

  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerText = "STOP"
  btnLeftElement.className = "btn stop"
  // ... your code goes here
}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT"
  btnRightElement.className = "btn split"
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.innerText = "START"
  btnLeftElement.className = "btn start"
  // ... your code goes here
}

function setResetBtn() {
    btnRightElement.innerText = "RESET"
  btnRightElement.className = "btn reset"
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerText == "START") {
  chronometer.start(printTime);
  
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop(); 
    setStartBtn();
    
    setResetBtn();
  }

  
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
if(btnRightElement.textContent == "SPLIT"){
  printSplit();
} else {
  clearSplits();
  chronometer.reset();
  printTime();

}
  
  // ... your code goes here
  
});

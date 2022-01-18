//const Chronometer = require('./chronometer.js');
const chronometer = new Chronometer();
console.log(chronometer)


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
  printMinutes()
  printSeconds()

}


function printMinutes() {

  let minutos = chronometer.computeTwoDigitNumber(chronometer.getMinutes())

  minUniElement.innerText = minutos[1]
  minDecElement.innerText = minutos[0]
}

function printSeconds() {

  let segundos = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  

  secUniElement.innerText = segundos[1]
  secDecElement.innerText = segundos[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const lista = document.createElement('li')
  lista.innerHTML = chronometer.split()
  splitsElement.appendChild(lista)
}

function clearSplits() {
  splitsElement.innerHTML = " "
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = "STOP"
  btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = "START"
  btnLeftElement.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText= "RESET"
  btnRightElement.className= "btn reset"
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === "btn start"){
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
    
  }else{
    setStartBtn()
    setResetBtn()
    chronometer.stop()
  }
});
  
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset"){
    chronometer.reset()
    setSplitBtn()
  }
  else {
    printSplit()
  }
});

//const chronometer = new Chronometer();
//const Chronometer = require('./chronometer.js');
const chronometer = new Chronometer();
console.log(chronometer);


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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let minutos = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  

  minUniElement.innerText = minutos[1]
  minDecElement.innerText = minutos[0]
}

function printSeconds() {
  // ... your code goes here
  let segundos = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  

  secUniElement.innerText = segundos[1]
  secDecElement.innerText = segundos[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const lista = document.createElement('li')
  lista.innerHTML = chronometer.split()
  splitsElement.appendChild(lista)
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerHTML = "STOP"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  
  btnLeftElement.className = "btn start"
  btnLeftElement.innerHTML = "START"

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
    chronometer.start(setInterval(()=>{printTime()},1000))
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
  // ... your code goes here
  if(btnRightElement.className === "btn reset"){

    chronometer.reset()
    clearSplits()
    printTime()

  }else{
    printSplit()

  }

  

});

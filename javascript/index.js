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

}

function printSplit() {
  const lista = document.createElement('li')
  lista.innerHTML = chronometer.split()
  splitsElement.appendChild(lista)
}

function clearSplits() {
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRightElement.className = "btn split"
  btnRightElement.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeftElement.className = "btn start"
  btnLeftElement.innerHTML = "START"
}

function setResetBtn() {
  btnRightElement.className = "btn reset"
  btnRightElement.innerHTML = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === "btn start"){
    chronometer.start(setInterval(()=>{printTime()},1000))
    setStopBtn()
    setSplitBtn()
    
  }else{
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset"){
    chronometer.reset()
    clearSplits()
  }
  else {
    printSplit()
  }
});
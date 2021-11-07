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
  const seeMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = seeMinutes[0]
  minUniElement.innerHTML = seeMinutes[1]
}

function printSeconds() {
  let seeSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()) 
  secDecElement.innerHTML = seeSeconds[0]
  secUniElement.innerHTML = seeSeconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitList = document.getElementById('splits')
  let splitTime = chronometer.split()
}

function clearSplits() {
  const splitList = document.getElementById('splits')
  splitList.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.classList.remove ('start')
  btnLeftElement.classList.add  ('stop')
  btnLeftElement.innerText = "STOP"
  chronometer.start(printTime)
}

function setSplitBtn() {
  btnRightElement.classList.remove ('reset')
  btnRightElement.classList.add  ('split')
  btnRightElement.innerText = "SPLIT"
  chronometer.start(printTime)
}

function setStartBtn() {
  btnLeftElement.classList.remove ('stop')
  btnLeftElement.classList.add  ('start')
  btnLeftElement.innerText = "START"
  chronometer.stop(printTime)
}

function setResetBtn() {
  btnRightElement.classList.remove ('split')
  btnRightElement.classList.add  ('reset')
  btnRightElement.innerText = "RESET"
  chronometer.start(printTime)
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerText === 'START'){ 
    setStopBtn() //And change the left button to the stop one
    printTime()
  }
  else {
    setStartBtn()
    printTime() 
  } 
  });
  
  // Reset/Split Button
  btnRightElement.addEventListener('click', () => {
    if(btnRightElement.innerHTML == "SPLIT"){
      setResetBtn();
      printTime();
    } else if(btnRightElement.innerHTML == "RESET"){
      setSplitBtn();
      printTime();
    }
  });
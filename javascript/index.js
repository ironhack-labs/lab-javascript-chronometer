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
  minDecElement.innerHTML = chronometer.split()[0]
  minUniElement.innerHTML = chronometer.split()[1]
  secDecElement.innerHTML = chronometer.split()[3]
  secUniElement.innerHTML = chronometer.split()[4]
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
  const newLiElement = document.createElement("li")
  newLiElement.textContent = chronometer.split()
  const splitList = document.querySelector("#splits")
  splitList.appendChild(newLiElement)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.classList = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.classList = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "START"
  btnLeftElement.classList = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "RESET"
  btnRightElement.classList = "btn reset"
}

function clear() {
  chronometer.currentTime = 0

  minDecElement.innerHTML = "0"
  minUniElement.innerHTML = "0"
  secDecElement.innerHTML = "0"
  secUniElement.innerHTML = "0"

  const splitList = document.querySelector("#splits")
  splitList.innerHTML = ""
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const chronometerIsStopped = btnLeftElement.innerHTML === "START"
  if(chronometerIsStopped){
    chronometer.start()
    setStopBtn()
    setSplitBtn()
    
    // starts timer
    printEverySecond = setInterval(() => {
      printTime()
    }, 1000)
  }
  else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
    // stops timer
    clearInterval(printEverySecond)
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const chronometerIsStopped = btnLeftElement.innerHTML === "START"

  if(chronometerIsStopped)
    clear()
  else
    printSplit()
});

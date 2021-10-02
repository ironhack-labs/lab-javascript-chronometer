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

let printEverySecond

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const chronometerIsStopped = btnLeftElement.innerHTML === "START"
  if(chronometerIsStopped){
    chronometer.start()
    btnLeftElement.innerHTML = "STOP"
    btnLeftElement.classList = "btn stop"
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.classList = "btn split"

    printEverySecond = setInterval(() => {
      minDecElement.innerHTML = chronometer.split()[0]
      minUniElement.innerHTML = chronometer.split()[1]
      secDecElement.innerHTML = chronometer.split()[3]
      secUniElement.innerHTML = chronometer.split()[4]
    }, 1000)
  }
  else {
    chronometer.stop()
    btnLeftElement.innerHTML = "START"
    btnLeftElement.classList = "btn start"
    btnRightElement.innerHTML = "RESET"
    btnRightElement.classList = "btn reset"
    clearInterval(printEverySecond)
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});

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
  printMinutes()
  printSeconds()

}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.getMinutes()
  str = chronometer.computeTwoDigitNumber(minutes)
  minDecElement.innerHTML = str[0]
  minUniElement.innerHTML = str[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds()
  str = chronometer.computeTwoDigitNumber(seconds)
  secDecElement.innerHTML = str[0]
  secUniElement.innerHTML = str[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const newSplit = document.createElement("li")
  newSplit.textContent = chronometer.split()

  splitsElement.appendChild(newSplit)
  
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "START"
  btnLeftElement.className = "btn start"
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "RESET"
  btnRightElement.className = "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === "btn start"){
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
    
  } else if (btnLeftElement.className === "btn stop"){
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === "btn reset"){
    chronometer.reset()
    clearSplits()
    printTime()

  } else if(btnRightElement.className === "btn split"){
    printSplit()
  }
});

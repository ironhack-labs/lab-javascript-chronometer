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
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  let listItem = document.createElement("li")
  listItem.innerText = minDecElement.innerText + minUniElement.innerText + ":" + secDecElement.innerText + secUniElement.innerText
  splitsElement.appendChild(listItem)

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
  if (btnLeftElement.classList == "btn start") {
    btnLeftElement.classList = "btn stop"
    btnLeftElement.innerText = "STOP"
    chronometer.start(printTime)
  }
  else {
    btnLeftElement.classList = "btn start"
    btnLeftElement.innerText = "START"
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList == "btn reset") {
    btnRightElement.classList= "btn split"
    btnRightElement.innerText = "SPLIT"
    
  }
  else {
    btnRightElement.classList = "btn reset"
    btnRightElement.innerText= "RESET"
    printSplit()
  }
});

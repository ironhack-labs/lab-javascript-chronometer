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

const id = null

function printTime() {
  let id = setInterval(() => {
    console.log("hola")
  }, 1)
}

function printMinutes() {
  getMinutes() = document.querySelector()
  const minUniElement.innerHTML = chronometer.split
} 0
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement === "btn start") {
    printTime()
    btnLeftElement.className = "btn stop"
    btnLeftElement.innerText = "STOP"
    btnRightElement.className = "btn split"
    btnRightElement.innerText = "SPLIT"
  }


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

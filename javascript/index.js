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
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("stop")){
    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
    btnLeftElement.textContent = ("START")
    btnRightElement.textContent = ("RESET");
    btnRightElement.classList.remove("split");
    btnRightElement.classList.add("reset");

  } else {
    btnLeftElement.classList.remove("start");
    btnLeftElement.classList.add("stop");
    btnLeftElement.textContent = ("STOP");
    btnRightElement.textContent = ("SPLIT") 
    btnRightElement.classList.add("split");
    btnRightElement.classList.remove("reset");
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
});

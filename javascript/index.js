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
  printMilliseconds();
}

function printMinutes() {
 let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
 minDecElement.textContent = minutes[0];
 minUniElement.textContent = minutes[1];
}

function printSeconds() {
 let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
 secDecElement.textContent = seconds[0];
 secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let millisec = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.textContent = millisec[0];
  milUniElement.textContent = millisec[1];
}

function printSplit() {
  let split = document.createElement("li");
  split.textContent = chronometer.split();
  splitsElement.appendChild(split);
}

function clearSplits() {
  chronometer.reset();
  minDecElement.textContent = "0";
  minUniElement.textContent = "0";
  secDecElement.textContent = "0";
  secUniElement.textContent = "0";
  milDecElement.textContent = "0";
  milUniElement.textContent = "0";
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
  }

  /*
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
*/

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {
    chronometer.start(printTime);
    btnLeftElement.textContent = "STOP";
    btnRightElement.textContent = "SPLIT";
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
  } else {
    chronometer.stop();
    btnLeftElement.textContent = "START";
    btnRightElement.textContent = "RESET";
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
  }
  });

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {
    clearSplits();    
  } else {
    printSplit();
  }
});

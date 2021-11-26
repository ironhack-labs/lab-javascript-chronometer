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

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === "START"){
    chronometer.start(printTime)
    btnLeftElement.innerText = "STOP";
    btnRightElement.innerText = "SPLIT";
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
  } else { 
    chronometer.stop()
    btnLeftElement.innerText = "START";
    btnRightElement.innerText = "RESET";
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
  } 
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "RESET"){
    chronometer.reset()
    printTime()
    while (splitsElement.firstChild) {
      splitsElement.removeChild(splitsElement.firstChild);
    }
  } else { 
    printSplit()
  } 
});

function printTime() {
  printSeconds()
  printMinutes()
}

function printMinutes() {
  let min = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(min)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(min)[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(sec)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(sec)[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement("li");
  split.innerText = minDecElement.innerText + minUniElement.innerText + ":" + secDecElement.innerText + secUniElement.innerText;
  splitsElement.appendChild(split);
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
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

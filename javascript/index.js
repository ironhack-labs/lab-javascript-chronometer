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
    printSeconds()
    printMinutes()
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
  const minUni = chronometer.getMinutes();
  minUniElement.textContent = minUni % 10;
  minDecElement.textContent = Math.floor(minUni/10);
}

function printSeconds() {
  // ... your code goes here
  const secUni = chronometer.getSeconds();
  secUniElement.textContent = secUni % 10;
  secDecElement.textContent = Math.floor(secUni/10);
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
  btnLeftElement.classList.add("stop")
  btnLeftElement.classList.remove("start")
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.add("start");
  btnLeftElement.classList.remove("stop");
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  minUniElement.textContent = 0;
  minDecElement.textContent = 0;
  secUniElement.textContent = 0;
  secDecElement.textContent = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.textContent === "START"){
    chronometer.start(printTime)
    setStopBtn();
    btnLeftElement.textContent = "STOP"
  } else {
    setStartBtn();
    chronometer.stop()
    btnLeftElement.textContent = 'START'
  }
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  setResetBtn();
});

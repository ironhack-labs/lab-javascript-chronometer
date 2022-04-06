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

function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  chronometer.getMinutes(minutes);
}

function printSeconds(seconds) {
  chronometer.getSeconds(seconds);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
 let Splitprint = document.create("li")
}

function clearSplits() {
  
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRightElement.className = "btn split"
  btnRightElement.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeftElement.className = 'btn start'
  btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
  btnRightElement.className = "btn reset"
  btnRightElement.innerHTML = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stop();
    setResetBtn();
    setStartBtn();

  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.contains('reset')) {
    chronometer.reset(setResetBtn);
    clearSplits();
    

  } else {
    printSplit();
  }
});

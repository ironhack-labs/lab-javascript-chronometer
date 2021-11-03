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

  chronometer.split()

  setInterval(() => {
    printMinutes()
    printSeconds()
  }, 1000);
  
}

function printMinutes() {
  minDecElement.innerText = chronometer.split().chartAt(1);
  minDecElement.setAttribute ('class', 'number');
  minUniElement.innerText = chronometer.split().chartAt(2);
  minUniElement.setAttribute ('class', 'number');
}

function printSeconds() {
  secDecElement.innerText = chronometer.split().chartAt(3);
  secUniElement.innerText = chronometer.split().chartAt(4);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  split()
}

function clearSplits() {
  reset ()
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.setAttribute ('class','btn stop')
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.setAttribute ('class', 'btn split')
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.setAttribute ('class','btn start')
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.setAttribute ('class','btn reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'STOP' ) {
    setStartBtn ();
    chronometer.start ()
  } else {
    setStopBtn ()
    printTime ()
    chronometer.stop ()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET' ) {
    setSplitBtn ()
    clearSplits ()
  } else {
    setResetBtn ()
  }
});

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
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = min[0];
  minDecElement.innerHTML = min[1];
}

function printSeconds() {
  let sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = sec[0];
  secUniElement.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.innerHTML = chronometer.split();
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = "";
  chronometer.reset();
  printTime()
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerHTML = "START"
}

function setResetBtn() {
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerHTML = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }
  else{
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('split')){
    printSplit();
  }
  if(btnRightElement.classList.contains('reset')){
    clearSplits();
  }
});

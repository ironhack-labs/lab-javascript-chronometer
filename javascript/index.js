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
  let minutes = chronometer.getMinutes();
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newLi = document.createElement('li');
  newLi.className = 'list-item';
  newLi.innerHTML = chronometer.split();
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  let splits = document.querySelectorAll('li');
  for (let split of splits){
    splitsElement.removeChild(split);
  }
}

function setStopBtn() {
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
}

function setStartBtn() {
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.className = 'btn start';
}

function setResetBtn() {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split'))
    printSplit();
  else{
    clearSplits();
    chronometer.reset();
    printTime();
  }
});

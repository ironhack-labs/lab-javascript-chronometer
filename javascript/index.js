const chronometer = new Chronometer();
let intervalId = null;
let running = false;

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

function printMinutes() {
  const minDec = chronometer.split()[0];
  const minUni = chronometer.split()[1];
  minDecElement.innerHTML = minDec;
  minUniElement.innerHTML = minUni;
}

function printSeconds() {
  const secDec = chronometer.split()[3];
  const secUni = chronometer.split()[4];
  secDecElement.innerHTML = secDec;
  secUniElement.innerHTML = secUni;
}

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

// ==> BONUS
function printMilliseconds() {
  const milDec = chronometer.split()[6]
  const milUni = chronometer.split()[7]
  milDecElement.innerHTML = milDec;
  milUniElement.innerHTML = milUni;
}

function printSplit() {
  const splitItem = document.createElement('li');
  splitItem.innerHTML = chronometer.split();
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setBtn(btn, prevClass, newClass) {
  btn.classList.remove(prevClass);
  btn.classList.add(newClass);
  btn.innerText = newClass.toUpperCase();
}

function setStopBtn() {
  setBtn(btnLeftElement, 'start', 'stop');
}

function setSplitBtn() {
  setBtn(btnRightElement, 'reset', 'split');
}

function setStartBtn() {
  setBtn(btnLeftElement, 'stop', 'start');
}

function setResetBtn() {
  setBtn(btnRightElement, 'split', 'reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(running) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
    running = false;
  } else { 
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
    running = true;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(running) {
    printSplit();
  } else {
    chronometer.reset();
    printTime();
    clearSplits();
  }
});

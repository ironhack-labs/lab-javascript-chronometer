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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let splitMinutes = minutes.split('');
  minDecElement.innerHTML = splitMinutes[0];
  minUniElement.innerHTML = splitMinutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let splitSeconds = seconds.split('');
  secDecElement.innerHTML = splitSeconds[0];
  secUniElement.innerHTML = splitSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let miliseconds = chronometer.getMiliseconds();
  let splitMiliseconds = miliseconds.split('');
  milDecElement.innerHTML = splitMiliseconds[0];
  milUniElement.innerHTML = splitMiliseconds[1];
}

function printSplit() {
let newSplit = chronometer.split()
splitsElement.innerHTML += `<li>${newSplit}</li>`
}

function clearSplits() {
splitsElement.innerHTML = null
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
    let printInterval
  if (event.target.outerText === 'START') {
    chronometer.start();
    setInterval(printTime, 1000);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
    clearInterval(printInterval)
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (event) => {
  if (event.target.outerText === 'RESET') {
    chronometer.reset();
    clearSplits()
    printTime()
  } else {
    printSplit()
  }
});
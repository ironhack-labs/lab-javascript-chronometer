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
  printMiliseconds();
}

setInterval(() => {
  printTime();
}, 1);

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

function printMiliseconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(
    chronometer.miliseconds
  );
  milDecElement.innerText = miliseconds[0];
  milUniElement.innerText = miliseconds[1];
}

// ==> BONUS
function printMilliseconds() {}

function printSplit() {
  splitsElement.innerHTML += `<li>${chronometer.split()}:${chronometer.computeTwoDigitNumber(
    chronometer.miliseconds
  )}</li>`;
}

function clearSplits() {}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.toggle('stop');
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.toggle('split');
}
function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.toggle('stop');
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    chronometer.start();
    setStopBtn();
  } else {
    chronometer.stop();
    setStartBtn();
  }

  if (btnRightElement.innerText === 'RESET') {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    chronometer.reset();
    milDecElement.innerText = '0';
    milUniElement.innerText = '0';
    splitsElement.innerHTML = '';
  } else {
    printSplit();
  }
});

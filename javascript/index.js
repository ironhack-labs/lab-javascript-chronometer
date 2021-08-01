const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const cenDecElement = document.getElementById('milDec');
const cenUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printCentiSeconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minUniElement.innerHTML = `${minutes[1]}`;
  minDecElement.innerHTML = `${minutes[0]}`;
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secUniElement.innerHTML = `${seconds[1]}`;
  secDecElement.innerHTML = `${seconds[0]}`;
}

// ==> BONUS
function printCentiSeconds() {
  let centiSeconds = chronometer.computeTwoDigitNumber(
    chronometer.getCentiSeconds()
  );
  cenUniElement.innerHTML = `${centiSeconds[1]}`;
  cenDecElement.innerHTML = `${centiSeconds[0]}`;
}

function printSplit() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let centiSeconds = chronometer.computeTwoDigitNumber(
    chronometer.getCentiSeconds()
  );
  splitsElement.innerHTML += `
    <li>${minutes}:${seconds}:${centiSeconds}</li>
  `;
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

setInterval(() => printTime(), 10);
// Start/Stop Button
let intervalId;
btnLeftElement.addEventListener('click', () => {
  switch (btnLeftElement.className) {
    case 'btn start':
      setStopBtn();
      setSplitBtn();
      chronometer.start();
      break;
    case 'btn stop':
      setStartBtn();
      setResetBtn();
      chronometer.stop();
      break;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  switch (btnRightElement.className) {
    case 'btn reset':
      clearSplits();
      chronometer.reset();
      break;
    case 'btn split':
      printSplit();
      break;
  }
});

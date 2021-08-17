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
  //let minutes =
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
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  splitsElement.innerHTML += '<li>' + minutes + ':' + seconds + '</li>';
}
//`<li>${minutes}:${seconds}</li>`;
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

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  switch (btnLeftElement.className) {
    case 'btn start':
      setStopBtn();
      setSplitBtn();
      chronometer.start();
      setInterval(() => printTime(), 10);
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
      setResetBtn();
      chronometer.reset();
      clearSplits();
      break;
    case 'btn split':
      setSplitBtn();
      chronometer.split();
      printSplit();
      break;
  }
});

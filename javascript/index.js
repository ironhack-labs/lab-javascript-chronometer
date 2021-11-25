const chronometer = new Chronometer();
var intervalId;

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
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  let li = document.createElement('li');
  li.innerText = (chronometer.split());
  splitsElement.appendChild(li);
}

function clearSplits() {
  splits.Element.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  clearInterval(intervalId);
  btnLeftElement.innerHTML = "START";
  btnLeftElement.className = "btn start";
  btnRightElement.innerHTML = "RESET";
  btnRightElement.className = "btn reset";
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start();
  intervalId = setInterval(printTime,10);
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = "btn split";
}

function setResetBtn() {
  chronometer.reset();
  chronometer.clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')){
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')){
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

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
  let minutesString = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerHTML = minutesString[0];
  minUniElement.innerHTML = minutesString[1];
  return minutesString;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsString = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerHTML = secondsString[0];
  secUniElement.innerHTML = secondsString[1];
  return secondsString;
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  let millisecondsString = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.innerHTML = millisecondsString[0];
  milUniElement.innerHTML = millisecondsString[1];
  return millisecondsString;
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.className = "list-item";
  li.innerHTML = splitTime;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
  btnLeftElement.className = "btn stop";
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.className = "btn split";

}

function setStartBtn() {
  btnLeftElement.innerHTML = "START";
  btnLeftElement.className = "btn start";
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
  btnRightElement.className = "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (!chronometer.intervalId) {
    setStopBtn();
    setSplitBtn();
  }
  else {
    setStartBtn();
    setResetBtn();
  }
});

if (btnLeftElement === "START") {
  chronometer.start(printTime);
}
if (btnLeftElement === "STOP") {
  chronometer.stop();
}

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement === "SPLIT") {
    printSplit();
  }
  if (btnRightElement === "RESET") {
    chronometer.reset();
    clearSplits();
  }
});

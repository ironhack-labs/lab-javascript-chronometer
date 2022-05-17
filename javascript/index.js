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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()),
    minutesArr = minutes.split();
  minDecElement.textContent = minutesArr[0];
  minUniElement.textContent = minutesArr[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()),
    secondsArr = seconds.split();
  secDecElement.textContent = secondsArr[0];
  secUniElement.textContent = secondsArr[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement(`li`);
  split.setAttribute(`class`, `list-item`);
  split.textContent = chronometer.split();

  splitsElement.appendChild(split);
}

function clearChoronometer() {
  chronometer.reset();
  minDecElement.textContent = `0`;
  minUniElement.textContent = `0`;
  secDecElement.textContent = `0`;
  secUniElement.textContent = `0`;
}

function clearSplits() {
  const splits = splitsElement.getElementsByTagName(`li`);

  while (splits.length) {
    splits[0].remove();
  }
}

function setStopBtn() {
  btnLeftElement.textContent = `STOP`;
  btnLeftElement.setAttribute(`class`, `btn stop`);
}

function setSplitBtn() {
  btnRightElement.textContent = `SPLIT`;
  btnRightElement.setAttribute(`class`, `btn split`);
}

function setStartBtn() {
  btnLeftElement.textContent = `START`;
  btnLeftElement.setAttribute(`class`, `btn start`);
}

function setResetBtn() {
  btnRightElement.textContent = `RESET`;
  btnRightElement.setAttribute(`class`, `btn reset`);
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const state = btnLeftElement.textContent;

  if (state === `START`) {
    chronometer.start(printTime);

    setStopBtn();
    setSplitBtn();
    // chronometer.refreshIntervalId = setInterval(printTime, 500);
  } else if (state === `STOP`) {
    chronometer.stop();
    // clearInterval(chronometer.refreshIntervalId);

    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const state = btnRightElement.textContent;

  if (state === `SPLIT`) {
    printSplit();
  } else if (state === `RESET`) {
    clearSplits()
    clearChoronometer();
  }
});

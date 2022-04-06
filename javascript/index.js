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
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 1);
}

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  )[0];
  milUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  )[0];
}

function printSplit() {
  let listElm = document.createElement('li');
  listElm.innerText =
    minDecElement.innerText +
    minUniElement +
    ':' +
    secDecElement.innerText +
    secUniElement.innerText;
  splitsElement.appendChild(listElm);
}

function clearSplits() {}

function setStopBtn() {
  btnLeftElement.className = 'btn  stop';
  btnLeftElement.innerHtml = 'Stop';

  btnRightElement.className = 'btn split';
  btnRightElement.innerHtml = 'Split';

  chronometer.start(printTime);
  console.log(chronometer.currentTime);
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className.includes('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.className.includes('stop')) {
    createSplit();
  } else {
    chronometer.reset();
    clearSplits();
  }
});

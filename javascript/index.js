const chronometer = new Chronometer();

let millis = 0;
secIntervalId = null;
millIntervalId = null;

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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  millis = chronometer.getMilliSecond();
  milDecElement.innerText = millis[0];
  milUniElement.innerText = millis[1];
}

function clearMillis() {
  chronometer.currentMillis = 0;
  printMilliseconds();
}

function printSplit() {
  if (btnRightElement.classList.contains('split')) {
    const splitTime = `<li>${chronometer.split()}</li>`
    const parentElement = document.querySelector("ol");
    parentElement.insertAdjacentHTML('beforeend', splitTime);
  }
}

function clearSplits() {
  const parent = document.querySelector('ol');
  parent.innerHTML = '';
}

function setStopBtn() {
  chronometer.start()
}

function setStartBtn() {
  chronometer.stop();
  clearInterval(secIntervalId);
  clearInterval(millIntervalId);
}

function setSplitBtn() {
}

function setResetBtn() {
  if (btnRightElement.innerText === 'RESET') {
    chronometer.reset()
    clearSplits();
    clearMillis();
    printTime();
  }
}

const toggleButtons = () => {
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');

  const leftBtnText = btnLeftElement.innerText;
  const rightBtnText = btnRightElement.innerText;

  btnLeftElement.innerText = leftBtnText === 'START' ? 'STOP' : 'START';
  btnRightElement.innerText = rightBtnText === 'RESET' ? 'SPLIT' : 'RESET';
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  toggleButtons();
  if (btnLeftElement.classList.contains('stop')) {
    setStopBtn();
    secIntervalId = chronometer.start(printTime, 1000);
    millIntervalId = chronometer.start(printMilliseconds, 1);
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  setResetBtn();
  printSplit();
});

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.innerText = splitTime;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
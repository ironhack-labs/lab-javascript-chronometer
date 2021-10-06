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
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
  // console.log(minutes);
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
  // console.log(seconds);
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  const ms = chronometer.getMilliseconds();
  milDecElement.textContent = milliSeconds[0];
  milUniElement.textContent = milliSeconds[1];
  console.log(milliSeconds);
}

function printSplit() {
  const newElement = document.createElement('li');
  newElement.textContent = chronometer.split();
  document.getElementById('splits').appendChild(newElement);
}

function clearSplits() {
  document.querySelectorAll('#splits li').forEach((el) => el.remove());
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {}

function setStartBtn(cb) {
  chronometer.start(cb);
}

function setResetBtn() {
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', function () {
  if (this.classList.contains('start')) {
    setStartBtn(printTime);
    this.textContent = 'STOP';
  } else if (this.classList.contains('stop')) {
    setStopBtn();
    this.textContent = 'START';
  }
  if (btnRightElement.classList.contains('reset')) {
    btnRightElement.textContent = 'SPLIT';
  } else if (btnRightElement.classList.contains('split')) {
    btnRightElement.textContent = 'RESET';
  }
  this.classList.toggle('start');
  this.classList.toggle('stop');
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
});

// Reset/Split Button
btnRightElement.addEventListener('click', function () {
  if (this.classList.contains('split')) {
    printSplit();
  } else {
    clearSplits();
    setResetBtn();
    printTime();
  }
});

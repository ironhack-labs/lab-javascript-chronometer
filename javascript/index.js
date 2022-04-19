const chronometer = new Chronometer();
//console.log(chronometer);
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
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  //milUniElement =
  //milUniElement =
}

function printSplit() {
  let list = document.createElement('li');
  list.innerHTML = chronometer.split();
  splitsElement.appendChild(list);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.classList = 'btn stop';
  btnLeftElement.innerHTML = 'stop';
}

function setSplitBtn() {
  btnRightElement.classList = 'btn split';
  btnRightElement.innerHTML = 'split';
}

function setStartBtn() {
  btnLeftElement.classList = 'btn start';
  btnLeftElement.innerHTML = 'start';
}

function setResetBtn() {
  btnRightElement.classList = 'btn reset';
  btnRightElement.innerHTML = 'reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
    setResetBtn();
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    clearSplits();
    chronometer.reset();
    printTime();
  } else if (btnRightElement.classList.contains('split')) {
    printSplit();
  }
});

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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutesString = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minDecElement.innerText = `${minutesString[0]}`;
  minUniElement.innerText = `${minutesString[1]}`;
}

function printSeconds() {
  let secondsString = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secDecElement.innerText = `${secondsString[0]}`;
  secUniElement.innerText = `${secondsString[1]}`;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newLi = document.createElement('li');
  newLi.className = 'liItem';
  newLi.innerText = `${chronometer.split()}`;
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.remove();
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  chronometer.reset();
  printTime();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeft.className === 'btn start') {
    btnLeft.className = 'btn stop';
    btnLeft.innerText = 'STOP';
    btnRight.className = 'btn split';
    btnRight.innerText = 'SPLIT';
    setStartBtn();
  } else if (btnLeft.className === 'btn stop') {
    btnLeft.className = 'btn start';
    btnLeft.innerText = 'START';
    btnRight.className = 'btn reset';
    btnRight.innerText = 'RESET';
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    setResetBtn();
  } else if (btnRight.className === 'btn split') {
    setSplitBtn();
  }
});

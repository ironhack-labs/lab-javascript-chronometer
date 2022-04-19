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
  printMilliseconds();
}

function printMinutes() {
  let minUni = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minUni[0];
  minUniElement.innerHTML = minUni[1];
}

function printSeconds() {
  let secUni = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  secDecElement.innerHTML = secUni[0];
  secUniElement.innerHTML = secUni[1];
}

// ==> BONUS
function printMilliseconds() {
  let milUni = chronometer.computeTwoDigitNumber(chronometer.getMil());

  milDecElement.innerHTML = milUni[0];
  milUniElement.innerHTML = milUni[1];
}

function printSplit() {
  const createLi = document.createElement('li');
  createLi.innerHTML = chronometer.split();
  splitsElement.appendChild(createLi);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  const allDigits = document.getElementsByClassName('number');
  for (let i = 0; i < allDigits.length; i++) {
    allDigits[i].innerHTML = 0;
  }
  const clearMil = document.querySelectorAll('#milDec, #milUni');
  for (let i = 0; i < clearMil.length; i++) {
    clearMil[i].innerHTML = 0;
  }
  chronometer.reset();
}

function setStopBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
  chronometer.stop();
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
  chronometer.start(printTime);
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (e) => {
  if (e.currentTarget.innerHTML == 'START') {
    setSplitBtn();
    setStartBtn();
  } else {
    setStopBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (e) => {
  if (e.currentTarget.innerHTML == 'RESET') {
    setResetBtn();
    clearSplits();
  } else {
    printSplit();
  }
});

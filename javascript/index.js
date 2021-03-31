const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const num = chronometer.getMinutes();
  const str = chronometer.twoDigitsNumber(num);
  minDec.innerText = str[0];
  minUni.innerText = str[1];
}

function printSeconds() {
  const num = chronometer.getSeconds();
  const str = chronometer.twoDigitsNumber(num);
  secDec.innerText = str[0];
  secUni.innerText = str[1];
}

// ==> BONUS
function printMilliseconds() {
  const num = chronometer.getMilliseconds();
  const str = chronometer.twoDigitsNumber(num);
  milDec.innerText = str[0];
  milUni.innerText = str[1];
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  document.querySelector('#splits').innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnRight.classList.replace('split', 'reset');
  btnLeft.innerText = 'START';
  btnRight.innerText = 'RESET';
  chronometer.stopClick();
}

function setSplitBtn() {
  const li = document.createElement('li');
  li.innerText = chronometer.splitClick();
  document.querySelector('#splits').appendChild(li);
}

function setStartBtn() {
  btnLeft.classList.replace('start', 'stop');
  btnRight.classList.replace('reset', 'split');
  btnLeft.innerText = 'STOP';
  btnRight.innerText = 'SPLIT';
  chronometer.startClick(printTime, printMilliseconds);
}

function setResetBtn() {
  minDec.innerText = 0;
  minUni.innerText = 0;
  secDec.innerText = 0;
  secUni.innerText = 0;
  milDec.innerText = 0;
  milUni.innerText = 0;
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

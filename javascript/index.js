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
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.twoDigitsNumber(
    chronometer.getMilliseconds()
  );

  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  const split = chronometer.splitClick();

  const li = document.createElement('li');
  li.innerText = split;

  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = 'START';
}

function setSplitBtn() {}

function setStartBtn() {
  chronometer.startClick(printTime);

  btnLeft.innerText = 'STOP';
  btnRight.innerText = 'SPLIT';
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');

  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');

  if (btnLeft.innerText === 'STOP') {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    setResetBtn();
  } else {
    printSplit();
  }
});

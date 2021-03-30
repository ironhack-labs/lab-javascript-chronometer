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
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.textContent = milliseconds[0];
  milUni.textContent = milliseconds[1];
}

function printSplit() {
  const newLi = document.createElement('li');
  newLi.textContent = chronometer.splitClick();
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = '';
}

function startBtnClicked() {
  chronometer.startClick(printTime)
  btnLeft.textContent = 'STOP';
  btnRight.textContent = 'SPLIT';
}

function stopBtnClicked() {
  chronometer.stopClick();
  btnLeft.textContent = 'START';
  btnRight.textContent = 'RESET';
}

function toggleButtons() {
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');

  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
}

function resetBtnClicked() {
  chronometer.resetClick();
  printTime();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.textContent === 'START'
  ? startBtnClicked()
  : stopBtnClicked();

  toggleButtons();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.textContent === 'RESET'
  ? resetBtnClicked()
  : printSplit();
});

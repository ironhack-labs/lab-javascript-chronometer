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
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.textContent = milliseconds[milliseconds.length];
  milUni.textContent = milliseconds[(milliseconds.length - 1)];
}

function clearSplits() {
  lis = document.querySelectorAll('#splits li');
  lis.forEach(li => li.remove())
}

function setStopBtn() {
  btnLeft.textContent = 'START';
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');

  btnRight.textContent = 'RESET';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');

  chronometer.stopClick();
}

function setSplitBtn() {
  let li = document.createElement('li');

  let split = chronometer.splitClick();
  li.textContent = split;

  splits.appendChild(li);
}

function setStartBtn() {
  btnLeft.textContent = 'STOP';
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');

  btnRight.textContent = 'SPLIT';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');

  chronometer.startClick(printTime);
}

function setResetBtn() { 
  clearSplits();
  chronometer.resetClick() 
}

// Start/Stop Button
btnLeft.addEventListener('click', () => { 
  (btnLeft.classList.contains('start')) ? setStartBtn(): setStopBtn(); 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  (btnRight.classList.contains('reset')) ? setResetBtn() : setSplitBtn();
});

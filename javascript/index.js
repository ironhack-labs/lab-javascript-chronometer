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
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];

  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  newLine = document.createElement('li');
  newLine.textContent = `${chronometer.splitClick()}`;
  splits.appendChild(newLine);
}

function clearSplits() {
  splits.innerHTML = '';
  chronometer.currentTime = 0;
  printTime();
}

function setResetBtn() {
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');
  document.querySelector('.btn.reset').textContent = 'RESET';
}

function setSplitBtn() {
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');
  document.querySelector('.btn.split').textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');
  document.querySelector('.btn.start').textContent = 'START';
}

function setStopBtn() {
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');
  document.querySelector('.btn.stop').textContent = 'STOP';
}

// Start/Stop Button

btnLeft.onclick = btnLeftEventHandler;
function btnLeftEventHandler() {
  if (document.querySelector('.btn.start')) {
    chronometer.startClick(printTime);
    console.log('start');
    setSplitBtn();
    setStopBtn();
  } else if (document.querySelector('.btn.stop')) {
    chronometer.stopClick();
    console.log('stop');
    setResetBtn();
    setStartBtn();
  }
  printTime();
}

// Reset/Split Button
btnRight.addEventListener('click', () => {
  document.querySelector('.btn.split') ? printSplit() : clearSplits();
});

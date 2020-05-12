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
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes.slice(0);
  minUni.innerHTML = minutes.slice(1);
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds.slice(0);
  secUni.innerHTML = seconds.slice(1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement('li');
  li.className = 'splits'
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.classList.toggle('start');
  btnLeft.classList.remove('stop');
    chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.toggle('split');
  btnRight.classList.remove('reset');
}

function setStartBtn() {
  chronometer.startClick(printTime);
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.toggle('stop');
  btnLeft.classList.remove('start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.toggle('reset');
  btnRight.classList.remove('split')
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStartBtn();
    setSplitBtn();
  } else {
    setStopBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    clearSplits();
    chronometer.resetClick();
  } else {
    printSplit();
  }
});
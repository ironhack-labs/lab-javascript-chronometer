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

function printTime(sec, min) {
  printSeconds(sec);
  printMinutes(min);
}

function printMinutes(min) {
  minDec.innerText = `${Math.floor(min / 10)}`;
  minUni.innerText = `${Math.floor(min % 10)}`;
}

function printSeconds(sec) {
  secDec.innerText = `${Math.floor(sec / 10)}`;
  secUni.innerText = `${Math.floor(sec % 10)}`;

}

// ==> BONUS
function printMilliseconds(mil) {
  milUni.innerText = `${Math.floor(mil % 10)}`;
  milDec.innerText = `${Math.floor(mil / 10)}`;
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
let intervalId = 0;

btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText = 'SPLIT';

    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerText = 'STOP';

    chronometer.startClick();

    intervalId = setInterval(() => printTime(chronometer.getSeconds(), chronometer.getMinutes()), 1);

  } else {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerText = 'RESET';

    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerText = 'START';
    chronometer.stopClick();

    clearInterval(intervalId);
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.resetClick();
    printTime(0, 0);
  } else {
    // recibir un valor de chronomerter.splitClick();
  }
});

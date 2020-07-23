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
  setInterval(() => {
    secDec.innerHTML = printSeconds();
    secUni.innerHTML = "";
    minDec.innerHTML = printMinutes();
    minUni.innerHTML = "";
    milDec.innerHTML = printMilliseconds();
    milUni.innerHTML = "";
  },1000);
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  return chronometer.twoDigitsNumber(chronometer.getMiliseconds());
}
// function getMiliseconds not created in chronometer.js

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button 
btnLeft.addEventListener('click', () => {
  btnLeft.className.toggle('btn stop');
  btnRight.className.toggle('btn split');

  if (btnLeft.innerHTML === 'START') {
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick(printTime);
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnLeft.innerHTML = 'START';
    chronometer.stopClick();
    btnRight.innerHTML = 'RESET';
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});

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
  minNumbers = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minNumbers[0];
  minUni.innerHTML = minNumbers[1];
}

function printSeconds() {
  secNumbers = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = secNumbers[0];
  secUni.innerHTML = secNumbers[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerHTML = chronometer.splitClick();
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.textContent = 'START';
}


function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.textContent = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});

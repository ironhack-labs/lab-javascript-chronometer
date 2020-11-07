const chronometer = new Chronometer();

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
  // print minutes and seconds
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // set a variable for minutes and another to make two digits, after set minDec, minUni
  const minutes = chronometer.getMinutes()
  const twoDigits = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = twoDigits[0];
  minUni.innerHTML = twoDigits[1]; 
}

function printSeconds() {
  const seconds = chronometer.getSeconds()
  const twoDigits = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = twoDigits[0];
  secUni.innerHTML = twoDigits[1];
}

// ==> BONUS
function printMilliseconds() {
}

function printSplit() {
  let split = chronometer.splitClick();
  let li = document.createElement('li');
  li.innerHTML = split;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.textContent = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.textContent = 'SPLIT';
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
if (btnLeft.className === 'btn start') {
  setStopBtn();
  setSplitBtn();
  chronometer.startClick(printTime);
} else {
  setStartBtn();
  setResetBtn();
  chronometer.stopClick();
} 
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn split') {
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
    clearSplits();
  } 
});

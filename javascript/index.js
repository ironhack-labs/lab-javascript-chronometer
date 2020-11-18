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
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let m = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerText = m[1];
  minDec.innerText = m[0];
}

function printSeconds() {
  let s = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = s[1];
  secDec.innerText = s[0];
}

// ==> BONUS
function printMilliseconds() {
  console.log(chronometer.getMilliseconds());
  let ms = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milUni.innerText = ms[1];
  milDec.innerText = ms[0];
}

function printSplit() {
  document.getElementById('splits').innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    chronometer.startClick(printTime);
    printTime();
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
  if (btnRight.innerText === 'SPLIT') {
    printSplit();
} else {
    chronometer.resetClick();
    clearSplits();
    printTime();
}
});

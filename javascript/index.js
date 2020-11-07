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
  // printMinutes();
  // printSeconds();
  // printMilliseconds();
}

function printMinutes() {
  // minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  // minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  //
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
  setStartBtn()
}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn slit'
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerText === 'START') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
  } 
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnLeft.innerText = 'STOP') {
    chronometer.resetClick();
    setSplitBtn();
  } else {
    setResetBtn();
  }
})

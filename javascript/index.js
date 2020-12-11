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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  const min = chronometer.getMinutes();
  const twoDigitsMin = chronometer.twoDigitsNumber(min);
  minDec.innerHTML = twoDigitsMin.slice(0,1)
  minUni.innerHTML = twoDigitsMin.slice(1)
}

function printSeconds() {
  const sec = chronometer.getSeconds();
  const twoDigitsSec = chronometer.twoDigitsNumber(sec);
  secDec.innerHTML = twoDigitsSec.slice(0,1)
  secUni.innerHTML = twoDigitsSec.slice(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = "START";
}
function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START'){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  }else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn()
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET'){
    chronometer.resetClick();
    printTime();
  }else{
    printSplit();
  }
});

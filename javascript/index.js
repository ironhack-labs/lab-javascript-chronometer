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

function printTime(min, sec) {
  printMinutes(min);
  printSeconds(sec);
}

function printMinutes(min) {
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds(sec) {
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds(mil) {
  milDec.innerHTML = mil[0];
  milUni.innerHTML = mil[1];
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  splits.innerHTML = '';
}

function resetChrono(){
  chronometer.resetClick();
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
}

function setStopBtn() {
  //We can remplace add and remove by toggle
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START'){
    chronometer.startClick(printTime);
    chronometer.startClickMilli(printMilliseconds);
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
  if (btnRight.innerHTML === 'RESET'){
    resetChrono()
    clearSplits();
  }else{
    printSplit();
  }
});

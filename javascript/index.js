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
  printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()));
  printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  printCentiseconds(chronometer.twoDigitsNumber(chronometer.getCentiseconds()));
}

function printMinutes(minutes) {
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printCentiseconds(centiseconds) {
  milDec.innerText = centiseconds[0];
  milUni.innerText = centiseconds[1];
}

function printSplit() {
  splits.innerHTML += `<li> ${chronometer.splitClick()} </li>`;
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else if(btnLeft.classList.contains('stop')){
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
  else { console.log('error btnLeft') }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('reset')){
    chronometer.resetClick();
    clearSplits();
    printTime();
  }
  else if(btnRight.classList.contains('split')){
    printSplit();
  }
  else { console.log('error btnRight') }
});

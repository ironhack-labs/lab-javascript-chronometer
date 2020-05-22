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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0]
  minUni.innerText = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
}

function printSplit() {

}

function clearSplits() {
   chronometer.resetClick();

}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    
  } else {
    
  }
});
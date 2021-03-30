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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  const theTime = chronometer.splitClick();
  minDec.innerHTML = theTime[0];
  minUni.innerHTML = theTime[1];
}

function printSeconds() {
  const theTime = chronometer.splitClick();
  secDec.innerHTML = theTime[3];
  secUni.innerHTML = theTime[4];
}

// ==> BONUS
function printMilliseconds() {
  // const theTime = Chronometer.splitClick();
  // milDec.innerHTML = theTime[5];
  // milUni.innerHTML = theTime[6];
}

function printSplit() {
  const splitList = document.createElement('li');
  splitList.innerHTML = chronometer.splitClick();
  splits.appendChild(splitList);
  }
  

function clearSplits() {
  chronometer.resetClick();
  printTime();

  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
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
  if (btnRight.innerHTML === 'RESET') {
    clearSplits()
  } else {
    printSplit()
  }
});

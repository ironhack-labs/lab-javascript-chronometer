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
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes()).split('');
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds()).split('');
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const parentList = document.getElementById('splits');
  const listItem = document.createElement('li');
  listItem.innerHTML = chronometer.splitClick();
  parentList.appendChild(listItem);
}

function clearSplits() {
  const parentList = document.getElementById('splits');
  parentList.innerHTML = '';
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
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className === 'btn start') {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else if(btnLeft.className === 'btn stop'){
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === 'btn reset') {
    chronometer.resetClick();
    printTime();
    clearSplits();
  } else if(btnRight.className === 'btn split'){
    printSplit();
  }
});

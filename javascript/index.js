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
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  time = document.createElement('li')
  time.innerHTML = chronometer.splitClick()
  splits.appendChild(time)  
  
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  document.getElementById('btnLeft').className = 'btn start';
  document.getElementById('btnLeft').innerHTML = 'START';
  document.getElementById('btnRight').className = 'btn reset';
  document.getElementById('btnRight').innerHTML = 'RESET';
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
  chronometer.startClick(printTime);
}

function setResetBtn() {
  chronometer.resetClick()
  printTime()
  clearSplits()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.innerHTML === 'START') {
      setStartBtn()
  }else if(btnLeft.innerHTML === 'STOP'){
      setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'RESET'){
    setResetBtn()
  }else if(btnRight.innerHTML === 'SPLIT'){
    setSplitBtn()
  }
});

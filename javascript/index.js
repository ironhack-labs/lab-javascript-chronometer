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
  setInterval()
}

function printMinutes() {
  splitClick(min, sec)
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {


}

function setStopBtn() {

  btnLeft.className = 'btn stop'
  btnLeft.innerText = 'stop'
}

function setSplitBtn() {

  btnRight.className = 'btn split'
  btnRight.innerText = 'split'
}

function setStartBtn() {

  btnLeft.className = 'btn start'
  btnLeft.innerText = 'start'
}

function setResetBtn() {

  btnRight.className = 'btn reset'
  btnRight.innerText = 'reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.className === 'btn start') {
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()

  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()


  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.className === 'btn reset') {
    chronometer.resetClick()

  } else {
    chronometer.splitClick()


  }

});

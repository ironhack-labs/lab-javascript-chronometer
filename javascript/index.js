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
  minDec.innerText = chronometer.splitClick()[0]
  minUni.innerText = chronometer.splitClick()[1]
}

function printSeconds() {
  secDec.innerText = chronometer.splitClick()[3]
  secUni.innerText = chronometer.splitClick()[4]
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
  btnLeft.innerHTML = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerHTML = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET'
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if (btnLeft.innerHTML === 'START') {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime)
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
   }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
})
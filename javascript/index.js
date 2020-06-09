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
  // ... your code goes here
  printSeconds()
  printMinutes()
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0)


}

function printSeconds() {
  // ... your code goes here
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0)
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
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText === 'START') {
    btnLeft.innerText = 'STOP'
    btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')
    btnRight.innerText = "SPLIT"
    chronometer.startClick()
  } else {
    btnLeft.innerText = 'START'
    btnLeft.classList.remove('stop')
    btnLeft.classList.add('start')
    btnRight.innerText = 'RESET'
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});


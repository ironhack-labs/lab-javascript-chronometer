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
  printSeconds()
  printMinutes()
}

function printMinutes() {
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0)

}

function printSeconds() {
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0)
}

// ==> BONUS
function printMilliseconds() {
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds()).charAt(1)
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliseconds()).charAt(0)
}

function printSplit() {
  let splitStop = document.createElement('li')
  splitStop.innerText = chronometer.splitClick()
  splits.appendChild(splitStop)
}

function resetClock() {
  chronometer.resetClick()
  splits.innerHTML = ''
  setResetBtn()
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
  secUni.innerText = '0'
  secDec.innerText = '0'
  minUni.innerText = '0'
  minDec.innerText = '0'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText === 'START') {
    btnLeft.innerText = 'STOP'
    // btnLeft.classList.toggle('btn start', 'btn stop')
    btnLeft.classList.remove('start')
    btnLeft.classList.add('stop')
    btnRight.innerText = 'SPLIT'
    chronometer.startClick()
  } else {
    btnLeft.innerText = 'START'
    btnRight.innerText = 'RESET'
    btnLeft.classList.remove('stop')
    btnLeft.classList.add('start')
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'SPLIT') {
    printSplit()
  } else {
    resetClock()
  }
});

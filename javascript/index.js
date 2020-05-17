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
  printMilliseconds()
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = minutes[0]
  minUni.innerText = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  milDec.innerText = milliseconds[0]
  milUni.innerText = milliseconds[1]
}

function printSplit() {
  const split = chronometer.splitClick()
  splits.innerHTML += `<li>${split}</li>`
}

function clearSplits() {
  splits.innerHTML = ''
}

function setStopBtn() {
  btnLeft.classList.remove('start')
  btnLeft.classList.add('stop')
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.remove('reset')
  btnRight.classList.add('split')
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.classList.add('start')
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  btnRight.classList.remove('split')
  btnRight.classList.add('reset')
  btnRight.innerText = 'RESET'
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.startClick(printTime)
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
  if (btnLeft.classList.contains('stop')) {
    printSplit()
  } else {
    clearSplits()
    chronometer.resetClick()
    minDec.innerText = '0'
    minUni.innerText = '0'
    secDec.innerText = '0'
    secUni.innerText = '0'
    milDec.innerText = '0'
    milUni.innerText = '0'
  }
  
});

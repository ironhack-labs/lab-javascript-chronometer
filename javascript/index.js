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

function printTime(minutes, seconds) {
  // ... your code goes here
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minUni.innerText = min[1]
  minDec.innerText = min[0]
}

function printSeconds() {
  // ... your code goes here
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secUni.innerText = sec[1]
  secDec.innerText = sec[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let mil = chronometer.twoDigitsNumber(chronometer.getMiliseconds())
  milUni.innerText = chronometer.twoDigitsNumber(mil)[1]
  milDec.innerText = chronometer.twoDigitsNumber(mil)[0]
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li')
  li.innerText = chronometer.splitClick()
  splits.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = ''
  minDec.innerHTML = 0
  minUni.innerHTML = 0
  secDec.innerHTML = 0
  secUni.innerHTML = 0
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'STOP'
  btnLeft.style.backgroundColor = 'red'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'SPLIT'
  btnRight.style.backgroundColor = 'blue'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'START'
  btnLeft.style.backgroundColor = 'green'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'RESET'
  btnRight.style.backgroundColor = 'gray'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick(printTime, printMilliseconds)
    setStopBtn()
    setSplitBtn()
  } else if (btnLeft.innerHTML === 'STOP') {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick()
    clearSplits()
  } else {
    printSplit()
  }
});

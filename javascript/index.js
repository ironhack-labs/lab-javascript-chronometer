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
  printCentiseconds()
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  document.getElementById('minUni').innerHTML = minutes[1]
  document.getElementById('minDec').innerHTML = minutes[0]
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  document.getElementById('secUni').innerHTML = seconds[1]
  document.getElementById('secDec').innerHTML = seconds[0]
}

// ==> BONUS
function printCentiseconds() {
  const centiSeconds = chronometer.twoDigitsNumber(chronometer.getCentiseconds())
  document.getElementById('milUni').innerHTML = centiSeconds[1]
  document.getElementById('milDec').innerHTML = centiSeconds[0]
}

// function printMilliseconds() {
//   // ... your code goes here
// }

function printSplit() {
  const parentNode = document.getElementById('splits')
  let splitTime = document.createElement('li')
  splitTime.innerHTML = chronometer.splitClick()
  parentNode.appendChild(splitTime)
}

function clearSplits() {
  printTime()
  const parentNode = document.getElementById('splits')
  const splitsToClear = document.querySelectorAll('#splits li')
  splitsToClear.forEach((split)=>{
    parentNode.removeChild(split)
  })
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP'
  btnLeft.classList.remove('start')
  btnLeft.classList.add('stop')
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
  btnRight.classList.remove('reset')
  btnRight.classList.add('split')
}

function setStartBtn() {
  btnLeft.innerHTML = 'START'
  btnLeft.classList.remove('stop')
  btnLeft.classList.add('start')
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET'
  btnRight.classList.remove('split')
  btnRight.classList.add('reset')
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === 'btn start') {
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()
  } else if (btnLeft.className === 'btn stop') {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  } else {
    throw `The button class was not recognized`;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    chronometer.resetClick()
    clearSplits()
  } else if (btnRight.className === 'btn split') {
    printSplit()
  } else {
    throw `The button class was not recognized`
  }
});

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
  let min = chronometer.getMinutes()
  minDec.textContent = chronometer.twoDigitsNumber(min)[0]
  minUni.textContent = chronometer.twoDigitsNumber(min)[1]
}

function printSeconds() {
  let sec = chronometer.getSeconds()
    secDec.textContent = chronometer.twoDigitsNumber(sec)[0]
    secUni.textContent = chronometer.twoDigitsNumber(sec)[1]
  }


// ==> BONUS
function printMilliseconds() {
  let miliSec = chronometer.getMiliseconds()
  milDec.textContent = chronometer.twoDigitsNumber(miliSec)[0]
  milUni.textContent = chronometer.twoDigitsNumber(miliSec)[1]
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
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
  if (btnLeft.classList.contains('start')) {
    btnLeft.textContent = 'START'
    chronometer.stopClick()
    btnRight.classList.remove('split')
    btnRight.classList.add('reset')
    btnRight.textContent = 'RESET'
  } else {
    btnRight.classList.add('split')
    btnRight.classList.remove('reset')
    btnLeft.textContent = 'STOP'
    btnRight.textContent = 'SPLIT'
    chronometer.startClick(printTime)
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    let li = document.createElement("li")
    li.textContent = chronometer.splitClick()
    splits.appendChild(li)
  } else {
    chronometer.resetClick()
    printTime()
    splits.innerHTML= ''
  }
});

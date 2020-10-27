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
  console.log(chronometer.currentTime)
}

function printMinutes() {
  minDec.innerText = Math.floor(chronometer.getMinutes() / 10)
  minUni.innerText = chronometer.getMinutes() % 10
}

function printSeconds() {
  /*let seconds = chronometer.getSeconds()
  if (seconds < 10) {
    secUni.innerText = seconds
  } else {
    secDec.innerText = Math.floor(seconds / 10)
    secUni.innerText = seconds % 10
  }*/
  secDec.innerText = Math.floor(chronometer.getSeconds() / 10)
  secUni.innerText = chronometer.getSeconds() % 10
  
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
  let button = document.querySelector('#btnLeft')
  button.classList.remove('start')
  button.classList.add('stop')
  button.innerHTML = 'STOP'
}

function setSplitBtn() {
  let button = document.querySelector('#btnRight')
  button.classList.remove('reset')
  button.classList.add('split')
  button.innerHTML = 'SPLIT'
}

function setStartBtn() {
  let button = document.querySelector('#btnLeft')
  button.classList.remove('stop')
  button.classList.add('start')
  button.innerHTML = 'START'

}

function setResetBtn() {
  let button = document.querySelector('#btnRight')
  button.classList.remove('split')
  button.classList.add('reset')
  button.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (document.querySelector('.start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick()
    printTime()
  } else {
    setStartBtn()
    chronometer.stopClick()
    setResetBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (document.querySelector('.reset')) {
    chronometer.resetClick()
  } else {
    chronometer.splitClick()
    }
});

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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]
  
}

function printSeconds() {
  // ... your code goes here
 let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
 secDec.innerHTML = seconds[0]
 secUni.innerHTML = seconds[1]
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
  btnLeft.setAttribute('class', 'btn stop')
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.setAttribute('class', 'btn split')
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.setAttribute('class', 'btn start')
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.setAttribute('class', 'btn reset')
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.classList.contains('start')){
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime)
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here


});


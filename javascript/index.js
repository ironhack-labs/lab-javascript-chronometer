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


}

function printMinutes() {
  // ... your code goes here
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
  // ... your code goes here
}

function setStopBtn() {

  // ... your code goes here

  btnLeft.classList.add('stop')
  btnLeft.classList.remove('start')
  btnLeft.innerText = 'STOP'

}

function setSplitBtn() {
  
  // ... your code goes here

  btnRight.classList.add('split')
  btnRight.classList.remove('reset')
  btnRight.innerText = 'SPLIT'

}

function setStartBtn() {

  // ... your code goes here

  btnLeft.classList.add('start')
  btnLeft.classList.remove('stop')
  btnLeft.innerText = 'START'

}

function setResetBtn() {

  // ... your code goes here

  btnRight.classList.add('reset')
  btnRight.classList.remove('split')
  btnRight.innerText = 'RESET'

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  // ... your code goes here


  if (btnLeft.innerText === 'START') {
    
    chronometer.startClick()
    setStopBtn()
    setSplitBtn()

  } else {
    
    setStartBtn()
    setResetBtn()

  }
  

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

  if (btnRight.innerText === 'RESET') {



  } else {

  }

});

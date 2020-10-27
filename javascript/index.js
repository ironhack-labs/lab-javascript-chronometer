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

  const stopBtn = document.querySelector('#btnLeft')
  stopBtn.onclick = function () {

      const changeStopBtn = document.querySelector('#btnLeft')
      changeStopBtn.style.backgroundColor = '#5fca5f'
      changeStopBtn.innerHTML = 'START'
      const changeSplitBtn = document.querySelector('#btnRight')
      changeSplitBtn.style.backgroundColor = '#908e8e'
      changeSplitBtn.innerHTML = 'RESET'
  }
}

// FALTA APLICAR TOGGLE 

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here

  const startBtn = document.querySelector('#btnLeft')
  startBtn.onclick = function () {

      const changeStartBtn = document.querySelector('#btnLeft')
      changeStartBtn.style.backgroundColor = 'red'
      changeStartBtn.innerHTML = 'STOP'
      // changeStartBtn.classList.add = 'new-btn'
      const changeResetBtn = document.querySelector('#btnRight')
      changeResetBtn.style.backgroundColor = 'blue'
      changeResetBtn.innerHTML = 'SPLIT'
      // changeResetBtn.classList.add = 'new-btn'
  }
}


function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});


  const leftBtn = document.querySelector('#btnLeft')
  if (leftBtn.style.backgroundColor = '#5fca5f') {
    setStartBtn()
  } else {
    setStopBtn()
  }
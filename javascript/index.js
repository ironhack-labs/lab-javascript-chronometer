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
let x = 0;

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  minDec.innerText = chronometer.getMinutes()[0]
  minUni.innerText = chronometer.getMinutes()[1]
}

function printSeconds() {
  secDec.innerText = chronometer.getSeconds()[0]
  secUni.innerText = chronometer.getSeconds()[1]
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerText = chronometer.getMilliseconds()[0]
  milUni.innerText = chronometer.getMilliseconds()[1]
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.getMinutes()}:${chronometer.getSeconds()}:${chronometer.getMilliseconds()}</li>`
}

function clearSplits() {
  splits.innerHTML = ''
  chronometer.currentTime = 0;
  printTime()
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
  if(btnLeft.getAttribute('class') === 'btn start'){
    btnLeft.classList.toggle('start', false)
    btnLeft.classList.toggle('stop')
    btnLeft.innerText = 'STOP'
    btnRight.classList.toggle('reset', false)
    btnRight.classList.toggle('split')
    btnRight.innerText = 'SPLIT'
    chronometer.startClick()
    x = setInterval(a => printTime(),10)
  }
  else if(btnLeft.getAttribute('class') === 'btn stop')
  {
    btnLeft.classList.toggle('stop',false)
    btnLeft.classList.toggle('start')   
    btnLeft.innerText = 'START'
    btnRight.classList.toggle('split', false)
    btnRight.classList.toggle('reset')
    btnRight.innerText = 'RESET'
    chronometer.stopClick()
    clearInterval(x)
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.getAttribute('class') === 'btn reset')
  {
    clearSplits()
  }
  else if(btnRight.getAttribute('class') === 'btn split')
  {
    printSplit();
  }
});

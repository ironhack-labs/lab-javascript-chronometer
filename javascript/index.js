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

let set = 0;

function printTime() {
  set = setInterval(function() {
    printSeconds();
    printMinutes();
  }, 1000);
}

function printMinutes() {
  let minutes = chronometer.splitClick();
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.splitClick();
  secDec.innerHTML = seconds[3];
  secUni.innerHTML = seconds[4];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML = chronometer.splitClick()
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.toggle('stop')
  btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.toggle('split')
  btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.innerHTML = 'START'
}

function setResetBtn() { 
  btnRight.classList.remove('split')
  btnRight.innerHTML = 'RESET'
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === 'START') {
    printTime();
    chronometer.startClick();
    setSplitBtn()
    setStopBtn()
  } else {
    chronometer.stopClick();
    setStartBtn()
    setResetBtn()
    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'RESET') {
    clearInterval(set)
    chronometer.resetClick();
    setResetBtn()
  } else {
    setSplitBtn();
  }
});

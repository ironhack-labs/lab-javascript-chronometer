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
  getMinutes()
  getSeconds()
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let minSplit = min.split('');
  
  minDec.innerText = minSplit[0];
  minUni.innerText = minSplit[1];
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let secSplit = sec.split('')

  secDec.innerText = secSplit[0];
  secUni.innerText = secSplit[1];
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
  btnLeft.innerText = "STOP"
  btnLeft.className = "btn stop"
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT"
  btnRight.className = "btn split"
}

function setStartBtn() {
  btnLeft.innerText = "START"
  btnLeft.className = "btn start"
}

function setResetBtn() {
  btnRight.innerText = "RESET"
  btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText == "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText == "RESET") {
    setSplitBtn();
    

  } else {
    setResetBtn();

  }
});

//when click start bottom, change it to stop 
//and the color from green to ReadableStreamand then

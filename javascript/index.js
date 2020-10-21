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
  printMinutes(minutes);
  printSeconds(seconds);
  
}

function printMinutes() {
  let timeMinutes = getMinutes()
  minDec.innerHTML = timeMinutes[0];
  minUni.innerHTML = timeMinutes[1];
}

function printSeconds() {
  let timeSeconds = getSeconds()
  secDec.innerHTML = timeSeconds[0];
  secUni.innerHTML = timeSeconds[1];
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
  // add stop class to btnleft
  btnLeft.classList.toggle("class","btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.toggle("class","btn split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.toggle("class","btn start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.toggle("class","btn reset");
  btnRight.innerHTML = "RESET";
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick();
    //printTime()
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    clearInterval(chronometer.intervalId)
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
  }
});



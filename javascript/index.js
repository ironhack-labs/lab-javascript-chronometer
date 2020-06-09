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
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
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
  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle("split")
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick(printTime) 
    btnLeft.innerHTML = "STOP"
    btnRight.innerText = "SPLIT"
  } else {
    chronometer.stopClick()
    btnLeft.innerHTML = "START"
    btnRight.innerText = "RESET"
  }
 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    clearSplits();
  }

  if (btnRight.classList.contains('split')) {
    printSplit();
  }

});

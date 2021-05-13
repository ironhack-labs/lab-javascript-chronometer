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
  let minuteLeft = minDec.textContent = minutes[0]
  let minuteRigth = minUni.textContent = minutes[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  let secondLeft = secDec.textContent = seconds[0]
  let secondRigth = secUni.textContent = seconds[1]
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
  // Si tiene la clase de inicio, cambiara los botones btnLeft y btnRigth

  if (btnLeft.className === "btn start") {
    chronometer.startClick()
    btnLeft.className === "btn stop"
    btnLeft.textContent === 'STOP'
    //stop.textContent = "STOP"
    console.log("stop")
  } else {
    chronometer.stopClick()

    btnLeft.className === "btn start"
    btnLeft.textContent === 'START'
  }
});
// Reset/Split Button    
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.className === "btn reset") {
    chronometer.resetClick()
    btnRigth.className === "btn split"
    btnRight.textContent === 'SPLIT'
  } else {
    chronometer.splitClick()
    btnRight.className === "btn reset"
    btnRight.textContent === 'RESET'
  }
});

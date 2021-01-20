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

// pass this to startClick as the first callback function
function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerText = min[1];
  minDec.innerText = min[0];
}


function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = sec[1];
  secDec.innerText = sec[0];
}

// ==> BONUS
// pass this to startClick as the second callback function
function printMilliseconds() {
  let mil = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
  milUni.innerText = chronometer.twoDigitsNumber(mil)[1];
  milDec.innerText = chronometer.twoDigitsNumber(mil)[0];
}

function printSplit() {
  const li = document.createElement('li');
  li.innerText = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerText = "";
}

// I dont need this, this could be used for setAttribute, but I found toggle is much better
// function setStopBtn() {
//   // stop mil when stop btn clicked

// }

// function setSplitBtn() {
//   // ... your code goes here
// }

// function setStartBtn() {
//   // ... your code goes here
// }

// function setResetBtn() {
//   // ... your code goes here
// }

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('start'); 
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');

  if (btnLeft.classList[1] === 'stop' || btnRight.classList[1] === 'split') {
    // startClicking
    chronometer.startClick(printTime, printMilliseconds);
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    // printTime();
  } else {
    chronometer.stopClick();
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";

  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList[1] === 'reset') {
    clearSplits();
    chronometer.resetClick();
    printTime();
    printMilliseconds();
  } else {
    printSplit();
  }
});

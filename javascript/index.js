const chronometer = new Chronometer();
console.log(chronometer);
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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
}

// ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

// function printSplit() {
//   // ... your code goes here
// }

// function clearSplits() {
//   // ... your code goes here
// }

// function setStopBtn() {
//   // ... your code goes here
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
  btnLeft.classList.toggle("stop");
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.toggle("split");
    chronometer.startClick(printTime);
  } else {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnRight.classList.toggle("split");
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET") {
  chronometer.resetClick();
  minDec.innerHTML = "0";
  minUni.innerHTML = "0";
  secDec.innerHTML = "0";
  secUni.innerHTML = "0";
  splits.innerHTML ="";
  } if (btnRight.innerHTML === "SPLIT") {
    splits.innerHTML += `<li>${chronometer.splitClick()}</li>`
  }
});
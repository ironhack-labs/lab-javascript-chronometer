const chronometer = new Chronometer();
// get the buttons:

const btnLeft = document.getElementById('btnLeft');
btnLeft.onclick = function () {
  if (btnLeft.className === "btn start") {
    chronometer.startClick(printTime);
    // printTime as a callback
    // two functions printMinutes and printSeconds
  } else if (btnLeft.className === "btn stop") {
    chronometer.stopClick()
  }
};
const btnRight = document.getElementById("btnRight");
btnRight.onclick = function () {
  if (btnRight.className === "btn reset") {
    chronometer.resetClick()
  } else if (btnRight.className === "btn split") {
    chronometer.splitClick()
  }
}

// const splitTime = document.getElementById("splits")
// btnRight.onclick = function () {
//   return chronometer.splitClick()
// }`

// get the DOM elements that will serve us to display the time:
// let minDec = document.getElementById('minDec');
// let minUni = document.getElementById('minUni');
// let secDec = document.getElementById('secDec');
// let secUni = document.getElementById('secUni');
// let milDec = document.getElementById('milDec');
// let milUni = document.getElementById('milUni');
// let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
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
// btnLeft.addEventListener('click', () => {
//   // ... your code goes here
// });

// // Reset/Split Button
// btnRight.addEventListener('click', () => {
//   // ... your code goes here
// });
const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

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
  if (btnLeft.classList.contains("start")) {
    btnLeft.innerHTML = 'START';
    chronometer.stopClick();
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick();
  }
}

function setResetBtn() {
  // if (btnRight.classList.contains("reset")) {
  //   btnRight.innerHTML = 'RESET';
  //   chronometer.splitClick();
  // } if (btnRight.classList.contains("split")) {
  //   btnRight.innerHTML = 'SPLIT';
  //   chronometer.splitClick();
  // }

  // if (btnRight.classList.contains("reset")) {
  //   chronometer.splitClick();
  // } else {
  //   chronometer.resetClick();
  // }
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  return setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // btnRight.classList.toggle("reset");
  // btnRight.classList.toggle("split");
  // return setResetBtn();
});
